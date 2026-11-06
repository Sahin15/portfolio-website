import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import AppRoutes from './routes';
import { loadProjectDetailPage } from './routeLoaders';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  // Prefetch the case study chunk once the browser is idle so it does not
  // compete with the initial homepage render, but is ready before a click.
  useEffect(() => {
    const prefetch = () => {
      loadProjectDetailPage().catch(() => {});
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(prefetch, { timeout: 4000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(prefetch, 2500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    // reducedMotion="user": for visitors with "reduce motion" enabled, Framer Motion
    // skips transform/movement animations site-wide while keeping gentle opacity fades.
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
