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
      const sign=await fetch('https://backen-kyumgdki0-anurags-projects-dc4e4a37.vercel.app/sign',{method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(userData),
    });
    if(sign.ok){
      console.log("data saved sucessfully");
        alert("sign in successful directing you to login page")
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
    <div className=" bg-gradient-to-r from-gray-900 to-teal-500 flex justify-center items-center h-screen">
    <div className="w-full max-w-xs">
    <h1 className="text-3xl text-white text-center mb-8">User Signup</h1>
    <form className="bg-opacity-50 rounded-lg shadow-md  px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
   <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
      Username
    </label>
    <input
     className="shadow  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none "
      id="username"
      type="text"
      placeholder="Username"
      />
    </div>
    <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
      <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none "
      id="email"
      type="email"
       placeholder="Email"
            />
          </div>
      <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
       Password
       </label>
       <input
       className="shadow appearance-none border rounded w-full py-2 px-3  text-black mb-3 leading-tight focus:outline-none "
          id="password"
        type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
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
