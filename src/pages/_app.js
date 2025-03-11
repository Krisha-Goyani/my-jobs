import '../styles/globals.css';
import { AppProvider } from '../components/AppContext';
import { NavProvider } from '../context/NavContext';
import { UserProvider } from '../context/UserContext';
import { PriceProvider } from '../context/PriceContext';
import { SkillProvider } from '@/context/SkillContext';
import { DataProvider } from '../context/DataContext';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/Image/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Flex Crew Logo" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/Image/logo.png" />
        <meta name="twitter:image:alt" content="Flex Crew Logo" />
      </Head>
      <NextSeo
        title="Flex Crew - Professional At-Home Services"
        description="Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews."
        canonical="https://www.flexcrew.com/"
        openGraph={{
          url: 'https://www.flexcrew.com/',
          title: 'Flex Crew - Professional At-Home Services',
          description: 'Find reliable professionals for all your home service needs. Expert handymen, plumbers, electricians, and more with verified credentials and customer reviews.',
          images: [
            {
              url: '/Image/logo.png',
              width: 1200,
              height: 630,
              alt: 'Flex Crew Logo',
              type: 'image/png',
            },
            {
              url: '/Image/b2.png',
              width: 1080,
              height: 1080,
              alt: 'Flex Crew Services',
              type: 'image/png',
            }
          ],
          site_name: 'Flex Crew',
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