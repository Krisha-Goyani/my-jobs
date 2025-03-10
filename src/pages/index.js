import React, { useState } from 'react';
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Name from "../components/Name";
import About from "../components/About";
import Languages from "../components/Languages";
import PriceTable from "../components/PriceTable";
import Skill from "../components/Skill";
import Badges from "../components/Badges";
import TradeCertificates from "../components/TradeCertificates";
import AdditionalInfo from "../components/AdditionalInfo";
import PastWorks from "../components/PastWorks";
import RatingsAndReviews from "../components/RatingsAndReviews";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const toggleMobileView = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  return (
    <div className="text-black bg-sky-200 w-full">
      <Header />
      <div className="container mx-auto">
        <div className="md:px-16 xs:px-4 bg-container-bg">
          <HeroImage />
          <div className="md:flex justify-between max-w-[1310px] w-full">
            <div className="relative md:pl-9 md:pr-16 xs:pt-5 md:pt-2 max-w-[856x] w-full">
              <Name />
              <div className="md:hidden"><PriceTable /></div>
              <div className="xs:hidden md:block">
                <About />
                <Languages />
              </div>
              <Skill />
              
              {/* Preview content with overlay when not expanded */}
              {!isMobileExpanded && (
                <div className="md:hidden relative h-[305px] overflow-hidden -mx-4 my-5">
                  {/* Simple transparent white overlay */}
                  <div className="absolute inset-0 bg-white/60 z-10" />
                  
                  {/* Preview content with reduced opacity */}
                  <div className="opacity-50">
                    <PastWorks />
                    <RatingsAndReviews />
                    <div className="max-w-[434px] w-full">
                      <Badges />
                      <TradeCertificates /> 
                      <AdditionalInfo />
                    </div>
                  </div>
                  
                  {/* Centered View More Button */}
                  <div className="absolute bottom-1/2 translate-y-1/2 left-0 right-0 z-20 px-4 ">
                    <button 
                      onClick={toggleMobileView}
                      className="w-full max-w-md mx-auto bg-black text-white py-3 px-4 rounded-full text-base font-medium block"
                    >
                      VIEW MORE
                    </button>
                  </div>
                </div>
              )}

              {/* Expanded content */}
              {isMobileExpanded && (
                <>
                  <div className="md:hidden block">
                    <PastWorks />
                    <RatingsAndReviews />
                  </div>
                </>
              )}

              {/* Desktop content */}
              <div className="xs:hidden md:block">
                <PastWorks />
                <RatingsAndReviews />
              </div>
            </div>
            
            <div className="max-w-[434px] w-full">
              <div className="md:block hidden"><PriceTable /></div>
              {/* Additional content */}
              <div className={`mt-8 ${!isMobileExpanded ? 'md:block hidden' : 'block'}`}>
                <Badges />
                <TradeCertificates /> 
                <AdditionalInfo />
              </div>
            </div>
          </div>

          {/* Mobile View Less Button */}
          {isMobileExpanded && (
            <div className="md:hidden mt-8 mb-8">
              <button 
                onClick={toggleMobileView}
                className="w-full bg-black text-white py-3 px-4 rounded-full text-base font-medium"
              >
                VIEW LESS
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
