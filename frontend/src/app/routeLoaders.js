// Shared dynamic import loaders for route-level code splitting.
// Keeping them in one place guarantees the lazy route and the idle-time
// prefetch reference the same chunk.
export const loadProjectDetailPage = () => import('../pages/ProjectDetailPage');

