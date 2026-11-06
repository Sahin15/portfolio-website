/**
 * Cloudflare Pages Serverless Function — POST /api/contact
 *
 * Compatible with:
 * - Cloudflare Pages Functions (Free tier, automatic routing at /api/contact)
 * - Local Vite dev/preview server middleware (via vite.config.js)
 * - Wrangler Pages local dev (`npx wrangler pages dev dist`)
 *
 * Required Server-Side Environment Variables (configured in Cloudflare Pages -> Settings -> Variables and Secrets):
 * - RESEND_API_KEY       (Secret) : API key from https://resend.com (Free tier: 3,000 emails/mo)
 * - CONTACT_TO_EMAIL     (Text)   : Recipient email address (defaults to sahinmondal7@gmail.com)
 * - CONTACT_FROM_EMAIL   (Text)   : Verified sender address in Resend (e.g. "Portfolio Contact <contact@sahinmondal.com>")
 * - ALLOWED_ORIGIN       (Text)   : Optional production origin restriction (e.g. "https://sahinmondal.com")
 */

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;
const EMAIL_MAX_LENGTH = 254;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 5000;
const MAX_BODY_BYTES = 16 * 1024;

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const HAS_LETTERS_REGEX = /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/g;

const DEFAULT_TO_EMAIL = 'sahinmondal7@gmail.com';
const DEFAULT_FROM_EMAIL = 'Portfolio Contact <onboarding@resend.dev>';

const SUCCESS_MESSAGE =
  'Thanks for reaching out. Your message has been sent successfully.';
const GENERIC_ERROR_MESSAGE =
  'Unable to send your message right now. Please try again or contact me directly via email.';
const RATE_LIMIT_ERROR_MESSAGE =
  'Too many messages sent recently. Please wait a few minutes or contact me directly via email.';

const PLACEHOLDER_PATTERNS = [
  'your_resend_api_key',
  're_your_api_key',
  're_123456',
  're_xxxxxx',
  'your_api_key',
  'changeme',
  'replace_me',
  'placeholder',
];

// Best-effort per-isolate rate limiting (5 submissions per 15 minutes per client IP)
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map();

function isRateLimited(clientIp) {
  const now = Date.now();
  for (const [ip, timestamps] of ipRequestLog.entries()) {
    const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      ipRequestLog.delete(ip);
    } else {
      ipRequestLog.set(ip, active);
    }
  }

  const recent = (ipRequestLog.get(clientIp) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  recent.push(now);
  ipRequestLog.set(clientIp, recent);
  return false;
}

function isPlaceholderSecret(value) {
  if (!value || typeof value !== 'string') return true;
  const normalized = value.trim().toLowerCase();
  if (!normalized || normalized.length < 10) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => normalized.includes(pattern));
}

