import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = 'https://www.zhmktg.com' }) => {
  const siteTitle = 'ZIH Marketing Consultancy';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || 'World-class strategic marketing, branding, and advertising solutions to help businesses achieve sustainable growth.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${url}/favicon.svg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={`${url}/favicon.svg`} />
    </Helmet>
  );
};

export default SEO;
