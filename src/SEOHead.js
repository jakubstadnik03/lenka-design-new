import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEOHead = ({ title, description, keywords }) => (
 <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="/path/to/your/image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/path/to/your/image.jpg" />
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
