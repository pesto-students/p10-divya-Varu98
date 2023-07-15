import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-white border-gray-200  max-sm:z-10">
      <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
        <button className="flex items-center text-3xl">
          🧬
          <span className="self-center text-2xl font-semibold whitespace-nowrap ml-4 ">
            LittleLink
          </span>
        </button>
        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            toggle ? "max-sm:block " : "max-sm:hidden"
          } w-full md:block md:w-auto" id="navbar-default`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:justify-end md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to={"/"}>
                <button
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:hover:text-blue-300 "
                  aria-current="page"
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <button
                  href="#"
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <button
                  href="#"
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 "
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
