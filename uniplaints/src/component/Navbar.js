import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <nav className="bg-purple-800 py-4">
      <div className="flex justify-between items-center mx-4 sm:mx-auto">
        <h1 className="text-orange-400 text-xl font-bold">Uniplaints</h1>
        <ul className="flex space-x-7 justify-end">
          <NavLink to='/' className="text-orange-400 cursor-pointer hover:text-fuchsia-200 transition delay-100">Home</NavLink>
          <NavLink to='/submitForm' className="text-orange-400 cursor-pointer hover:text-fuchsia-200 transition delay-100">Submit Complaints</NavLink>
          <NavLink to='/ViewComplaint' className="text-orange-400 cursor-pointer hover:text-fuchsia-200 transition delay-100">View Complaints</NavLink>
          <NavLink to='Contact' className="text-orange-400 cursor-pointer hover:text-fuchsia-200 transition delay-100 px-3">Contact Us</NavLink>
          <NavLink to='/login' className="text-orange-400 cursor-pointer hover:text-fuchsia-200 transition delay-100 px-3">login</NavLink>
          <NavLink to='/sign' className="text-orange-400 cursor-pointer hover:text-fuchsia-200 transition delay-100 px-3">sign up</NavLink>
        </ul>
      </div>
    </nav>
  );
}
