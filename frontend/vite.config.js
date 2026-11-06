import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { onRequest as handleContactFunction } from './functions/api/contact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Parses Cloudflare Pages `.dev.vars` file (KEY=VALUE lines) if present for local serverless testing.
 */
function loadDevVars(dir) {
  const vars = {};
  const devVarsPath = path.join(dir, '.dev.vars');
  if (!fs.existsSync(devVarsPath)) return vars;
  const lines = fs.readFileSync(devVarsPath, 'utf-8').split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (key) vars[key] = val;
  }
  return vars;
}

/**
 * Local Vite middleware that executes the Cloudflare Pages Function (`functions/api/contact.js`)
 * during `npm run dev` and `npm run preview` without requiring a separate Express server.
 */
function cloudflarePagesContactPlugin(mode) {
  const attachMiddleware = (server) => {
    server.middlewares.use('/api/contact', async (req, res) => {
      try {
        const envVars = {
          ...loadEnv(mode, __dirname, ''),
          ...loadDevVars(__dirname),
        };

        const chunks = [];
        for await (const chunk of req) {
          chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
        }
        const rawBody = Buffer.concat(chunks);

        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers.host || 'localhost:3000';
        const fullUrl = `${protocol}://${host}${req.originalUrl || req.url || '/api/contact'}`;

        const headers = new Headers();
        for (const [key, value] of Object.entries(req.headers)) {
          if (Array.isArray(value)) {
            headers.set(key, value.join(', '));
          } else if (typeof value === 'string') {
            headers.set(key, value);
          }
        }
        if (!headers.has('cf-connecting-ip')) {
          headers.set('cf-connecting-ip', req.socket?.remoteAddress || '127.0.0.1');
        }

        const method = (req.method || 'GET').toUpperCase();
        const webRequest = new Request(fullUrl, {
          method,
          headers,
          body: method === 'GET' || method === 'HEAD' ? undefined : rawBody,
        });

        const webResponse = await handleContactFunction({
          request: webRequest,
          env: envVars,
        });

        res.statusCode = webResponse.status;
        webResponse.headers.forEach((value, key) => {
          res.setHeader(key, value);
        });
        const responseText = await webResponse.text();
        res.end(responseText);
      } catch {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
          JSON.stringify({
            success: false,
            error:
              'Unable to send your message right now. Please try again or contact me directly via email.',
          }),
        );
      }
    });
  };

  return {
    name: 'cloudflare-pages-contact-plugin',
    configureServer(server) {
      attachMiddleware(server);
    },
    configurePreviewServer(server) {
      attachMiddleware(server);
    },
  };
}

const DEFAULT_PRODUCTION_SITE_URL = 'https://sahinmondal.com';

const CASE_STUDY_ROUTES_META = [
  {
    slug: 'business-management-platform',
    title: 'Business Management Platform | Sahin Mondal',
    description:
      'A full-stack ERP, HRMS and CRM business platform case study showcasing React, Node.js, Express, MongoDB, JWT authentication and role-based access control.',
  },
  {
    slug: 'indian-tours-and-travels',
    title: 'Indian Tours & Travels | Sahin Mondal',
    description:
      'A full-stack travel platform case study covering customer journeys, package discovery, enquiries, CRM workflows and internal business operations.',
  },
  {
    slug: 'apexbuild-saas-ecosystem',
    title: 'ApexBuild SaaS Ecosystem | Sahin Mondal',
    description:
      'A multi-vertical SaaS ecosystem case study exploring shared platform architecture, specialized business operating systems and centralized administration.',
  },
];

function resolveProductionSiteUrl(rawUrl) {
  const cleaned = String(rawUrl || '').trim().replace(/\/+$/, '');
  if (!cleaned || cleaned.includes('localhost') || cleaned.includes('127.0.0.1')) {
    return DEFAULT_PRODUCTION_SITE_URL;
  }
  return cleaned;
}

