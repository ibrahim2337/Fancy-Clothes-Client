import dashboard from '../../assets/dashboard.svg'
import useTitle from '../../hooks/useTitle';
const DashBoardHome = () => {
  useTitle("Dashboard Home");
    return (
        <div className="p-10 w-full flex flex-col items-center">
        <div className="">
          <h2 className="mb-14 lg:mb-0 text-center lg:text-left text-5xl font-bold text-[#1EB2A6]">
            Welcome To Dashboard
          </h2>
        </div>
        <div className="lg:w-7/12">
          <img src={dashboard} alt="" />
        </div>
      </div>
    );
};

export default DashBoardHome;