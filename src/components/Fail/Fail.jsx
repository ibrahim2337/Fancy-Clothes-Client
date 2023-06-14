import TopBanner from "../TopBanner/TopBanner";
import img from "../../assets/top-banner.gif";
import Wrapper from "../Wrapper/Wrapper";

const Fail = () => {
  return (
    <div>
      <TopBanner img={img} title={"PAYMENT FAILED"} />
      <Wrapper>
        <div className="flex font-black text-5xl text-red-600 justify-center my-44">
          <h2>PAYMENT FAILED </h2>
        </div>
      </Wrapper>
    </div>
  );
};

export default Fail;
