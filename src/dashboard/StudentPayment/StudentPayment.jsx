
import TopBanner from "../../components/TopBanner/TopBanner";
import img from '../../assets/top-banner.gif'
import Wrapper from "../../components/Wrapper/Wrapper";

const StudentPayment = () => {
  
  return (
    <div>
      <TopBanner
        img={img}
        title={"PAYMENT SUCCESS"}
      />
      <Wrapper>
      <div className="flex font-black text-5xl text-green-600 justify-center my-44">
      <h2>PAYMENT SUCCESS </h2>
     </div>
      </Wrapper>
     
    </div>
  );
};

export default StudentPayment;
