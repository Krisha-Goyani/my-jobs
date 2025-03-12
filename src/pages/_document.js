import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="FlexCrew USA - Your trusted partner in staffing solutions. We connect talented professionals with leading companies across industries." />
        <meta name="keywords" content="FlexCrew USA, staffing solutions, job recruitment, employment agency, career opportunities, professional staffing" />
        <meta name="author" content="FlexCrew USA" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://flexcrewusa.com" />
        <meta property="og:url" content="https://flexcrewusa.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FlexCrew USA" />
        <meta property="og:title" content="FlexCrew USA - Professional Staffing Solutions" />
        <meta property="og:description" content="Your trusted partner in staffing solutions. We connect talented professionals with leading companies across industries." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/Image/flex-crew.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FlexCrew USA Company Logo" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FlexCrewUSA" />
        <meta property="twitter:domain" content="flexcrewusa.com" />
        <meta property="twitter:url" content="https://flexcrewusa.com" />
        <meta name="twitter:title" content="FlexCrew USA - Professional Staffing Solutions" />
        <meta name="twitter:description" content="Your trusted partner in staffing solutions. We connect talented professionals with leading companies across industries." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/Image/flex-crew.png`} />
        <meta name="twitter:image:alt" content="FlexCrew USA Company Logo" />
        <meta name="twitter:creator" content="@FlexCrewUSA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="FlexCrew USA" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
