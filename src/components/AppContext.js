import { createContext, useContext, useState } from 'react';

// Create a Context
const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example state

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};