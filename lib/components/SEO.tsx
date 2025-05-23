import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  link?:string
};

const SEO = ({ title, description, keywords,link }: SEOProps) => (
  <Head>
    <title>{title} | Junotest</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords || 'éducation, école, instituteur, apprentissage'} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="UTF-8" />
    <meta name="language" content="fr" />
    <meta httpEquiv="Content-Language" content="fr" />
    <link rel="icon" href={link??"/bg.png"} />
  </Head>
);

export default SEO;
