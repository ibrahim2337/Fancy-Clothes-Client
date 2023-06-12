const Update = () => {
  return (
    <div>
      {/* <section className="mt-16 mb-20 bg-[#1EB2A6] text-white">
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold leading-none">
              Dear - Stay tune and get the latest update
            </h1>
            <p className="text-lg">Far far away, behind the word mountains</p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end ">
            <div className="flex flex-row ">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg  sm:w-2/3 text-black"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-white text-[#1EB2A6] hover:text-white hover:bg-[#1EB2A6]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="grid lg:grid-cols-2 mx-5 lg:mx-32  mt-16 mb-20  bg-white rounded-lg border border-[#1EB2A6] shadow-lg">
        <div className="py-16 bg-[#1EB2A6] ">
          <div className="px-10">
            <h2 className="text-2xl font-bold  text-white md:text-gray-100">
              Sign Up For{" "}
              <span className="">
                Project
              </span>{" "}
              Updates
            </h2>

            <p className="mt-2 text-sm text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur obcaecati odio
            </p>
          </div>
        </div>

        <div className=" py-20 flex items-center justify-center md:w-1/2:">
          <form>
            <div className="flex flex-col p-2 gap-2 overflow-hidden border rounded-lg border-[#1EB2A6] lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-3 py-2 rounded-md  text-gray-700 placeholder-gray-500 bg-[#daebe9] outline-none  dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <button className="px-4 py-3 text-sm font-medium tracking-wider uppercase text-white bg-[#1EB2A6]  hover:bg-[#05887d] rounded-md">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Update;
