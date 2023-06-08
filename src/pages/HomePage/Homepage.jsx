
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import ClassMenu from "../../components/ClassMenu/ClassMenu";
import Packages from "../../components/Packages/Packages";
import Testimonials from "../../components/Testimonials/Testimonials";
import Update from "../../components/Update/Update";



const Homepage = () => {
  return (
    <div>
      <Banner />
      <About />
      <ClassMenu />
      <Packages />
      <Testimonials />
      <Update />
      
    </div>
  );
};

export default Homepage;
