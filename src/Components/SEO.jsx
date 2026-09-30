import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, url }) => {
  const location = useLocation();
  const siteTitle = 'ZIH Marketing Consultancy';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription =
    description ||
    'World-class strategic marketing, branding, and advertising solutions to help businesses achieve sustainable growth.';
  const baseUrl = 'https://www.zhmktg.com';
  const canonicalUrl = url || `${baseUrl}${location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${baseUrl}/favicon.svg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={`${baseUrl}/favicon.svg`} />
    </Helmet>
  );
};

export default SEO;
