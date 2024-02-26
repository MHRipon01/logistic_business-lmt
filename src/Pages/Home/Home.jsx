import { Navbar } from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Freights from "./Freights/Freights";


 
const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto overflow-x-hidden">
            <Navbar></Navbar>
            <Banner />
            <Freights />
        </div>
    );
};

export default Home;