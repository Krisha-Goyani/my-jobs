import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Name from "../components/Name";
import About from "../components/About";
import Languages from "../components/Languages";
import PriceTable from "../components/PriceTable";
import Skill from "../components/Skill"

const HomePage = () => {
  return (
    <div className="bg-red-200 w-full">
      <Header />
      <div className="container mx-auto">
        <div className="md:px-16 xs:px-4 bg-container-bg">
          <HeroImage />
          <div className="flex justify-between">
            <div className="pl-9 bg-blue-200 xs:pt-5 md:pt-2">
              <Name />
              <About />
              <Languages />
              <Skill />
            </div>
            <div className="w-[434px]">
              <PriceTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
