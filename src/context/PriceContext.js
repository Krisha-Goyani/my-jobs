import React, { createContext, useState } from 'react';

// Create a Context
export const PriceContext = createContext();

// Create a Provider component
export const PriceProvider = ({ children }) => {
    const [prices] = useState([
        { service: 'Handymen', rate: '$10.75/hr', category: 'General' },
        { service: 'Flooring Installer', rate: '$8.50/hr', category: 'Commercial' },
        { service: 'Bricklayer', rate: '$13.00/hr', category: 'Industrial' },
        { service: 'Demolition Worker', rate: '$10.75/hr', category: 'Industrial' },
    ]);

    return (
        <PriceContext.Provider value={{ prices }}>
            {children}
        </PriceContext.Provider>
    );
}; 