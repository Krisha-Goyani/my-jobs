import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navItems, setNavItems] = useState([
    { href: '/', label: 'For Businesses' },
    { href: '/', label: 'For Workers' },
    { href: '/', label: 'Construction Insights' },
    { href: '/', label: 'About Us' },
    { href: '/', label: 'Contact Us' },
    { href: '/', label: 'Post a Job' },
  ]);

  return (
    <NavContext.Provider value={{ navItems, setNavItems }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavItems = () => {
  return useContext(NavContext);
};
