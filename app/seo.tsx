import Head from "next/head";

interface SEOProps {
  title?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

const SEO = (props: SEOProps) => {
  const { title, ogTitle, ogDescription, ogUrl } = props;
  return (
    <Head>
      <title>title | {title ? title : ""}</title>
      <meta name="description" content="description"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={ogTitle ? ogTitle : "defualt"}></meta>
      <meta
        property="og:description"
        content={ogDescription ? ogDescription : "default"}
      ></meta>
      <meta property="og:url" content={ogUrl ? ogUrl : "default"}></meta>
      <meta property="og:locale" content={"ko_KR"}></meta>
      <meta property="og:image" content={"./og_img.png"}></meta>
    </Head>
  );
};

export default SEO;
