import React, { createContext, useState } from 'react';

// Create a Context
export const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
    const userData = {
        name: 'Kristin Watson',
        rating: 4.5,
        reviews: 2060,
        experience: '5 yrs of experience',
        location: 'Los Angeles, CA',
        about: 'Reliable and trustworthy professional. I bring all necessary tools and materials. Specialize in both interior and exterior masonry work. Some exceptional tasks may incur additional charges. Please consider that the average time for a job: Small repair takes 2h; Patio construction is 3h; Full wall construction takes 4h.',
        languages: ['English', 'Spanish', 'French', 'German', 'Dutch', 'Chinese', 'Russian'],
        badges: [
            { id: 1, type: 'phone', status: 'active' },
            { id: 2, type: 'email', status: 'active' },
            { id: 3, type: 'id', status: 'active' }
        ],
        tradeCertificates: [
            { id: 1, image: '/images/c1.png', alt: 'Certificate 1' },
            { id: 2, image: '/images/c2.png', alt: 'Certificate 2' },
            { id: 3, image: '/images/c3.png', alt: 'Certificate 3' },
            { id: 4, image: '/images/c4.png', alt: 'Certificate 4' },
        ],
        additionalInfo: [
            {
                id: 1,
                icon: '/images/additional-certi1.png',
                title: "Worker's Compensation Document",
                status: 'Valid upto 24/09/2654',
                action: 'View'
            },
            {
                id: 2,
                icon: '/images/additional-certi2.png',
                title: 'General Liability Insurance',
                status: 'Not available',
                action: null
            }
        ]
    };

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    );
};