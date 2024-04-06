import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
 
  const [value, setValue] = useState('password');
  const navigate=useNavigate(null);
  const seePassword = () => {
    setValue(value === 'password' ? 'text' : 'password');
  };

   
    
  const handleLogin = async () => {
    

    const loginData = {
      UserId: document.getElementById('UserID').value,
      password: document.getElementById('Password').value
    };
    
       
    console.log(loginData.UserId);

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        window.confirm("User confirmed");
        const dataString = new URLSearchParams(loginData);
        navigate(`/ViewComplaint?${dataString}`);
      } else {
        window.confirm("User does not exist. Sign in first.");
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex justify-center items-center">
       
      <div className="bg-gray-800 bg-opacity-50 rounded-lg mt-10 p-8 w-96">
        <h2 className="text-white font-bold text-3xl text-center mb-6">Login Page</h2>
        <div className="mb-4">
          <label htmlFor="UserID" className="block text-white font-serif mb-1">UserID:</label>
          <input type="text" id="UserID" required className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="Password" className="block text-white font-serif mb-1" >Password:</label>
          <input type={value} id="Password" required className=" block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
          <button id="PassWordBtn" onClick={seePassword} className="inline bg-orange-600 hover:bg-orange-400 border border-gray-300 rounded px-4 py-2 focus:outline-none">S</button>
        </div>
        <div className="flex justify-center my-3">
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>

      </div>
    </div>
  );
}
