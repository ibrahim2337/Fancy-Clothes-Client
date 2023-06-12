const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="">
        <div className="container px-5 lg:px-24 py-12 mx-auto">
          <div className="text-center ">
            <p className="font-bold text-xl text-[#1EB2A6] uppercase">
              Contact us
            </p>

            <h1 className="text-4xl text-center font-bold mt-3 lg:text-5xl">
              We’d love to hear from you
            </h1>
          </div>

          <img
            className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
            alt=""
          />

          <div className="grid grid-cols-1 gap-12 mt-10 px-5 lg:px-24  lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 text-center">
              <span className="inline-block p-3 text-white rounded-lg bg-[#1EB2A6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-semibold">Chat to sales</h2>
              <p className="mt-2 text-sm text-gray-500">
                Speak to our friendly team.
              </p>
              <p className="mt-2 text-sm text-blue-500 ">hello@merakiui.com</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 text-center">
              <span className="inline-block p-3 text-white rounded-lg bg-[#1EB2A6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-semibold ">Visit us</h2>
              <p className="mt-2 text-sm text-gray-500 ">
                Visit our office HQ..
              </p>
              <p className="mt-2 text-sm text-blue-500 ">
                100 Smith Street Collingwood VIC 3066
              </p>
            </div>

            <div className="p-6 rounded-lg bg-blue-50 text-center ">
              <span className="inline-block p-3 rounded-lg text-white bg-[#1EB2A6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-semibold">Call us</h2>
              <p className="mt-2 text-sm text-gray-500 ">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-blue-500 ">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center px-5 ">
          <p className="font-bold text-xl text-[#1EB2A6] uppercase">
            Contact Form
          </p>

          <h1 className="text-4xl text-center font-bold mt-3 lg:text-5xl">
            We’d love to hear from you
          </h1>
        </div>
        <div className=" grid lg:grid-cols-2  text-center mt-20 mb-16 ">
          <div className="px-5  lg:px-24">
            <div className="p-4 py-6 rounded-lg bg-[#F3F3F3]  md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-md font-semibold text-start">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block mb-2 text-md font-semibold text-start">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-md font-semibold text-start">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-md font-semibold text-start">
                    Message
                  </label>
                  <textarea
                    className="block w-full px-5 py-2.5 mt-2 mb-20 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 rounded-md text-sm font-medium tracking-wide  bg-[#1EB2A6] hover:bg-[#05887d ">
                  Send message
                </button>
              </form>
            </div>
          </div>
          <div className="px-5 mt-10 lg:mt-0 lg:px-0 me-24 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.7346725264047!2d90.35939047212044!3d23.8280322385567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13a21730b43%3A0xb14a9c52d01c00d9!2sMirpur-12%20Bus%20Stand!5e0!3m2!1sen!2sus!4v1686511480315!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
