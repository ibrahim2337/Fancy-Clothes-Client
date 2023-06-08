const Gallery = () => {
  return (
    <div className="pt-24">
        <div className="max-w-2xl mt-10  mx-auto mb-16 text-center">
            <p className="text-xl font-medium text-center text-[#1EB2A6] ">
              OUR GALLERY
            </p>
            <h2 className="text-4xl font-bold mt-3">
              HELLO! Welcome to Photo Gallery With Creative & Unique Style
            </h2>
          </div>
      <section className="">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/300x300/?4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
