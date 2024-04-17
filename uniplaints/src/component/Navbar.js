import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <nav className="bg-gray-900 py-4">
    <div className="flex justify-between items-center mx-4 sm:mx-auto">
      <h1 className="text-teal-400 text-xl px-16 font-bold">Uniplaints</h1>
      <ul className="flex space-x-7 justify-end">
        <NavLink
          to="/"
          className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100"
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/submitForm"
          className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100"
        >
          Submit Complaints
        </NavLink> */}
        {/* <NavLink
          to="/ViewComplaint"
          className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100"
        >
          View Complaints
        </NavLink> */}
        <NavLink
          to="feedback"
          className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 px-3"
        >
         Feedback
        </NavLink>
        <NavLink
          to="/login"
          className="text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100 px-3"
        >
          login
        </NavLink>
        <NavLink
          to="/sign"
          className="px-12 text-gray-300 cursor-pointer hover:text-teal-400 transition delay-100"
        >
          sign up
        </NavLink>
      </ul>
    </div>
  </nav>
  );
}
