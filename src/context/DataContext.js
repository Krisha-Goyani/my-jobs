import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const pastWorks = [
    {
      id: 1,
      title: "Bricklayer",
      name: "Jacob Simmons",
      date: "03/12/2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        { src: "/images/b1.png", isBlurred: false },
        { src: "/images/b2.png", isBlurred: false },
        { src: "/images/b3.png", isBlurred: true }
      ]
    },
    {
      id: 2,
      title: "Handyman",
      name: "Tom Hardy",
      date: "02/27/2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        { src: "/images/h1.png", isBlurred: false },
        { src: "/images/b1.png", isBlurred: false }
      ]
    },
    {
      id: 3,
      title: "Handwork",
      name: "Tom Hardy",
      date: "02/27/2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        { src: "/images/h1.png", isBlurred: false },
        { src: "/images/b1.png", isBlurred: false }
      ]
    }
  ];

  const reviews = {
    summary: {
      average: 3.0,
      totalRatings: 3197,
      totalReviews: 2060,
      distribution: [
        { stars: 5, count: 2193 },
        { stars: 4, count: 701 },
        { stars: 3, count: 189 },
        { stars: 2, count: 76 },
        { stars: 1, count: 38 }
      ]
    },
    reviews: [
      {
        id: 1,
        rating: 5,
        category: "Masonry",
        text: "I recently had a project completed, and I couldn't be happier with the outcome. From start to finish, the experience was smooth and hassle-free. The professional was incredibly skilled and demonstrated a high level of expertise. They communicated clearly about the timeline and any potential issues. Although...",
        author: "Sarah Johnson",
        date: "10 days ago"
      },
      {
        id: 2,
        rating: 4,
        category: "Masonry",
        text: "Excellent work! The service was punctual, professional, and the quality exceeded my expectations. Highly recommend!",
        author: "Michael Lee",
        date: "28 days ago"
      },
      {
        id: 3,
        rating: 2,
        category: "Glazier",
        text: "While the overall result was good, the process had some hiccups. The professional arrived later than scheduled, which caused a bit of disruption. Additionally, there were a few unexpected delays during the project. However, once the work began, it was clear that they were skilled and knowledgeable. The end result was quite satisfactory, and they made sure to address any concerns I had. Better time management would have made the experience perfect, but the quality of work was solid.",
        author: "Lisa Green",
        date: "1 months ago"
      },
      {
        id: 4,
        rating: 1,
        category: "Plumbing",
        text: "Did a fantastic job fixing our issue. Knowledgeable and left everything clean. Would definitely hire again.",
        author: "Thomas Roberts",
        date: "11 months ago"
      },
      {
        id: 5,
        rating: 5,
        category: "Glazier",
        text: "We hired for a significant project, and the results were exceptional. The professional demonstrated impressive craftsmanship and took great care in every aspect of the job. They provided valuable advice and were responsive to any changes we requested. Although there were a few minor issues durin...",
        author: "Emily Thompson",
        date: "1 year ago"
      },
      {
        id: 6,
        rating: 5,
        category: "Glazier",
        text: "We hired for a significant project, and the results were exceptional. The professional demonstrated impressive craftsmanship and took great care in every aspect of the job. They provided valuable advice and were responsive to any changes we requested. Although there were a few minor issues durin...",
        author: "Emily Thompson",
        date: "1 year ago"
      }
    ]
  };

  const footerData = {
    aboutUs: {
      title: "ABOUT US",
      links: [
        { id: 1, text: "Who we are", href: "/who-we-are" },
        { id: 2, text: "Blog", href: "/blog" },
      ]
    },
    needHelp: {
      title: "NEED HELP?",
      links: [
        { id: 1, text: "Contact Us", href: "/contact" },
        { id: 2, text: "Privacy policy", href: "/privacy" },
        { id: 3, text: "Terms of service", href: "/terms" },
        { id: 4, text: "FAQs", href: "/faqs" },
      ]
    },
    downloadApp: {
      title: "DOWNLOAD APP",
      stores: [
        { id: 1, name: "App Store", image: "/images/appStore.png", href: "#" },
        { id: 2, name: "Google Play", image: "/images/playStore.png", href: "#" },
      ]
    },
    socialLinks: [
      { id: 1, name: "Instagram", icon: "/images/instagram.png", href: "#" },
      { id: 2, name: "LinkedIn", icon: "/images/linkedin.png", href: "#" },
    ],
    paymentMethods: [
      { id: 1, name: "Mastercard", image: "/images/mastercard.png" },
      { id: 2, name: "PayPal", image: "/images/payPal.png" },
      { id: 3, name: "American Express", image: "/images/amex.png" },
      { id: 4, name: "Apple Pay", image: "/images/applePay.png" },
      { id: 5, name: "Google Pay", image: "/images/pay.png" },
    ],
    contact: {
      title: "Get in touch",
      description: "Reliable at-home services for all your constructional needs",
      phone: "+34 638 11 53 14"
    },
    copyright: "Copyright © 2024, Flex Crew."
  };

  return (
    <DataContext.Provider value={{ pastWorks, reviews, footerData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext); 