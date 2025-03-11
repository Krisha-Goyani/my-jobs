import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState('info'); // 'info', 'price', 'reviews'

  const renderTabContent = () => {
    switch(activeTab) {
      case 'info':
        return (
          <>
            <About />
            <Languages />
            <Skill />
            <Badges />
            <TradeCertificates />
            <PastWorks />
            <AdditionalInfo />
          </>
        );
      case 'price':
        return <PriceTable />;
      case 'reviews':
        return <RatingsAndReviews />;
      default:
        return null;
    }
  };

  return (
    <div className="text-black w-full">
      <Header />
      <div className="container mx-auto pt-20 md:pt-40">
        <div className="lg:px-16 xs:px-4">
          <HeroImage />
          <div className="lg:flex justify-between max-w-[1310px] w-full">
            <div className="relative lg:pl-9 lg:pr-16 xs:pt-5 md:pt-2 max-w-[856x] w-full">
              <Name />
              
              {/* Mobile Tab Navigation */}
              <div className="md:hidden sticky top-0 bg-bg-info z-50 -mx-4 px-4 py-2 mb-3 border-b">
                <div className="flex font-circular-std justify-between gap-2">
                  <button 
                    onClick={() => setActiveTab('info')}
                    className={`flex-1 py-2 px-4  text-sm font-medium ${
                      activeTab === 'info' ? ' text-black ' : 'text-text-gray'
                    }`}
                  >
                    Info
                  </button>
                  <button 
                    onClick={() => setActiveTab('price')}
                    className={`flex-1 py-2 px-4  text-sm font-medium ${
                      activeTab === 'price' ? ' text-black ' : 'text-text-gray'
                    }`}
                  >
                    Price Table
                  </button>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`flex-1 py-2 px-4  text-sm font-medium ${
                      activeTab === 'reviews' ? ' text-black ' : 'text-text-gray'
                    }`}
                  >
                    Reviews
                  </button>
                </div>
              </div>

              {/* Mobile Content */}
              <div className="md:hidden">
                {renderTabContent()}
              </div>

              {/* Desktop Content */}
              <div className="hidden md:block">
                <About />
                <Languages />
                <Skill />
                <PastWorks />
                <RatingsAndReviews />
              </div>
            </div>

            {/* Right sidebar content - Desktop only */}
            <div className="lg:max-w-[434px] md:w-full lg:pl-0 hidden md:block">
              <div className="md:flex md:gap-4 lg:block">
                <div className="md:w-[434px] lg:mb-10 lg:w-full">
                  <PriceTable />
                </div>
                <div className="md:w-1/2 lg:w-full">
                  <Badges />
                </div>
              </div>
              <div className="md:flex md:gap-4 lg:block mt-8">
                <div className="md:w-1/2 lg:w-full">
                  <TradeCertificates />
                </div>
                <div className="md:w-1/2 lg:w-full">
                  <AdditionalInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
