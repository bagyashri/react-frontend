import React from "react";

const LandingPageCandidate = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-start items-center bg-white rounded-m">
          <img
            className=" w-[133px] h-Sz12 rounded-none"
            src="./images/Image 2341.png"
            alt="logo"
          />
          <div className="block  lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block font-body text-t3 opacity-100">
            <ul className="inline-flex text-neutral-600 bg-transparent rounded-tl rounded-tr cursor-pointer whitespace-nowrap">
              <li>
                <a className="px-4 underline underline-offset-8 decoration-3 decoration-primary-500 font-bold active:bg-transparent text-primary-500" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="px-4 active:font-bold active:bg-transparent active:text-primary-500 hover:text-primary-500" href="go">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default LandingPageCandidate;