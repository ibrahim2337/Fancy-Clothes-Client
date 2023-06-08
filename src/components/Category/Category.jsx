const Category = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div className=" grid lg:grid-cols-3 gap-10">
        <div className=" border rounded-md px-10 py-10 bg-[#1EB2A6] text-white">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="text-xl text-center mb-2">Downloads</div>
          <div className="text-3xl  py-5 border rounded-md mb-2 border-[#1EB2A6] text-center bg-[#3bbeb4]">
            31K
          </div>
          <div className="text-xl text-center ">Jan 1st - June 1st</div>
        </div>

        <div className=" border rounded-md px-10 py-10 bg-[#1EB2A6] text-white">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="text-xl text-center mb-2">New Users</div>
          <div className="text-3xl  py-5 border rounded-md mb-2 border-[#1EB2A6] text-center bg-[#3bbeb4]">
            4,200
          </div>
          <div className="text-xl text-center">↗︎ 400 (22%)</div>
        </div>

        <div className=" border rounded-md px-10 py-10 bg-[#1EB2A6] text-white">
          <div className="stat-figure text-secondary">
            <img src="" alt="" />
          </div>
          <div className="text-xl text-center mb-2">New Registers</div>
          <div className="text-3xl  py-5 border rounded-md mb-2 border-[#1EB2A6] text-center bg-[#3bbeb4]">
            1,200
          </div>
          <div className="text-xl text-center">↘ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
