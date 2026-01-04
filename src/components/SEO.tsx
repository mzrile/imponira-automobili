import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "product" | "article";
  jsonLd?: object;
}

const SEO = ({
  title = "ImpoNira Automobili - Uvoz i prodaja vozila",
  description = "ImpoNira Automobili - Vaš pouzdani partner za kupovinu kvalitetnih polovnih vozila. Širok asortiman premium automobila sa detaljnom dokumentacijom. BMW, Mercedes, Audi, VW i više.",
  keywords = "rabljeni automobili, polovna vozila, uvoz automobila, Hrvatska, Sesvete, Zagreb, BMW, Mercedes, Audi, Volkswagen, Škoda, Renault, kvalitetna vozila",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://imponira.eu",
  type = "website",
  jsonLd,
}: SEOProps) => {
  const fullTitle = title.includes("ImpoNira") ? title : `${title} | ImpoNira Automobili`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ImpoNira Automobili" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="hr_HR" />
      <meta property="og:site_name" content="ImpoNira Automobili" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
