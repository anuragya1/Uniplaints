import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="flex flex-wrap justify-between items-center mx-4 sm:mx-auto">
        <h1 className="text-teal-400 text-xl px-4 sm:px-16 font-bold">
          Uniplaints
        </h1>
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-teal-400 hover:text-teal-500 focus:outline-none"
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-7`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-7">
            <NavLink
              to="/"
              className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 py-2 md:py-0"
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/submitForm"
              className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 py-2 md:py-0"
            >
              Submit Complaints
            </NavLink>
            <NavLink
              to="/ViewComplaint"
              className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 py-2 md:py-0"
            >
              View Complaints
            </NavLink> */}
            <NavLink
              to="/login"
              className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 py-2 md:py-0 px-3"
            >
              Login
            </NavLink>
            <NavLink
              to="/sign"
              className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 py-2 md:py-0"
            >
              Sign Up
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}