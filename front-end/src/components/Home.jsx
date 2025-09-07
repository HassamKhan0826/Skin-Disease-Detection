import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from './DentalImage/skinss.jpg';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-50 p-4">
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col md:flex-row items-center justify-center py-12"
      >
        <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600">
            SKIN <span className="text-indigo-800">DISEASE</span> DETECTION SYSTEM
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
          "Healthy skin is essential for overall well-being. Our comprehensive skin evaluations help keep your skin glowing and resilient!"
          </p>
          <div className="flex space-x-4">
            <Link
              to="/Doctor"
              className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 px-8 py-4 rounded-full transition duration-300"
            >
              For Admin
            </Link>
            <Link
              to="/Patient"
              className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 px-8 py-4 rounded-full transition duration-300"
            >
              For User
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={logo}
            alt="Brain health"
            className="rounded-lg shadow-xl h-48 md:h-64 lg:h-80"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
