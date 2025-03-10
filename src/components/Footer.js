import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Image from 'next/image';

const FooterSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="md:mb-0 mb-4">
      <button 
        className="md:hidden w-full flex gap-3 items-center text-red-600 font-medium mb-4"
        onClick={onToggle}
      >
        {title} <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      <h3 className="hidden md:block flex gap-6 text-text-red-secondary text-xl font-bold mb-6">{title}</h3>
      <div className={`${isOpen ? 'hidden md:block' : 'block'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const { footerData } = useData();
  const [openSections, setOpenSections] = useState({
    about: false,
    help: false,
    download: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-black text-white py-5">
      <div className="container mx-auto md:px-16 px-4">
        <div className="md:flex md:justify-between max-w-[1310px] w-full">
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
                  <li key={link.id} className='mb-6 text-lg font-normal'>
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
              <ul className="">
                {footerData.needHelp.links.map(link => (
                  <li key={link.id} className='mb-6 text-lg font-normal'>
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
              <div className="">
                {footerData.downloadApp.stores.map(store => (
                  <a key={store.id} href={store.href} className="block mb-6">
                    <Image 
                      src={store.image} 
                      alt={store.name}
                      width={135}
                      height={40}
                      className="hover:opacity-90 border border-white rounded-lg h-10 w-32"
                    />
                  </a>
                ))}
              </div>
            </FooterSection>
          </div>

          {/* Right Section */}
          <div className="md:text-right text-left">
            <div className="flex md:justify-end justify-start gap-4 mb-10">
              {footerData.socialLinks.map(social => (
                <a key={social.id} href={social.href} className="hover:opacity-80">
                  <Image 
                    src={social.icon} 
                    alt={social.name}
                    width={18}
                    height={18}
                  />
                </a>
              ))}
            </div>

            <div className="flex md:justify-end justify-start gap-2 mb-14">
              {footerData.paymentMethods.map(method => (
                <Image 
                  key={method.id}
                  src={method.image} 
                  alt={method.name}
                  width={40}
                  height={25}
                  className= 'w-14 h-9 border border-white rounded-md'
                />
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1">{footerData.contact.title}</h3>
              <p className="text-lg font-normal text-text-gray-light mb-7">{footerData.contact.description}</p>
              <div className="flex md:justify-end justify-start gap-4">
                <button className="xs:w-36 xs:h-11 md:w-52 md:h-14 bg-text-red text-lg font-medium text-white md:px-6 md:py-2 px-4 py-2 rounded-full hover:bg-red-700">
                  Contact us
                </button>
                <button className="xs:w-44 xs:h-11 md:w-52 md:h-14  border border-border-red text-sm font-medium text-white md:px-8 md:py-2 px-4 py-2 rounded-full hover:bg-red-600/10 flex items-center gap-2">
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
        <div className="py-8 my-8">
          <div className="md:flex md:justify-between items-start">
          <div className=''>
            <h3 className="text-xl font-bold mb-4 md:mb-5">Sign up to our newsletter</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="enter your email address"
                className="xs:w-60 xs:h11 bg-transparent text-lg font-medium text-text-gray-light border border-border-red rounded-full px-6 py-2 flex-1 md:w-[470px] md:h-14"
              />
              <button className="xs:w-24 xs:h-11 bg-text-red text-lg font-medium text-white md:px-6 md:py-2 px-4 py-2 rounded-full hover:bg-red-700 md:w-52 md:h-14">
                Sign up
              </button>
            </div>
          </div>
             {/* Copyright */}
        <div className="font-circular-std font-normal xs:mt-8 xs:text-center md:text-end md:self-end text-sm md:text-gray-400">
          {footerData.copyright}
          </div>
        </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer; 