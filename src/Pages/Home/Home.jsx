import Footer from "../../Shared/Footer/Footer";
import { Navbar } from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import FocusedIndustries from "./FocusedIndustries/FocusedIndustries";
import Freights from "./Freights/Freights";
import LogisticText from "./LogisticText/LogisticText";
import SelfService from "./Statistics/SelfService/SelfService";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <Banner />
      <Freights />
      <LogisticText />
      <FocusedIndustries />
      <Statistics />
      <SelfService />
      <Footer />
    </div>
  );
};

export default Home;
