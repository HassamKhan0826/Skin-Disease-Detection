import React from "react";
import { Link } from "react-router-dom";
import logo from './DentalImage/skinss.jpg';

const Menu = () => {
  return (
    <nav className="bg-indigo-600 py-4 rounded-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo flex items-center">
          <img src={logo} alt="Brain Health" className="h-12 w-12 rounded-full" />
          <span className="text-white text-xl ml-2 font-bold">SKININSIGHT</span>
        </div>
        <div className="links">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-300 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-300 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-indigo-300 transition duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="media">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link
                to="/signup"
                className="btn bg-indigo-800 hover:bg-indigo-400 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="btn bg-indigo-800 hover:bg-indigo-400 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
