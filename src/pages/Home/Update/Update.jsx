

const Update = () => {
    return (
        <div>
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