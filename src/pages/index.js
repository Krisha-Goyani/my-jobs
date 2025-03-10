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
  return (
    <div className="text-black bg-sky-200 w-full">
      <Header />
      <div className="container mx-auto">
        <div className="md:px-16 xs:px-4 bg-container-bg">
          <HeroImage />
          <div className="flex justify-between max-w-[1310px] w-full">
            <div className="relative md:pl-9 md:pr-16 xs:pt-5 md:pt-2 max-w-[856x] w-full">
              <Name />
              <About />
              <Languages />
              <Skill />
              <PastWorks />
              <RatingsAndReviews />
            </div>
            <div className="max-w-[434px] w-full">
              <PriceTable />
              <div className="mt-8">
                <Badges />
                <TradeCertificates /> 
                <AdditionalInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
          <Footer/>
    </div>
  );
};

export default HomePage;
