import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_CONFIG } from '../../constants/config';

export default function SEO({ 
  title, 
  description, 
  canonicalPath = '', 
  ogType = 'website',
  schemaData = null 
}) {
  const fullTitle = title 
    ? `${title} | ${COMPANY_CONFIG.name}`
    : `Packers and Movers in Hyderabad | ${COMPANY_CONFIG.name}`;

  const defaultDesc = `Professional packers and movers in Hyderabad. Agarwal Speed Packers & Movers provides safe household shifting, office relocation, car & bike transport, and warehouse storage in Hyderabad.`;
  const metaDescription = description || defaultDesc;
  const canonicalUrl = `${COMPANY_CONFIG.siteUrl}${canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={COMPANY_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Structured Data / JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