function buildRouteHtml(baseHtml, siteUrl, routeMeta) {
  const canonicalUrl = `${siteUrl}/projects/${routeMeta.slug}`;
  return baseHtml
    // The hero profile image preload is only relevant to the homepage.
    .replace(/\s*<link\s+rel="preload"\s+as="image"[^>]*>/, '')
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${routeMeta.title}</title>`,
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${routeMeta.description}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${routeMeta.title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${routeMeta.description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${routeMeta.title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${routeMeta.description}" />`,
    );
}

function seoSiteUrlPlugin(siteUrl) {
  let caseStudyChunkFiles = [];

  return {
    name: 'seo-site-url-plugin',
    transformIndexHtml(html) {
      return html.replace(/__SITE_URL__/g, siteUrl);
    },
    generateBundle(_options, bundle) {
      // Locate the lazy case study chunk (and its non-entry static imports)
      // so it can be preloaded on the generated case study route HTML files.
      const chunks = Object.values(bundle).filter((item) => item.type === 'chunk');
      const caseStudyChunk = chunks.find((chunk) =>
        (chunk.facadeModuleId || '').replace(/\\/g, '/').endsWith('/src/pages/ProjectDetailPage.jsx'),
      );
      if (!caseStudyChunk) {
        caseStudyChunkFiles = [];
        return;
      }
      const entryFiles = new Set(chunks.filter((chunk) => chunk.isEntry).map((chunk) => chunk.fileName));
      caseStudyChunkFiles = [
        caseStudyChunk.fileName,
        ...caseStudyChunk.imports.filter((file) => !entryFiles.has(file)),
      ];
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');

      // 1. Inject configured production siteUrl into robots.txt and sitemap.xml
      for (const fileName of ['robots.txt', 'sitemap.xml']) {
        const filePath = path.join(distDir, fileName);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf-8');
          const updated = content.replace(/https:\/\/sahinmondal\.com/g, siteUrl);
          fs.writeFileSync(filePath, updated, 'utf-8');
        }
      }

      // 2. Generate route-specific static HTML files for case study routes
      // so social media crawlers (LinkedIn, WhatsApp, X, Naukri) get accurate
      // route-specific Open Graph and title tags even without executing JS.
      const baseIndexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(baseIndexPath)) {
        const baseHtml = fs.readFileSync(baseIndexPath, 'utf-8');
        // Preload the lazily-loaded case study chunk on case study routes so a
        // direct visit / refresh does not wait for the main bundle first.
        const preloadTags = caseStudyChunkFiles
          .filter((file) => !baseHtml.includes(`/${file}"`))
          .map((file) => `    <link rel="modulepreload" crossorigin href="/${file}">`)
          .join('\n');
        for (const routeMeta of CASE_STUDY_ROUTES_META) {
          const routeDir = path.join(distDir, 'projects', routeMeta.slug);
          fs.mkdirSync(routeDir, { recursive: true });
          let routeHtml = buildRouteHtml(baseHtml, siteUrl, routeMeta);
          if (preloadTags) {
            routeHtml = routeHtml.replace('</head>', `${preloadTags}\n  </head>`);
          }
          fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  const siteUrl = resolveProductionSiteUrl(env.VITE_SITE_URL);

  return {
    plugins: [
      react(),
      seoSiteUrlPlugin(siteUrl),
      cloudflarePagesContactPlugin(mode),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      // Split stable third-party libraries into their own long-cacheable
      // chunks so content updates do not invalidate the vendor code cache.
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined;
            if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
              return 'vendor-motion';
            }
            if (
              id.includes('/react-router') ||
              id.includes('\\react-router') ||
              id.includes('/react-dom/') ||
              id.includes('\\react-dom\\') ||
              id.includes('/react/') ||
              id.includes('\\react\\') ||
              id.includes('scheduler')
            ) {
              return 'vendor-react';
            }
            return undefined;
          },
        },
      },
    },
    server: {
      port: 3000,
    },
  };
});