function escapeHtml(unsafe = '') {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeHeaderValue(value = '') {
  return String(value)
    .replace(/[\r\n]+/g, ' ')
    .trim();
}

export function validateContactPayload({ name, email, message }) {
  const fieldErrors = {};

  if (!name) {
    fieldErrors.name = 'Name is required.';
  } else if (name.length < NAME_MIN_LENGTH) {
    fieldErrors.name = `Name must be at least ${NAME_MIN_LENGTH} characters.`;
  } else if (name.length > NAME_MAX_LENGTH) {
    fieldErrors.name = `Name cannot exceed ${NAME_MAX_LENGTH} characters.`;
  } else {
    const letterMatches = name.match(HAS_LETTERS_REGEX) || [];
    if (letterMatches.length < 2 || /[<>[\]{}]/.test(name)) {
      fieldErrors.name = 'Please enter a valid name.';
    }
  }

  if (!email) {
    fieldErrors.email = 'Email address is required.';
  } else if (
    email.length > EMAIL_MAX_LENGTH ||
    /[\r\n]/.test(email) ||
    !EMAIL_REGEX.test(email)
  ) {
    fieldErrors.email = 'Please enter a valid email address.';
  }

  const collapsedMessage = message.replace(/\s+/g, ' ').trim();
  if (!collapsedMessage) {
    fieldErrors.message = 'Message is required.';
  } else if (collapsedMessage.length < MESSAGE_MIN_LENGTH) {
    fieldErrors.message = `Please enter a more detailed message (at least ${MESSAGE_MIN_LENGTH} characters).`;
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    fieldErrors.message = `Message cannot exceed ${MESSAGE_MAX_LENGTH} characters.`;
  } else if (/^(.)\1+$/.test(collapsedMessage.replace(/\s+/g, ''))) {
    fieldErrors.message = 'Please enter a meaningful message.';
  }

  return fieldErrors;
}

function jsonResponse(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function onRequestPost(context) {
  const { request, env = {} } = context;

  try {
    // 1. Optional Origin check when ALLOWED_ORIGIN is explicitly configured
    const allowedOrigin = String(env.ALLOWED_ORIGIN || '').trim().replace(/\/+$/, '');
    const requestOrigin = String(request.headers.get('origin') || '').trim().replace(/\/+$/, '');
    if (
      allowedOrigin &&
      requestOrigin &&
      !requestOrigin.includes('localhost') &&
      !requestOrigin.includes('127.0.0.1') &&
      requestOrigin !== allowedOrigin
    ) {
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        403,
      );
    }

    // 2. Content-Type & payload size guard
    const contentType = String(request.headers.get('content-type') || '').toLowerCase();
    if (!contentType.includes('application/json')) {
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        415,
      );
    }

    const rawBody = await request.text();
    if (!rawBody || rawBody.length > MAX_BODY_BYTES) {
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        400,
      );
    }

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        400,
      );
    }

    // 3. Honeypot anti-spam check (reject bots that populate the hidden `website` field)
    const honeypot = String(body?.website ?? '').trim();
    if (honeypot.length > 0) {
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        400,
      );
    }

    // 4. Rate limit check per client IP
    const clientIp =
      request.headers.get('cf-connecting-ip') ||
      (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
      'unknown';

    if (isRateLimited(clientIp)) {
      return jsonResponse(
        {
          success: false,
          error: RATE_LIMIT_ERROR_MESSAGE,
          fieldErrors: {},
        },
        429,
        { 'Retry-After': '900' },
      );
    }

    // 5. Server-side input normalization & validation
    const name = String(body?.name ?? '')
      .replace(/\s+/g, ' ')
      .trim();
    const email = String(body?.email ?? '').trim();
    const message = String(body?.message ?? '')
      .replace(/\r\n/g, '\n')
      .trim();

    const fieldErrors = validateContactPayload({ name, email, message });
    if (Object.keys(fieldErrors).length > 0) {
      return jsonResponse(
        {
          success: false,
          error: 'Please review the highlighted fields and try again.',
          fieldErrors,
        },
        400,
      );
    }

    // 6. Verify email delivery credentials exist (never fake success)
    const resendApiKey = String(env.RESEND_API_KEY || '').trim();
    const toEmail = sanitizeHeaderValue(env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL) || DEFAULT_TO_EMAIL;
    const fromEmail = sanitizeHeaderValue(env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL) || DEFAULT_FROM_EMAIL;

    if (isPlaceholderSecret(resendApiKey)) {
      console.warn(
        '[Contact Function] RESEND_API_KEY is not configured or uses a placeholder value. Configure RESEND_API_KEY in Cloudflare Pages environment variables (or frontend/.dev.vars for local testing).',
      );
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        503,
      );
    }

    // 7. Send email via Resend HTTP API (Cloudflare Workers / Pages native fetch)
    const safeName = sanitizeHeaderValue(name);
    const safeEmail = sanitizeHeaderValue(email);

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: safeEmail,
        subject: `Portfolio Contact from ${safeName}`,
        text: `New portfolio inquiry received:\n\nName: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; color: #0f172a; line-height: 1.6;">
            <h2 style="margin-bottom: 16px; color: #1e293b;">New Portfolio Contact Message</h2>
            <p style="margin: 4px 0;"><strong>Name:</strong> ${escapeHtml(safeName)}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(safeEmail)}">${escapeHtml(safeEmail)}</a></p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
          </div>
        `,
      }),
    });

    let resendData = null;
    try {
      resendData = await resendResponse.json();
    } catch {
      resendData = null;
    }

    if (!resendResponse.ok || !resendData?.id) {
      console.error(
        '[Contact Function] Email provider rejected delivery:',
        resendResponse.status,
        resendData?.message || resendData?.name || 'Unknown error',
      );
      return jsonResponse(
        {
          success: false,
          error: GENERIC_ERROR_MESSAGE,
          fieldErrors: {},
        },
        502,
      );
    }

    return jsonResponse(
      {
        success: true,
        message: SUCCESS_MESSAGE,
      },
      200,
    );
  } catch (error) {
    console.error('[Contact Function] Unexpected error:', error?.message || error);
    return jsonResponse(
      {
        success: false,
        error: GENERIC_ERROR_MESSAGE,
        fieldErrors: {},
      },
      500,
    );
  }
}

export async function onRequest(context) {
  const method = context.request.method.toUpperCase();
  if (method === 'POST') {
    return onRequestPost(context);
  }
  if (method === 'OPTIONS') {
    return onRequestOptions(context);
  }
  return jsonResponse(
    {
      success: false,
      error: 'Method not allowed.',
    },
    405,
    { Allow: 'POST, OPTIONS' },
  );
}

