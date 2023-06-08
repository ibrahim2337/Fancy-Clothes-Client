import MenuCard from "../../common/MenuCard";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Packages from "../../components/Packages/Packages";
import Testimonials from "../../components/Testimonials/Testimonials";



const Homepage = () => {
  return (
    <div>
      <Banner />
      <About />
      <MenuCard />
      <Packages />
      <Testimonials />
      
    </div>
  );
};

export default Homepage;
