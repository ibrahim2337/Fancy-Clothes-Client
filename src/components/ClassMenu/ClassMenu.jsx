const ClassMenu = () => {
  return (
    <div className="mt-24">
      <p className="text-xl font-medium text-center text-[#1EB2A6] ">
        OUR COURSES
      </p>
      <h1 className="text-4xl text-center font-bold mt-3 lg:text-5xl">
        Explore Our Popular Online Courses
      </h1>
      <div className="px-5 mt-12 lg:px-20 grid lg:grid-cols-3">
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg ">
          <img
            className="object-cover object-center w-full h-56"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 ">
              Patterson johnson
            </h1>
            <div>
              <img src="" alt="" />
              <h3>Name</h3>
            </div>
            <div>
              <h2>Available seats:20</h2>
              <p>Price: $100</p>
            </div>
            <button className="w-full px-5 py-3 mt-5 rounded-md border-2 border-[#1EB2A6] text-[#1EB2A6] uppercase font-bold hover:bg-[#1EB2A6] hover:text-white">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg ">
          <img
            className="object-cover object-center w-full h-56"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 ">
              Patterson johnson
            </h1>
            <div>
              <img src="" alt="" />
              <h3>Name</h3>
            </div>
            <div>
              <h2>Available seats:20</h2>
              <p>Price: $100</p>
            </div>
            <button className="w-full px-5 py-3 mt-5 rounded-md border-2 border-[#1EB2A6] text-[#1EB2A6] uppercase font-bold hover:bg-[#1EB2A6] hover:text-white">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg ">
          <img
            className="object-cover object-center w-full h-56"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 ">
              Patterson johnson
            </h1>
            <div>
              <img src="" alt="" />
              <h3>Name</h3>
            </div>
            <div>
              <h2>Available seats:20</h2>
              <p>Price: $100</p>
            </div>
            <button className="w-full px-5 py-3 mt-5 rounded-md border-2 border-[#1EB2A6] text-[#1EB2A6] uppercase font-bold hover:bg-[#1EB2A6] hover:text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassMenu;
