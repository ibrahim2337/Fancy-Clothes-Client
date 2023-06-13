

const InstructorCard = ({item}) =>  {
    const {instructor}=item
    return (
        <div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={instructor.image}
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  {instructor.name}
                </p>
                <p>Email:{instructor.email}</p>
                <p>Course Name:</p>
                <p>Token:</p>
              </div>
              <div>
                <button className="w-full px-5 py-2 mt-5 mb-5 rounded-md border-2 border-[#1EB2A6] text-[#1EB2A6] uppercase font-bold hover:bg-[#1EB2A6] hover:text-white">
                  View Details
                </button>
              </div>
            </div>
        </div>
    );
};

export default InstructorCard;