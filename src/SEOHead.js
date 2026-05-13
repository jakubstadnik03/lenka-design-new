import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SITE_URL = 'https://www.lenkadesign.cz';
const DEFAULT_OG = '/assets/images/og-default.jpg';

const absUrl = (url) => {
  if (!url) return SITE_URL + DEFAULT_OG;
  if (url.startsWith('http')) return url;
  return SITE_URL + (url.startsWith('/') ? url : `/${url}`);
};

const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'Lenka Design | interiérová návrhářka',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/assets/images/lenka-portret.jpeg`,
  description:
    'Interiérová designérka Lenka Stádníková — návrhy interiérů, 3D vizualizace a kompletní realizace pro domácnosti i firmy v Liberci a okolí.',
  telephone: '+420-723-838-086',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Liberec',
    addressCountry: 'CZ',
  },
  areaServed: [
    { '@type': 'City', name: 'Liberec' },
    { '@type': 'City', name: 'Jablonec nad Nisou' },
    { '@type': 'AdministrativeArea', name: 'Liberecký kraj' },
    { '@type': 'Country', name: 'Česká republika' },
  ],
  sameAs: [
    'https://www.instagram.com/lenka_design_/',
    'https://www.facebook.com/lenkadesign.cz',
  ],
};

const SEOHead = ({
  title,
  description,
  keywords,
  image,
  canonical,
  type = 'website',
  article,
  breadcrumbs,
  noindex = false,
}) => {
  const ogImage = absUrl(image);
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : SITE_URL);
  const canonicalAbs = absUrl(canonical);

  const jsonLdGraph = [ORGANIZATION_LD];

  if (type === 'article' && article) {
    jsonLdGraph.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      image: [ogImage],
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime || article.publishedTime,
      author: {
        '@type': 'Person',
        name: article.author || 'Lenka Stádníková',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Lenka Design',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalAbs,
      },
      keywords: Array.isArray(article.tags) ? article.tags.join(', ') : keywords,
    });
  }

  if (breadcrumbs && breadcrumbs.length) {
    jsonLdGraph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: absUrl(b.url),
      })),
    });
  }

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="cs" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        <link rel="canonical" href={canonicalAbs} />

        {/* Open Graph */}
        <meta property="og:site_name" content="Lenka Design" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={title} />

        {type === 'article' && article && (
          <meta property="article:published_time" content={article.publishedTime} />
        )}
        {type === 'article' && article && article.modifiedTime && (
          <meta property="article:modified_time" content={article.modifiedTime} />
        )}
        {type === 'article' && article && article.author && (
          <meta property="article:author" content={article.author} />
        )}
        {type === 'article' &&
          article &&
          Array.isArray(article.tags) &&
          article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Preload hlavního bannerového obrázku pro LCP (jen homepage) */}
        {type === 'website' && canonical === '/' && (
          <link
            rel="preload"
            as="image"
            href="/assets/images/bannerImg/1.webp"
            imagesrcset="/assets/images/bannerImg/1-small.webp 600w, /assets/images/bannerImg/1.webp 1200w"
            imagesizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw"
          />
        )}

        <script type="application/ld+json">
          {JSON.stringify(jsonLdGraph.length === 1 ? jsonLdGraph[0] : { '@context': 'https://schema.org', '@graph': jsonLdGraph })}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEOHead;
