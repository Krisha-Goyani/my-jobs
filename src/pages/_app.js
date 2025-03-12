import '../styles/globals.css';
import { AppProvider } from '../components/AppContext';
import { NavProvider } from '../context/NavContext';
import { UserProvider } from '../context/UserContext';
import { PriceProvider } from '../context/PriceContext';
import { SkillProvider } from '@/context/SkillContext';
import { DataProvider } from '../context/DataContext';
import { DefaultSeo, NextSeo } from 'next-seo';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" hrefLang="en" href="https://www.flexcrew.com" />
        <link rel="canonical" href="https://www.flexcrew.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Flex Crew" />
        <meta name="apple-mobile-web-app-title" content="Flex Crew" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="keywords" content="home services, handyman, plumber, electrician, professional services, home repair, maintenance" />
        <meta name="author" content="Flex Crew" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://my-jobs1.netlify.app/Image/logo-og.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Flex Crew Logo" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://my-jobs1.netlify.app/Image/b1.png" />
        <meta name="twitter:image:alt" content="Flex Crew Logo" />
      </Head>
      <DefaultSeo
        title="Flex Crew - Professional At-Home Services"
        titleTemplate="%s | Flex Crew"
        defaultTitle="Flex Crew - Professional At-Home Services"
        description="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews."
        canonical="https://my-jobs1.netlify.app/"
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Flex Crew'
          },
          {
            name: 'application-name',
            content: 'Flex Crew'
          },
          {
            property: 'og:image:width',
            content: '1080'
          },
          {
            property: 'og:image:height',
            content: '600'
          }
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://my-jobs1.netlify.app/',
          siteName: 'Flex Crew',
          title: 'Flex Crew - Professional At-Home Services',
          description: 'Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews.',
          images: [
            {
              url: 'https://my-jobs1.netlify.app/Image/logo-og.png',
              width: 1080,
              height: 600,
              alt: 'Flex Crew Logo',
              type: 'image/png',
            }
          ],
        }}
        twitter={{
          handle: '@flexcrew',
          site: '@flexcrew',
          cardType: 'summary_large_image',
        }}
      />
      <DataProvider>
        <NavProvider>
          <AppProvider>        
            <UserProvider>
              <SkillProvider>
                <PriceProvider>
                  <Component {...pageProps} />
                </PriceProvider>
              </SkillProvider>
            </UserProvider>
          </AppProvider>
        </NavProvider>
      </DataProvider>
    </>
  );
}

export default MyApp;