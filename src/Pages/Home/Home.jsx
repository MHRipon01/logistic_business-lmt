import { Navbar } from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Freights from "./Freights/Freights";
import LogisticText from "./LogisticText/LogisticText";


 
const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto overflow-x-hidden">
            <Navbar></Navbar>
            <Banner />
            <Freights />
            <LogisticText />
        </div>
    );
};

export default Home;