import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

const MotionDiv = motion.div;

const BADGE_STYLES = {
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  purple: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
  indigo: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
};

const ACCENT_PALETTES = {
  blue: {
    primary: '#3b82f6',
    secondary: '#60a5fa',
    softBg: 'rgba(59, 130, 246, 0.14)',
    border: 'rgba(59, 130, 246, 0.32)',
  },
  indigo: {
    primary: '#6366f1',
    secondary: '#818cf8',
    softBg: 'rgba(99, 102, 241, 0.14)',
    border: 'rgba(99, 102, 241, 0.32)',
  },
  emerald: {
    primary: '#10b981',
    secondary: '#34d399',
    softBg: 'rgba(16, 185, 129, 0.14)',
    border: 'rgba(16, 185, 129, 0.32)',
  },
  purple: {
    primary: '#a855f7',
    secondary: '#c084fc',
    softBg: 'rgba(168, 85, 247, 0.14)',
    border: 'rgba(168, 85, 247, 0.32)',
  },
  amber: {
    primary: '#f59e0b',
    secondary: '#fbbf24',
    softBg: 'rgba(245, 158, 11, 0.14)',
    border: 'rgba(245, 158, 11, 0.32)',
  },
};

function escapeXml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSanitizedSvgDataUri(item) {
  const palette = ACCENT_PALETTES[item.accent] || ACCENT_PALETTES.blue;
  const metrics = item.metrics || [];
  const rows = item.rows || [];
  const routeText = escapeXml(item.routePath || '/app/workspace');
  const titleText = escapeXml(item.title || 'Module Interface');
  // Uppercase before escaping: uppercasing escaped text turns `&amp;` into the
  // invalid entity `&AMP;`, which made previews with "&" in the category fail to render.
  const categoryText = escapeXml(String(item.category || 'Application Module').toUpperCase());
  const badgeText = escapeXml(item.badge || 'Sanitized Product Preview');

  const metricBoxes = [0, 1, 2]
    .map((idx) => {
      const m = metrics[idx] || {
        label: idx === 0 ? 'Module Scope' : idx === 1 ? 'Access Control' : 'Data State',
        value: idx === 0 ? item.title : idx === 1 ? 'Role-Protected' : 'Sanitized Preview',
      };
      const x = 250 + idx * 300;
      return `
        <g transform="translate(${x}, 148)">
          <rect width="280" height="86" rx="12" fill="#111827" stroke="#1e293b" stroke-width="1.5" />
          <rect x="0" y="0" width="4" height="86" rx="2" fill="${palette.primary}" opacity="0.85" />
          <text x="18" y="30" fill="#64748b" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="600" letter-spacing="1">${escapeXml(
            m.label.toUpperCase()
          )}</text>
          <text x="18" y="60" fill="#f8fafc" font-family="Inter, system-ui, sans-serif" font-size="15" font-weight="700">${escapeXml(
            m.value
          )}</text>
        </g>
      `;
    })
    .join('');

  const tableRows = [0, 1, 2, 3]
    .map((idx) => {
      const r = rows[idx] ||
        rows[idx % Math.max(rows.length, 1)] || {
          col1: `${item.title} Workflow Record #0${idx + 1}`,
          col2: 'Sanitized Operational Entry',
          status: 'Verified',
        };
      const y = 316 + idx * 66;
      const isAmber =
        String(r.status).includes('Progress') ||
        String(r.status).includes('Development') ||
        String(r.status).includes('%');
      const pillBg = isAmber ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)';
      const pillStroke = isAmber ? 'rgba(245, 158, 11, 0.4)' : 'rgba(16, 185, 129, 0.4)';
      const pillText = isAmber ? '#fcd34d' : '#6ee7b7';

      return `
        <g transform="translate(268, ${y})">
          <rect width="844" height="52" rx="10" fill="#0b1120" stroke="#1e293b" stroke-width="1" />
          <circle cx="24" cy="26" r="5" fill="${palette.secondary}" />
          <text x="42" y="31" fill="#e2e8f0" font-family="Inter, system-ui, sans-serif" font-size="13.5" font-weight="600">${escapeXml(
            r.col1
          )}</text>
          <text x="470" y="31" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="12">${escapeXml(
            r.col2
          )}</text>
          <rect x="690" y="13" width="136" height="26" rx="13" fill="${pillBg}" stroke="${pillStroke}" stroke-width="1" />
          <text x="758" y="30" text-anchor="middle" fill="${pillText}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">${escapeXml(
            r.status
          )}</text>
        </g>
      `;
    })
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="none">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="1200" y2="675" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#090d16" />
        <stop offset="55%" stop-color="#0d1322" />
        <stop offset="100%" stop-color="#090d16" />
      </linearGradient>
      <radialGradient id="glowGrad" cx="75%" cy="20%" r="55%">
        <stop offset="0%" stop-color="${palette.primary}" stop-opacity="0.18" />
        <stop offset="100%" stop-color="${palette.primary}" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="675" fill="url(#bgGrad)" />
    <rect width="1200" height="675" fill="url(#glowGrad)" />

    <!-- Top Application Bar -->
    <rect x="0" y="0" width="1200" height="54" fill="#0b0f19" />
    <line x1="0" y1="54" x2="1200" y2="54" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="28" cy="27" r="6" fill="#334155" />
    <circle cx="48" cy="27" r="6" fill="#334155" />
    <circle cx="68" cy="27" r="6" fill="#334155" />

    <!-- Route Pill -->
    <rect x="96" y="13" width="380" height="28" rx="8" fill="#111827" stroke="#1e293b" stroke-width="1" />
    <text x="114" y="31" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="12">${routeText}</text>

    <!-- Sanitized Preview Badge in Top Bar -->
    <rect x="910" y="13" width="262" height="28" rx="14" fill="${palette.softBg}" stroke="${palette.border}" stroke-width="1" />
    <text x="1041" y="31" text-anchor="middle" fill="${palette.secondary}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">${badgeText}</text>

    <!-- Left Navigation Sidebar -->
    <rect x="0" y="55" width="218" height="620" fill="#080c15" />
    <line x1="218" y1="55" x2="218" y2="675" stroke="#1e293b" stroke-width="1.5" />
    <text x="24" y="92" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" letter-spacing="1.5">WORKSPACE MODULES</text>

    <!-- Sidebar Active Item -->
    <rect x="16" y="110" width="186" height="40" rx="8" fill="${palette.softBg}" stroke="${palette.border}" stroke-width="1" />
    <circle cx="34" cy="130" r="4" fill="${palette.secondary}" />
    <text x="48" y="135" fill="#f8fafc" font-family="Inter, system-ui, sans-serif" font-size="12.5" font-weight="600">${titleText}</text>

    <!-- Sidebar Inactive Items -->
    <rect x="16" y="162" width="186" height="36" rx="8" fill="#0d1322" />
    <rect x="30" y="176" width="96" height="8" rx="4" fill="#334155" />
    <rect x="16" y="208" width="186" height="36" rx="8" fill="#0d1322" />
    <rect x="30" y="222" width="122" height="8" rx="4" fill="#1e293b" />
    <rect x="16" y="254" width="186" height="36" rx="8" fill="#0d1322" />
    <rect x="30" y="268" width="108" height="8" rx="4" fill="#1e293b" />
    <rect x="16" y="300" width="186" height="36" rx="8" fill="#0d1322" />
    <rect x="30" y="314" width="84" height="8" rx="4" fill="#1e293b" />

    <!-- Sidebar Security Status Box -->
    <rect x="16" y="555" width="186" height="94" rx="10" fill="#0d1322" stroke="#1e293b" stroke-width="1" />
    <text x="30" y="582" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600">DATA PRIVACY</text>
    <text x="30" y="604" fill="#e2e8f0" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600">Sanitized Interface</text>
    <text x="30" y="626" fill="#64748b" font-family="Inter, system-ui, sans-serif" font-size="11">RBAC &amp; JWT Protected</text>

    <!-- Main Workspace Header -->
    <text x="250" y="94" fill="${palette.secondary}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" letter-spacing="1.4">${categoryText}</text>
    <text x="250" y="124" fill="#f8fafc" font-family="Inter, system-ui, sans-serif" font-size="24" font-weight="700">${titleText}</text>

    <!-- KPI / Metric Row -->
    ${metricBoxes}

    <!-- Main Operational Data Panel -->
    <rect x="250" y="254" width="880" height="386" rx="14" fill="#0d1322" stroke="#1e293b" stroke-width="1.5" />
    <text x="272" y="290" fill="#cbd5e1" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600">Active Module Workflows &amp; Operational Records (Sanitized View)</text>
    <text x="1108" y="290" text-anchor="end" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="11">LIVE SCHEMA PREVIEW</text>
    <line x1="250" y1="304" x2="1130" y2="304" stroke="#1e293b" stroke-width="1" />

    <!-- Rows -->
    ${tableRows}
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function PreviewCard({ item, index, onSelect, variant = 'standard' }) {
  const isFeatured = variant === 'featured';
  const isMedium = variant === 'medium';
  const badgeStyle = BADGE_STYLES[item.badgeTone] || BADGE_STYLES.blue;
  const previewSrc = item.image || buildSanitizedSvgDataUri(item);
  const isInDevelopment =
    String(item.badge).toLowerCase().includes('development') || item.badgeTone === 'amber';

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.25) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d111a]/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.22)]"
    >
      {/* Card content. A single stretched button (inside the heading) makes the
          whole card clickable while keeping valid HTML and heading semantics. */}
      <div className="flex flex-1 flex-col text-left">
        {/* Browser Frame Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-[#080b12] px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700/90" />
            </div>
            {item.routePath ? (
              <span className="truncate rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-0.5 font-mono text-[11px] text-slate-400">
                {item.routePath}
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wide ${badgeStyle}`}
            >
              {isInDevelopment ? (
                <Clock className="h-3 w-3 shrink-0" />
              ) : (
                <CheckCircle2 className="h-3 w-3 shrink-0" />
              )}
              {item.badge || 'Sanitized Product Preview'}
            </span>
          </div>
        </div>

        {/* Visual Frame Container */}
        <div className="relative w-full overflow-hidden bg-[#090d16]">
          <div
            className={`relative w-full overflow-hidden ${
              isFeatured
                ? 'aspect-[16/9] max-h-[460px]'
                : isMedium
                  ? 'aspect-[16/9]'
                  : 'aspect-[16/10]'
            }`}
          >
            <img
              src={previewSrc}
              alt={item.alt || `${item.title} sanitized product interface preview`}
              loading="lazy"
              decoding="async"
              width="1200"
              height="675"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />

            {/* Subtle Bottom Gradient + Expand Pill */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

            <div className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-950/90 px-2.5 py-1 text-[11px] font-medium text-slate-200 opacity-95 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:border-blue-500/50 group-hover:bg-blue-600/90 group-hover:text-white sm:bottom-3 sm:right-3 sm:px-3 sm:py-1.5 sm:text-xs">
              <Maximize2 className="h-3.5 w-3.5" />
              <span>Inspect Preview</span>
            </div>
          </div>

          {/* Featured / Medium Inline Operational Strip for rapid recruiter scanning */}
          {(isFeatured || isMedium) && Array.isArray(item.metrics) && item.metrics.length > 0 ? (
            <div
              className={`grid gap-2 border-t border-slate-800/80 bg-[#0b0f19]/95 px-4 py-3 ${
                isFeatured ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
              }`}
            >
              {item.metrics.slice(0, isFeatured ? 3 : 2).map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between gap-2 rounded-lg border border-slate-800/70 bg-slate-900/50 px-3 py-2"
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </span>
                  <span className="truncate text-xs font-semibold text-slate-200">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Caption & Context Footer */}
        <div className="flex flex-1 flex-col justify-between border-t border-slate-800/70 p-5 sm:p-6">
          <div>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                {item.category}
              </span>
            </div>
            <h3
              className={`font-bold tracking-tight text-white transition-colors group-hover:text-blue-200 ${
                isFeatured ? 'text-xl sm:text-2xl' : 'text-lg'
              }`}
            >
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-haspopup="dialog"
                className="text-left after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-[''] focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-blue-400"
              >
                {item.title}
                <span className="sr-only"> – open larger preview</span>
              </button>
            </h3>
            <p
              className={`mt-2 leading-relaxed text-slate-400 ${
                isFeatured ? 'max-w-3xl text-sm sm:text-base' : 'text-sm'
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default function ProjectGallery({ gallery }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogPanelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const returnFocusRef = useRef(null);

  const items = Array.isArray(gallery?.items) ? gallery.items : [];

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || items.length === 0) return null;
      return (prev - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || items.length === 0) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'Tab' && dialogPanelRef.current) {
        // Keep keyboard focus inside the open dialog
        const focusable = dialogPanelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        } else if (!dialogPanelRef.current.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, handleClose, handlePrev, handleNext]);

  // Move focus into the dialog when it opens and restore it to the
  // triggering preview card when it closes.
  const isModalOpen = activeIndex !== null;
  useEffect(() => {
    if (!isModalOpen) return undefined;
    returnFocusRef.current = document.activeElement;
    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      window.cancelAnimationFrame(frame);
      const trigger = returnFocusRef.current;
      if (trigger && typeof trigger.focus === 'function') {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [isModalOpen]);

  if (!gallery || items.length === 0) {
    return null;
  }

  const featuredItem = items[0];
  const mediumItems = items.slice(1, 3);
  const standardItems = items.slice(3);
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section
      id="product-visuals"
      aria-labelledby="product-visuals-heading"
      className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
    >
      {/* Section Header */}
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            <Sparkles className="h-3.5 w-3.5 text-blue-300" aria-hidden="true" />
            <span>{gallery.label || 'PRODUCT IN ACTION'}</span>
          </div>
          <h2
            id="product-visuals-heading"
            className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
          >
            <span className="block">{gallery.headline?.line1}</span>
            <span className="mt-1 block">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {gallery.headline?.highlight}
              </span>
              <span className="text-white">.</span>
            </span>
          </h2>
          {gallery.description ? (
            <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-lg sm:leading-8">
              {gallery.description}
            </p>
          ) : null}
        </div>

        {/* Confidentiality & Sanitized Preview Note */}
        <div className="inline-flex items-center gap-2.5 self-start rounded-xl border border-white/10 bg-slate-900/75 px-4 py-2.5 text-xs text-slate-300 lg:self-auto">
          <ShieldCheck className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
          <span>
            Sanitized product previews · Select any interface to inspect details
          </span>
        </div>
      </MotionDiv>

      {/* Editorial Product Showcase Grid */}
      <div className="space-y-6">
        {/* 1. Large Featured Preview */}
        {featuredItem ? (
          <PreviewCard
            item={featuredItem}
            index={0}
            onSelect={setActiveIndex}
            variant="featured"
          />
        ) : null}

        {/* 2. Two Medium Preview Cards */}
        {mediumItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {mediumItems.map((item, idx) => (
              <PreviewCard
                key={item.id || item.title}
                item={item}
                index={idx + 1}
                onSelect={setActiveIndex}
                variant="medium"
              />
            ))}
          </div>
        ) : null}

        {/* 3. Supporting Module Cards (3-column on desktop, 2-col on tablet, 1-col on mobile) */}
        {standardItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardItems.map((item, idx) => (
              <PreviewCard
                key={item.id || item.title}
                item={item}
                index={idx + 3}
                onSelect={setActiveIndex}
                variant="standard"
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Accessible Lightbox / Preview Modal */}
      <AnimatePresence>
        {activeItem ? (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-gallery-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
            onClick={handleClose}
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              ref={dialogPanelRef}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0f19] shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 bg-[#070a12] px-4 py-3.5 sm:px-6">
                <div className="flex flex-wrap items-center gap-2.5 min-w-0">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {activeIndex + 1} / {items.length}
                  </span>
                  {activeItem.routePath ? (
                    <span className="truncate rounded-md border border-slate-800 bg-slate-900 px-2.5 py-0.5 font-mono text-xs text-slate-300">
                      {activeItem.routePath}
                    </span>
                  ) : null}
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                      BADGE_STYLES[activeItem.badgeTone] || BADGE_STYLES.blue
                    }`}
                  >
                    {activeItem.badge || 'Sanitized Product Preview'}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous product preview"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next product preview"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={handleClose}
                    aria-label="Close preview"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-300 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-4 sm:p-6">
                {/* Large Image Frame */}
                <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-[#090d16]">
                  <img
                    src={activeItem.image || buildSanitizedSvgDataUri(activeItem)}
                    alt={activeItem.alt || `${activeItem.title} sanitized product interface preview`}
                    width="1200"
                    height="675"
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Caption & Structured Operational Details */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {activeItem.category}
                    </span>
                    <h3
                      id="project-gallery-modal-title"
                      className="mt-1 text-2xl font-bold text-white"
                    >
                      {activeItem.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {activeItem.description}
                    </p>

                    {Array.isArray(activeItem.metrics) && activeItem.metrics.length > 0 ? (
                      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {activeItem.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3"
                          >
                            <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                              {m.label}
                            </div>
                            <div className="mt-1 text-xs font-semibold text-white sm:text-sm">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Sanitized Operational Workflow Highlights */}
                  {Array.isArray(activeItem.rows) && activeItem.rows.length > 0 ? (
                    <div className="rounded-xl border border-slate-800/90 bg-slate-900/40 p-4 lg:col-span-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                          <Layers className="h-3.5 w-3.5 text-blue-400" />
                          Interface Workflows &amp; Elements
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          SANITIZED DATA
                        </span>
                      </div>
                      <div className="space-y-2">
                        {activeItem.rows.map((row) => (
                          <div
                            key={row.col1}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-800/80 bg-[#0b0f19] px-3 py-2.5 text-xs"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="truncate font-semibold text-slate-200">
                                {row.col1}
                              </div>
                              <div className="font-mono text-[11px] text-slate-400">
                                {row.col2}
                              </div>
                            </div>
                            <span className="rounded-full border border-slate-700/80 bg-slate-800/80 px-2.5 py-0.5 font-mono text-[10px] font-medium text-blue-300">
                              {row.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
