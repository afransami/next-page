import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Home from "./Home";
import Books from "./Books";
import About from "./About";
import { Link, NavLink } from "react-router-dom";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="py-2 px-2 rounded-xl container mx-auto bg-gray-200 flex items-center justify-between">
      {/* logo section */}
      <Link to="/" className="inline-flex items-center gap-1">
        <FontAwesomeIcon
          icon={faBookOpenReader}
          className="text-3xl text-blue-600"
        />
        {/* <BoltIcon className="h-6 text-blue-500" /> */}
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
          NextPage
        </span>
      </Link>

      {/* nav item setcion  */}
      <ul className="items-center hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : ""
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : ""
            }
          >
            About us
          </NavLink>
        </li>
      </ul>

      {/* Mobile Navbar Section */}
      <div className="lg:hidden ">
        {/* Dropdown Open Button */}
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-5 text-blue-500" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-xl">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                  <FontAwesomeIcon icon={faBookOpenReader} className="text-3xl text-blue-600"/>
                    {/* <BoltIcon className="h-6 w-6 text-blue-600" /> */}
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      nextPage
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link to="/" className="default">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headers;
