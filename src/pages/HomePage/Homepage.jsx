
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import ClassMenu from "../../components/ClassMenu/ClassMenu";
import Packages from "../../components/Packages/Packages";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";
import Testimonials from "../../components/Testimonials/Testimonials";
import Update from "../../components/Update/Update";




const Homepage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Category />
      <ClassMenu />
      <PopularInstructor />
      <Packages />
      <Testimonials />
      <Update />
      
    </div>
  );
};

export default Homepage;
