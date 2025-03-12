import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <title>Flex Crew - Professional At-Home Services</title>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="/b2.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews." />
        <meta property="og:url" content="https://my-jobs1.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flex Crew - Professional At-Home Services" />
        <meta property="og:description" content="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews." />
        <meta property="og:image" content="https://my-jobs1.netlify.app/Image/flexcrew.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="my-jobs1.netlify.app" />
        <meta property="twitter:url" content="https://my-jobs1.netlify.app/" />
        <meta name="twitter:title" content="Flex Crew - Professional At-Home Services" />
        <meta name="twitter:description" content="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews." />
        <meta name="twitter:image" content="https://my-jobs1.netlify.app/Image/flexcrew.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
