import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function UserSignup() {
  const navigate=useNavigate();
   const handleSigin=async ()=>{
    const userData={
      user:document.getElementById('username').value,
      email:document.getElementById('email').value,
      password:document.getElementById('password').value
    }
    try{
      const sign=await fetch('http://localhost:3001/sign',{method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(userData),
    });
    if(sign.ok){
      console.log("data saved sucessfully");
         navigate('/login')
    }
    else{
      console.log("an error has occured while signin")
    }
    }
    catch(err){
      if(err){
        console.log("ERROR=",err);
      }
    }
   }
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-xs">
    <h1 className="text-3xl font-bold text-center mb-8">User Signup</h1>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Username
    </label>
    <input
     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Username"
      />
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
      <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
       placeholder="Email"
            />
          </div>
      <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
       Password
       </label>
       <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
        type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSigin}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
