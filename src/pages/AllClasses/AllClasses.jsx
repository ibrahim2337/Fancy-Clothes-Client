import TopBanner from "../../components/TopBanner/TopBanner";
import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Wrapper from "../../components/Wrapper/Wrapper";

import Classes from "../Home/Classes/Classes";
import img from '../../assets/top-banner.gif'
import useTitle from "../../hooks/useTitle";

const AllClasses = () => {
  useTitle("AllClasses");
  const getClasses = useFetch("http://localhost:5000/course");

  const { data, loading } = getClasses;

  const classesItems = data;

  return (
    <div>
      <TopBanner
        img={img}
        title={"OUR CLASSES"}
      />
      <Wrapper className='py-20'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5">
              {classesItems?.map((classesItem) => (
                <Classes
                  key={classesItem?._id}
                  img={classesItem?.image}
                  title={classesItem?.name}
                  seats={classesItem?.available_seats}
                  instructor={classesItem?.instructor?.name}
                  price={classesItem?.price}
                />
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default AllClasses;
