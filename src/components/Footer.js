import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Image from 'next/image';

const FooterSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="md:mb-0 mb-4">
      <button 
        className="md:hidden w-full flex items-center justify-between text-red-600 font-medium mb-4"
        onClick={onToggle}
      >
        {title} <span>{isOpen ? '▼' : '▲'}</span>
      </button>
      <h3 className="hidden md:block text-red-600 font-medium mb-4">{title}</h3>
      <div className={`${isOpen ? 'block' : 'hidden md:block'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const { footerData } = useData();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          {/* Left Section */}
          <div className="md:flex md:gap-20 md:mb-0 mb-8">
            {/* About Us */}
            <FooterSection 
              title={footerData.aboutUs.title}
              isOpen={openSections.about}
              onToggle={() => toggleSection('about')}
            >
              <ul className="space-y-3">
                {footerData.aboutUs.links.map(link => (
                  <li key={link.id}>
                    <a href={link.href} className="hover:text-gray-300">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Need Help */}
            <FooterSection 
              title={footerData.needHelp.title}
              isOpen={openSections.help}
              onToggle={() => toggleSection('help')}
            >
              <ul className="space-y-3">
                {footerData.needHelp.links.map(link => (
                  <li key={link.id}>
                    <a href={link.href} className="hover:text-gray-300">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Download App */}
            <FooterSection 
              title={footerData.downloadApp.title}
              isOpen={openSections.download}
              onToggle={() => toggleSection('download')}
            >
              <div className="space-y-3">
                {footerData.downloadApp.stores.map(store => (
                  <a key={store.id} href={store.href} className="block">
                    <Image 
                      src={store.image} 
                      alt={store.name}
                      width={135}
                      height={40}
                      className="hover:opacity-90"
                    />
                  </a>
                ))}
              </div>
            </FooterSection>
          </div>

          {/* Right Section */}
          <div className="md:text-right text-left">
            <div className="flex md:justify-end justify-start gap-4 mb-6">
              {footerData.socialLinks.map(social => (
                <a key={social.id} href={social.href} className="hover:opacity-80">
                  <Image 
                    src={social.icon} 
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>

            <div className="flex md:justify-end justify-start gap-2 mb-8">
              {footerData.paymentMethods.map(method => (
                <Image 
                  key={method.id}
                  src={method.image} 
                  alt={method.name}
                  width={40}
                  height={25}
                />
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">{footerData.contact.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{footerData.contact.description}</p>
              <div className="flex md:justify-end justify-start gap-4">
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
                  Contact us
                </button>
                <button className="border border-red-600 text-white px-6 py-2 rounded-full hover:bg-red-600/10 flex items-center gap-2">
                  <Image 
                    src="/images/whatsapp.png" 
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  {footerData.contact.phone}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-b border-gray-800 py-8 my-8">
          <div className="md:flex md:justify-between items-center">
            <h3 className="text-lg font-medium mb-4 md:mb-0">Sign up to our newsletter</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="enter your email address"
                className="bg-transparent border border-red-600 rounded-full px-6 py-2 flex-1 md:w-[300px]"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 