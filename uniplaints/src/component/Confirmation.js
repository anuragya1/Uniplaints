import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Confirmation() {
  const navigate=useNavigate();
   const handleSubmit = async () => {
    const feedback = {
      userId:document.getElementById('userid').value, 
      name: document.getElementById('fullName').value,
      Email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      IsDone:document.getElementById('isDone').value,
      complaintType:document.getElementById('complaintType').value
    };
    console.log(feedback);
    try {
      const feed = await fetch("https://backend-hug5hnrsy-anurags-projects-dc4e4a37.vercel.app/feedback", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      });

      if (feed.ok) {
        window.confirm("Thank you for your feedback. you can close this tab");
        navigate('/');
      } else {
        throw new Error(`Failed to submit feedback: ${feed.status} ${feed.statusText}`);
      }
    } catch (error) {
      console.error("An error has occurred:", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 bg-opacity-50 rounded-lg mt-[-3rem] p-8 w-96">
        <h2 className="text-white font-bold text-3xl text-center mb-6">confirmation</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-white font-serif mb-1">Full Name:</label>
          <input type="text" id="fullName" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="userid" className="block text-white font-serif mb-1">userId:</label>
          <input type="text" id="userid" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-serif mb-1">Email:</label>
          <input type="email" id="email" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="complaintType" className="block text-white font-serif mb-1">ComplaintType:</label>
          <input type="text" id="complaintType" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="isDone" className="block text-white font-serif mb-1">IsDone:</label>
          <input type="text" id="isDone" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-serif mb-1">Leave us a few words:</label>
          <textarea id="message" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" rows="4"></textarea>
        </div>
        <div className='flex justify-center my-3'>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
          <div className='text-white mt-2'>
           
          </div>
        </div>
      </div>
    </div>
  )
}
