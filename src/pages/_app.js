import '../styles/globals.css';
import { AppProvider } from '../components/AppContext';
import { NavProvider } from '../context/NavContext';
import { UserProvider } from '../context/UserContext';
import { PriceProvider } from '../context/PriceContext';
import { SkillProvider } from '@/context/SkillContext';
import { DataProvider } from '../context/DataContext';

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;