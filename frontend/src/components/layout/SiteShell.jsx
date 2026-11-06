import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AmbientBackground from './AmbientBackground';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

function SiteShell() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  // After client-side route changes, move focus to the main content so
  // keyboard and screen reader users start at the top of the new page
  // instead of on a link that no longer exists.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Keyboard users can bypass the header navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-[0_12px_32px_rgba(2,6,23,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <AmbientBackground />
      <Header />
      <main id="main-content" ref={mainRef} tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteShell;
