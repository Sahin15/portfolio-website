import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import { navItems, siteIdentity } from '../../data/siteContent';

const MotionDiv = motion.div;
const MotionA = motion.a;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const pendingNavActionRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key, outside click, browser navigation, or desktop resize, and lock background scroll on mobile
  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    if (window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        // Return focus to the toggle so keyboard users keep their place
        menuButtonRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handlePopState = () => {
      setIsOpen(false);
    };

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isOpen]);

  // When a link is chosen from the open mobile drawer, the action runs only
  // after the drawer's collapse animation finishes. Scrolling earlier made the
  // page overshoot, because the drawer's height was still part of the layout
  // while the scroll position was calculated.
  const runAfterDrawerCloses = (action) => {
    pendingNavActionRef.current = action;
    setIsOpen(false);
  };

  const handleDrawerExitComplete = () => {
    const action = pendingNavActionRef.current;
    pendingNavActionRef.current = null;
    if (action) action();
  };

  const handleNavClick = (event, href) => {
    const wasMobileMenuOpen = isOpen;
    const run = (action) => (wasMobileMenuOpen ? runAfterDrawerCloses(action) : action());

    if (location.pathname !== '/') {
      event.preventDefault();
      run(() => navigate(href === '#top' ? '/' : `/${href}`));
      return;
    }

    if (href === '#top') {
      event.preventDefault();
      run(() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' }));
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      run(() =>
        target.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
          block: 'start',
        }),
      );
      return;
    }

    setIsOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full pt-2.5 sm:pt-4">
      <Container>
        <div
          className={`rounded-2xl border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-300 sm:rounded-full sm:px-5 sm:py-3 ${scrolled || isOpen
              ? 'border-white/14 bg-slate-950/90 shadow-[0_20px_50px_rgba(2,6,23,0.7)]'
              : 'border-white/10 bg-slate-950/70 shadow-[0_16px_40px_rgba(2,6,23,0.4)]'
            }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Brand / Logo */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              aria-label={`${siteIdentity.name}, home`}
              className="group flex min-h-[44px] min-w-0 items-center gap-2.5 rounded-full py-0.5 pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 sm:gap-3"
            >
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 p-[1px] sm:h-10 sm:w-10">
                {/* Decorative avatar: the name is announced by the link label */}
                <img
                  src="/profile-avatar.jpg"
                  alt=""
                  width="40"
                  height="40"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="block truncate font-sans text-sm font-bold tracking-tight text-white transition-colors group-hover:text-blue-200 sm:text-base">
                  {siteIdentity.name}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary Navigation" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="inline-flex min-h-[44px] items-center rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 xl:px-3.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right CTA: Download Resume */}
            <div className="hidden lg:flex lg:items-center">
              <MotionA
                href={siteIdentity.resumeUrl}
                download={siteIdentity.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/14 bg-gradient-to-r from-blue-500/15 to-purple-500/15 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all hover:border-blue-400/40 hover:from-blue-500/25 hover:to-purple-500/25 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 xl:text-sm"
              >
                <Download className="h-4 w-4 text-blue-300" />
                <span>Download Resume</span>
              </MotionA>
            </div>

            {/* Mobile Menu Toggle (44x44px comfortable touch target) */}
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-controls={isOpen ? 'mobile-navigation-drawer' : undefined}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence initial={false} onExitComplete={handleDrawerExitComplete}>
            {isOpen ? (
              <MotionDiv
                id="mobile-navigation-drawer"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="overflow-hidden lg:hidden"
              >
                <nav
                  aria-label="Mobile Navigation"
                  className="mt-3 flex max-h-[calc(100vh-5.5rem)] flex-col gap-1 overflow-y-auto border-t border-white/10 pb-1.5 pt-3"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex min-h-[44px] items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07] hover:text-white active:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="mt-2 border-t border-white/[0.08] pt-3">
                    <a
                      href={siteIdentity.resumeUrl}
                      download={siteIdentity.resumeDownloadName}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:from-blue-500/30 hover:to-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                    >
                      <Download className="h-4 w-4 text-blue-300" />
                      <span>Download Resume</span>
                    </a>
                  </div>
                </nav>
              </MotionDiv>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}

export default Header;
