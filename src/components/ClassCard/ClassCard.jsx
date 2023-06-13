const ClassCard = ({item}) => {
   const {name,price,available_seats,image,instructor}=item

  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg ">
        <img
          className="object-cover object-center w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 ">
            {name}
          </h1>
          <div>
            <img src="" alt="" />
            <h3>{instructor.name}</h3>
          </div>
          <div>
            <h2>Available seats:{available_seats}</h2>
            <p>Price: ${price}</p>
          </div>
          <button className="w-full px-5 py-3 mt-5 rounded-md border-2 border-[#1EB2A6] text-[#1EB2A6] uppercase font-bold hover:bg-[#1EB2A6] hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
