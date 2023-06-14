import useTitle from "../../../hooks/useTitle";
import "./Featured.css";

const Featured = () => {
  useTitle("Home");
  return (
    <div className="featured-item bg-fixed text-black pt-8 my-6 bg-slate-300 bg-opacity-25">
      <div className="">
        <div className="flex-col md:flex-row flex justify-center items-center gap-10 py-14 lg:py-28">
          <img className="md:w-6/12 h-auto rounded-sm" src="" alt="" />
          <div className="text-white md:w-6/12 space-y-2 text-center md:text-left">
            <h5>March 20, 2023</h5>
            <h4 className="font-bold text-lg">WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
