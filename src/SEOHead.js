import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEOHead = ({ title, description, keywords, image, canonical }) => (
 <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || (typeof window !== 'undefined' ? window.location.href : '')} />
      <meta property="og:image" content={image || "/assets/images/og-default.jpg"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || "/assets/images/og-default.jpg"} />
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Preload hlavního bannerového obrázku pro LCP */}
      <link
        rel="preload"
        as="image"
        href="/assets/images/bannerImg/1.webp"
        imagesrcset="/assets/images/bannerImg/1-small.webp 600w, /assets/images/bannerImg/1.webp 1200w"
        imagesizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw"
      />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lenka Design | interiérová návrhářka",
            "url": "https://www.lenkadesign.cz",
            "logo": "https://www.lenkadesign.cz/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+420-723-838-086",
              "contactType": "Lenka Stádníková"
            }
          }
        `}
      </script>
    </Helmet>
 </HelmetProvider>
);

export default SEOHead;
