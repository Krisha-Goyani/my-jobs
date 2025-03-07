import React, { createContext, useState } from 'react';

// Create a Context
export const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
    const [userData] = useState({
        name: 'Kristin Watson',
        rating: 4.5,
        reviews: 2060,
        experience: '5 yrs of experience',
        location: 'Los Angeles, CA',
        about: 'Reliable and trustworthy professional. I bring all necessary tools and materials. Specialize in both interior and exterior masonry work. Some exceptional tasks may incur additional charges. Please consider that the average time for a job: Small repair takes 2h; Patio construction is 3h; Full wall construction takes 4h.',
        languages: ['English', 'Spanish', 'French', 'German', 'Dutch', 'Chinese', 'Russian'],
    });

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    );
};