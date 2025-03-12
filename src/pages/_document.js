import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const ogImageUrl = 'https://my-jobs1.netlify.app/Image/logo.png';

  return (
    <Html lang="en">
      <Head>
        <title>Flex Crew - Professional At-Home Services</title>
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="/b2.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews." />
        <meta property="og:url" content="https://my-jobs1.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flex Crew - Professional At-Home Services" />
        <meta property="og:description" content="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="Flex Crew" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="my-jobs1.netlify.app" />
        <meta property="twitter:url" content="https://my-jobs1.netlify.app/" />
        <meta name="twitter:title" content="Flex Crew - Professional At-Home Services" />
        <meta name="twitter:description" content="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://my-jobs1.netlify.app/" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
