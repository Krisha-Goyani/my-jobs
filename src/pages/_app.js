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
      </Head>
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