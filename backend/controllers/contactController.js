const nodemailer = require('nodemailer');

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;
const EMAIL_MAX_LENGTH = 254;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 5000;

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const HAS_LETTERS_REGEX = /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/g;

const PLACEHOLDER_PATTERNS = [
  'your_email@gmail.com',
  'your_app_password',
  'your_smtp_user',
  'your_smtp_password',
  'your-email@example.com',
  'example.com',
  'changeme',
  'replace_me',
];

const isPlaceholderValue = (value) => {
  if (!value || typeof value !== 'string') return true;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => normalized.includes(pattern));
};

const escapeHtml = (unsafe = '') =>
  String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const sanitizeHeaderValue = (value = '') =>
  String(value)
    .replace(/[\r\n]+/g, ' ')
    .trim();

const validateContactInput = ({ name, email, message }) => {
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
};

const getMailConfig = () => {
  const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_USER || '').trim();
  const smtpPass = (process.env.SMTP_PASS || process.env.EMAIL_PASS || '').trim();
  const smtpHost = (process.env.SMTP_HOST || (process.env.EMAIL_USER ? 'smtp.gmail.com' : '')).trim();
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465;

  if (
    !smtpHost ||
    isPlaceholderValue(smtpUser) ||
    isPlaceholderValue(smtpPass)
  ) {
    return null;
  }

  const toEmail = (process.env.CONTACT_TO_EMAIL || smtpUser).trim();
  const fromEmail = (process.env.CONTACT_FROM_EMAIL || smtpUser).trim();

  return {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    toEmail: isPlaceholderValue(toEmail) ? smtpUser : toEmail,
    fromEmail: isPlaceholderValue(fromEmail) ? smtpUser : fromEmail,
  };
};

exports.submitContactForm = async (req, res) => {
  try {
    // 1. Honeypot check (bots often populate hidden fields)
    const honeypot = String(req.body?.website ?? '').trim();
    if (honeypot.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Unable to process your submission.',
        fieldErrors: {},
      });
    }

    // 2. Normalize and validate inputs
    const name = String(req.body?.name ?? '')
      .replace(/\s+/g, ' ')
      .trim();
    const email = String(req.body?.email ?? '').trim();
    const message = String(req.body?.message ?? '')
      .replace(/\r\n/g, '\n')
      .trim();

    const fieldErrors = validateContactInput({ name, email, message });

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Please review the highlighted fields and try again.',
        fieldErrors,
      });
    }

    // 3. Check email delivery configuration (never fake success if unconfigured)
    const mailConfig = getMailConfig();

    if (!mailConfig) {
      console.warn(
        '[Contact API] Email credentials are not configured or use placeholder values. Configure SMTP_HOST/SMTP_USER/SMTP_PASS (or EMAIL_USER/EMAIL_PASS) in backend/.env.',
      );
      return res.status(503).json({
        success: false,
        error:
          'Something went wrong while sending your message. Please try again or contact me directly by email.',
        fieldErrors: {},
      });
    }

    // 4. Send email via configured SMTP transport
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: mailConfig.auth,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const safeName = sanitizeHeaderValue(name);
    const safeEmail = sanitizeHeaderValue(email);

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${mailConfig.fromEmail}>`,
      to: mailConfig.toEmail,
      replyTo: safeEmail,
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
    });

    if (!info || (Array.isArray(info.accepted) && info.accepted.length === 0)) {
      throw new Error('SMTP server did not accept the recipient address.');
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. I’ll get back to you as soon as possible.',
    });
  } catch (error) {
    console.error('[Contact API] Error sending contact message:', error.message);
    return res.status(500).json({
      success: false,
      error:
        'Something went wrong while sending your message. Please try again or contact me directly by email.',
      fieldErrors: {},
    });
  }
};
