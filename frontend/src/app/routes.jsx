import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteShell from '../components/layout/SiteShell';
import HomePage from '../pages/HomePage';
import { loadProjectDetailPage } from './routeLoaders';

// Case study pages are loaded on demand so they do not increase the
// initial homepage bundle. The chunk is prefetched during idle time
// (see App.jsx) so navigation from the homepage still feels instant.
const ProjectDetailPage = lazy(loadProjectDetailPage);

function RouteFallback() {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-blue-400 motion-reduce:animate-none" />
      <span className="sr-only">Loading case study…</span>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectDetailPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
