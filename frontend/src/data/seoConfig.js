const DEFAULT_PRODUCTION_SITE_URL = 'https://sahinmondal.com';

export function getSiteBaseUrl() {
  const configuredUrl = (import.meta.env.VITE_SITE_URL || '').trim();
  if (configuredUrl && !configuredUrl.includes('localhost') && !configuredUrl.includes('127.0.0.1')) {
    return configuredUrl.replace(/\/+$/, '');
  }
  if (
    typeof window !== 'undefined' &&
    window.location?.origin &&
    !window.location.origin.includes('localhost') &&
    !window.location.origin.includes('127.0.0.1')
  ) {
    return window.location.origin.replace(/\/+$/, '');
  }
  return DEFAULT_PRODUCTION_SITE_URL;
}

export function buildCanonicalUrl(path = '/') {
  const baseUrl = getSiteBaseUrl();
  if (!path || path === '/') {
    return `${baseUrl}/`;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath.replace(/\/+$/, '')}`;
}

export function buildAbsoluteAssetUrl(assetPath = '/og-image.png') {
  if (!assetPath) return `${getSiteBaseUrl()}/og-image.png`;
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  const baseUrl = getSiteBaseUrl();
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${baseUrl}${normalizedPath}`;
}

export const defaultOgImage = {
  path: '/og-image.png',
  width: '1200',
  height: '630',
  alt: 'Sahin Mondal — Senior Software Engineer and Full Stack Developer building business applications with React.js, Node.js and MongoDB',
};

export const homeSeo = {
  title: 'Sahin Mondal | Senior Software Engineer',
  description:
    'Senior Software Engineer and Full Stack Developer building production business applications, ERP, CRM, HRMS and dashboards using React.js, JavaScript, Node.js, Express.js and MongoDB.',
  ogTitle: 'Sahin Mondal | Senior Software Engineer',
  ogDescription:
    'Senior Software Engineer and Full Stack Developer building ERP, CRM, HRMS and production business applications with React.js, Node.js and MongoDB.',
  ogType: 'website',
  canonicalPath: '/',
  ogImage: defaultOgImage.path,
};

export const projectSeoBySlug = {
  'business-management-platform': {
    title: 'Business Management Platform | Sahin Mondal',
    description:
      'A full-stack ERP, HRMS and CRM business platform case study showcasing React, Node.js, Express, MongoDB, JWT authentication and role-based access control.',
    ogTitle: 'Business Management Platform | Sahin Mondal',
    ogDescription:
      'A full-stack ERP, HRMS and CRM business platform case study showcasing React, Node.js, Express, MongoDB, JWT authentication and role-based access control.',
    ogType: 'website',
    canonicalPath: '/projects/business-management-platform',
    ogImage: defaultOgImage.path,
  },
  'indian-tours-and-travels': {
    title: 'Indian Tours & Travels | Sahin Mondal',
    description:
      'A full-stack travel platform case study covering customer journeys, package discovery, enquiries, CRM workflows and internal business operations.',
    ogTitle: 'Indian Tours & Travels | Sahin Mondal',
    ogDescription:
      'A full-stack travel platform case study covering customer journeys, package discovery, enquiries, CRM workflows and internal business operations.',
    ogType: 'website',
    canonicalPath: '/projects/indian-tours-and-travels',
    ogImage: defaultOgImage.path,
  },
  'apexbuild-saas-ecosystem': {
    title: 'ApexBuild SaaS Ecosystem | Sahin Mondal',
    description:
      'A multi-vertical SaaS ecosystem case study exploring shared platform architecture, specialized business operating systems and centralized administration.',
    ogTitle: 'ApexBuild SaaS Ecosystem | Sahin Mondal',
    ogDescription:
      'A multi-vertical SaaS ecosystem case study exploring shared platform architecture, specialized business operating systems and centralized administration.',
    ogType: 'website',
    canonicalPath: '/projects/apexbuild-saas-ecosystem',
    ogImage: defaultOgImage.path,
  },
};

export function getPersonStructuredData() {
  const siteUrl = getSiteBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sahin Mondal',
    jobTitle: 'Senior Software Engineer',
    description: 'Senior Software Engineer and Full Stack Developer building production business applications, ERP, CRM, HRMS and dashboards using React.js, JavaScript, Node.js, Express.js and MongoDB.',
    url: `${siteUrl}/`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sahinmondal7',
      'https://github.com/Sahin15',
    ],
  };
}

