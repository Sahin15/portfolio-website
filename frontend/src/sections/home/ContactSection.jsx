import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { contactContent, siteIdentity } from '../../data/siteContent';

const MotionDiv = motion.div;
const MotionA = motion.a;

const iconMap = {
  Mail,
  Linkedin,
  Github,
  MapPin,
};

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;
const EMAIL_MAX_LENGTH = 254;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 5000;

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const HAS_LETTERS_REGEX = /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/g;

const initialForm = {
  name: '',
  email: '',
  message: '',
  website: '', // Honeypot field
};

const validateField = (fieldName, rawValue) => {
  if (fieldName === 'name') {
    const cleanName = String(rawValue ?? '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!cleanName) return 'Name is required.';
    if (cleanName.length < NAME_MIN_LENGTH) {
      return `Name must be at least ${NAME_MIN_LENGTH} characters.`;
    }
    if (cleanName.length > NAME_MAX_LENGTH) {
      return `Name cannot exceed ${NAME_MAX_LENGTH} characters.`;
    }
    const letterMatches = cleanName.match(HAS_LETTERS_REGEX) || [];
    if (letterMatches.length < 2 || /[<>[\]{}]/.test(cleanName)) {
      return 'Please enter a valid name.';
    }
    return undefined;
  }

  if (fieldName === 'email') {
    const cleanEmail = String(rawValue ?? '').trim();
    if (!cleanEmail) return 'Email address is required.';
    if (cleanEmail.length > EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(cleanEmail)) {
      return 'Please enter a valid email address.';
    }
    return undefined;
  }

  if (fieldName === 'message') {
    const rawTrimmed = String(rawValue ?? '').trim();
    const collapsedMessage = rawTrimmed.replace(/\s+/g, ' ').trim();
    if (!collapsedMessage) return 'Message is required.';
    if (collapsedMessage.length < MESSAGE_MIN_LENGTH) {
      return `Please enter a more detailed message (at least ${MESSAGE_MIN_LENGTH} characters).`;
    }
    if (rawTrimmed.length > MESSAGE_MAX_LENGTH) {
      return `Message cannot exceed ${MESSAGE_MAX_LENGTH} characters.`;
    }
    if (/^(.)\1+$/.test(collapsedMessage.replace(/\s+/g, ''))) {
      return 'Please enter a meaningful message.';
    }
    return undefined;
  }

  return undefined;
};

const validateAllFields = (values) => {
  const errors = {};
  const nameError = validateField('name', values.name);
  const emailError = validateField('email', values.email);
  const messageError = validateField('message', values.message);

  if (nameError) errors.name = nameError;
  if (emailError) errors.email = emailError;
  if (messageError) errors.message = messageError;

  return errors;
};

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const isSubmittingRef = useRef(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const isLoading = status.type === 'loading';

  const revealProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  const handleFocusForm = (event) => {
    event.preventDefault();
    if (nameInputRef.current) {
      nameInputRef.current.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'center',
      });
      nameInputRef.current.focus({ preventScroll: true });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((current) => ({ ...current, [name]: undefined }));
    }

    if (status.type === 'error' || status.type === 'success') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!['name', 'email', 'message'].includes(name)) return;
    // Validate on blur if user entered content or if an error was already shown
    if (value.length > 0 || fieldErrors[name]) {
      const error = validateField(name, value);
      setFieldErrors((current) => ({ ...current, [name]: error }));
    }
  };

  const focusFirstInvalidField = (errors) => {
    if (errors.name && nameInputRef.current) {
      nameInputRef.current.focus();
    } else if (errors.email && emailInputRef.current) {
      emailInputRef.current.focus();
    } else if (errors.message && messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent duplicate submissions while a request is in flight
    if (isSubmittingRef.current || isLoading) {
      return;
    }

    // Client-side honeypot guard (paired with backend honeypot check in /api/contact)
    if (String(formData.website ?? '').trim().length > 0) {
      setStatus({
        type: 'error',
        message:
          'Unable to send your message right now. Please try again or contact me directly via email.',
      });
      return;
    }

    const nextErrors = validateAllFields(formData);

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus({ type: 'idle', message: '' });
      focusFirstInvalidField(nextErrors);
      return;
    }

    const cleanName = formData.name.replace(/\s+/g, ' ').trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    isSubmittingRef.current = true;
    setFieldErrors({});
    setStatus({ type: 'loading', message: '' });

    const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');
    const endpoint = `${apiBaseUrl}/api/contact`;
    // Never leave the visitor waiting on an unreachable API: abort after 15s
    // and fall through to the honest error state with the direct email fallback.
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          website: formData.website,
        }),
      });

      let payload = null;
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        payload = await response.json();
      }

      if (!response.ok || !payload || payload.success !== true) {
        if (payload?.fieldErrors && Object.keys(payload.fieldErrors).length > 0) {
          setFieldErrors(payload.fieldErrors);
          setStatus({ type: 'idle', message: '' });
          focusFirstInvalidField(payload.fieldErrors);
          return;
        }

        setStatus({
          type: 'error',
          message:
            response.status === 429 && payload?.error
              ? payload.error
              : 'Unable to send your message right now. Please try again or contact me directly via email.',
        });
        return;
      }

      setFormData(initialForm);
      setFieldErrors({});
      setStatus({
        type: 'success',
        message:
          payload.message ||
          'Thanks for reaching out. Your message has been sent successfully.',
      });
    } catch {
      setStatus({
        type: 'error',
        message:
          'Unable to send your message right now. Please try again or contact me directly via email.',
      });
    } finally {
      window.clearTimeout(timeoutId);
      isSubmittingRef.current = false;
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-28"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[15%] h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute right-[-6%] bottom-[10%] h-80 w-80 rounded-full bg-purple-600/[0.09] blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Left Column: CTA Header, Buttons & Contact Methods */}
          <div className="min-w-0">
            <MotionDiv {...revealProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                <span>{contactContent.eyebrow}</span>
              </div>
            </MotionDiv>

            <MotionDiv {...revealProps(0.08)}>
              <h2 className="mt-5 font-sans text-[1.95rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
                <span className="block">{contactContent.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {contactContent.headline.highlight}
                  </span>{' '}
                  <span className="text-white">{contactContent.headline.line2Suffix}</span>
                </span>
              </h2>
            </MotionDiv>

            <MotionDiv {...revealProps(0.14)}>
              <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8">
                {contactContent.description}
              </p>
            </MotionDiv>

            {/* Primary & Secondary CTA Buttons */}
            <MotionDiv
              {...revealProps(0.2)}
              className="mt-7 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
            >
              <MotionA
                href="#contact-form"
                onClick={handleFocusForm}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-6px_rgba(79,70,229,0.5)] transition-all hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500 hover:shadow-[0_18px_42px_-6px_rgba(99,102,241,0.65)] sm:w-auto"
              >
                <span>Let’s Connect</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MotionA>

              <MotionA
                href={siteIdentity.resumeUrl}
                download={siteIdentity.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-white/14 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all hover:border-blue-400/35 hover:bg-white/[0.1] hover:text-white sm:w-auto"
              >
                <Download className="h-4 w-4 text-blue-300" />
                <span>Download Resume</span>
              </MotionA>
            </MotionDiv>

            {/* Contact Methods Grid */}
            <MotionDiv
              {...revealProps(0.26)}
              className="mt-9 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2"
            >
              {contactContent.methods.map((method) => {
                const IconComponent = iconMap[method.icon] || Mail;

                if (method.href) {
                  return (
                    <a
                      key={method.id}
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-blue-400/35 hover:bg-slate-900/90"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300 transition-colors group-hover:border-blue-400/35 group-hover:text-blue-200">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          {method.label}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 truncate font-sans text-xs font-semibold text-slate-100 group-hover:text-white sm:text-sm">
                          <span className="truncate">{method.value}</span>
                          {method.external ? <span className="sr-only">(opens in a new tab)</span> : null}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" />
                        </p>
                      </div>
                    </a>
                  );
                }

                return (
                  <div
                    key={method.id}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300">
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {method.label}
                      </p>
                      <p className="mt-0.5 truncate font-sans text-xs font-semibold text-slate-100 sm:text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </MotionDiv>
          </div>

          {/* Right Column: Clean & Minimal Contact Form */}
          <MotionDiv {...revealProps(0.16)} id="contact-form" className="min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:rounded-3xl sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 border-b border-white/[0.08] pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold tracking-tight text-white sm:text-xl">
                      Send a Message
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                      Reach out regarding engineering roles, products or collaborations.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      <span className="text-blue-300" aria-hidden="true">*</span> All fields are required.
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  aria-busy={isLoading}
                  className="relative mt-6"
                  noValidate
                >
                  {/* Honeypot field for bot spam protection (0x0 off-screen, outside layout flow, no visible label) */}
                  <div
                    className="pointer-events-none absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
                    style={{
                      position: 'absolute',
                      width: 0,
                      height: 0,
                      padding: 0,
                      margin: 0,
                      overflow: 'hidden',
                      clip: 'rect(0, 0, 0, 0)',
                      whiteSpace: 'nowrap',
                      border: 0,
                      opacity: 0,
                      pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                  >
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-slate-300"
                      >
                        Name
                        <span className="ml-1 text-blue-300" aria-hidden="true">*</span>
                      </label>
                      <input
                        ref={nameInputRef}
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        maxLength={NAME_MAX_LENGTH}
                        autoComplete="name"
                        disabled={isLoading}
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        aria-invalid={fieldErrors.name ? 'true' : undefined}
                        aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                        className={`mt-2 min-h-[48px] w-full rounded-xl border bg-slate-950/70 px-4 py-3 text-base text-white placeholder-slate-400 outline-none transition focus:bg-slate-950 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm ${
                          fieldErrors.name
                            ? 'border-rose-400/70 focus:border-rose-400 focus:ring-rose-400/40'
                            : 'border-white/12 focus:border-blue-400 focus:ring-blue-400/40'
                        }`}
                      />
                      {fieldErrors.name ? (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-rose-300"
                        >
                          {fieldErrors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-slate-300"
                      >
                        Email
                        <span className="ml-1 text-blue-300" aria-hidden="true">*</span>
                      </label>
                      <input
                        ref={emailInputRef}
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        maxLength={EMAIL_MAX_LENGTH}
                        autoComplete="email"
                        disabled={isLoading}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@company.com"
                        aria-invalid={fieldErrors.email ? 'true' : undefined}
                        aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                        className={`mt-2 min-h-[48px] w-full rounded-xl border bg-slate-950/70 px-4 py-3 text-base text-white placeholder-slate-400 outline-none transition focus:bg-slate-950 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm ${
                          fieldErrors.email
                            ? 'border-rose-400/70 focus:border-rose-400 focus:ring-rose-400/40'
                            : 'border-white/12 focus:border-blue-400 focus:ring-blue-400/40'
                        }`}
                      />
                      {fieldErrors.email ? (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-rose-300"
                        >
                          {fieldErrors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-slate-300"
                      >
                        Message
                        <span className="ml-1 text-blue-300" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        ref={messageInputRef}
                        id="contact-message"
                        name="message"
                        rows="5"
                        required
                        maxLength={MESSAGE_MAX_LENGTH}
                        disabled={isLoading}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Share details about the role, team, or technical challenge..."
                        aria-invalid={fieldErrors.message ? 'true' : undefined}
                        aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                        className={`mt-2 w-full resize-y rounded-xl border bg-slate-950/70 px-4 py-3 text-base text-white placeholder-slate-400 outline-none transition focus:bg-slate-950 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm ${
                          fieldErrors.message
                            ? 'border-rose-400/70 focus:border-rose-400 focus:ring-rose-400/40'
                            : 'border-white/12 focus:border-blue-400 focus:ring-blue-400/40'
                        }`}
                      />
                      {fieldErrors.message ? (
                        <p
                          id="contact-message-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-rose-300"
                        >
                          {fieldErrors.message}
                        </p>
                      ) : null}
                    </div>

                    {/* aria-disabled (not disabled) keeps keyboard focus on the button while sending;
                        duplicate submissions are blocked in handleSubmit. */}
                    <button
                      type="submit"
                      aria-disabled={isLoading}
                      className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_14px_34px_-6px_rgba(79,70,229,0.5)] transition-all hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 aria-disabled:cursor-wait aria-disabled:opacity-70"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      ) : (
                        <Send
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>

                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    className={
                      (status.type === 'success' || status.type === 'error') && status.message
                        ? 'mt-4 sm:mt-5'
                        : undefined
                    }
                  >
                  {status.type === 'success' && status.message ? (
                    <div
                      role="status"
                      className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-200 sm:text-sm"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                        aria-hidden="true"
                      />
                      <p className="break-words">{status.message}</p>
                    </div>
                  ) : null}

                  {status.type === 'error' && status.message ? (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs leading-relaxed text-rose-200 sm:text-sm"
                    >
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 flex-1 break-words">
                        <p>{status.message}</p>
                        <p className="mt-1.5 text-slate-300">
                          Direct email:{' '}
                          <a
                            href={`mailto:${contactContent.email}`}
                            className="font-semibold text-blue-300 underline decoration-blue-400/50 underline-offset-2 transition-colors hover:text-blue-200"
                          >
                            {contactContent.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  </div>
                </form>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
