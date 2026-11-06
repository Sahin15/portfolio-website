import { useEffect } from 'react';
import {
  buildAbsoluteAssetUrl,
  buildCanonicalUrl,
  defaultOgImage,
  getPersonStructuredData,
  homeSeo,
} from '../../data/seoConfig';

function upsertMetaTag(attributeName, attributeValue, contentValue) {
  if (!contentValue) return;
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', contentValue);
}

function upsertCanonicalLink(hrefValue) {
  if (!hrefValue) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', hrefValue);
}

function upsertJsonLdScript(dataObject) {
  if (!dataObject) return;
  const scriptId = 'portfolio-person-jsonld';
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(dataObject);
}

export default function SEO({
  title = homeSeo.title,
  description = homeSeo.description,
  canonicalPath = homeSeo.canonicalPath,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage = defaultOgImage.path,
  structuredData,
}) {
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const absoluteOgImage = buildAbsoluteAssetUrl(ogImage);

  useEffect(() => {
    document.title = title;

    // Standard Meta Tags
    upsertMetaTag('name', 'description', description);
    upsertCanonicalLink(canonicalUrl);

    // Open Graph Metadata
    upsertMetaTag('property', 'og:title', resolvedOgTitle);
    upsertMetaTag('property', 'og:description', resolvedOgDescription);
    upsertMetaTag('property', 'og:type', ogType);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:site_name', 'Sahin Mondal');
    upsertMetaTag('property', 'og:image', absoluteOgImage);
    upsertMetaTag('property', 'og:image:width', defaultOgImage.width);
    upsertMetaTag('property', 'og:image:height', defaultOgImage.height);
    upsertMetaTag('property', 'og:image:alt', defaultOgImage.alt);

    // Twitter / X Card Metadata
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', resolvedOgTitle);
    upsertMetaTag('name', 'twitter:description', resolvedOgDescription);
    upsertMetaTag('name', 'twitter:image', absoluteOgImage);
    upsertMetaTag('name', 'twitter:image:alt', defaultOgImage.alt);

    // JSON-LD Structured Data
    upsertJsonLdScript(structuredData || getPersonStructuredData());
  }, [
    title,
    description,
    canonicalUrl,
    resolvedOgTitle,
    resolvedOgDescription,
    ogType,
    absoluteOgImage,
    structuredData,
  ]);

  return null;
}

