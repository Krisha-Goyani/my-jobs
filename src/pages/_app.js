import '../styles/globals.css';
import { AppProvider } from '../components/AppContext';
import { NavProvider } from '../context/NavContext';
import { UserProvider } from '../context/UserContext';
import { PriceProvider } from '../context/PriceContext';
import { SkillProvider } from '@/context/SkillContext';

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;