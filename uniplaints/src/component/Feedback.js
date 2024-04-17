import React, { useState } from 'react';

export default function Feedback() {
  const [thankyou, setThankyou] = useState(false);
  const userId = localStorage.getItem('userId');

  const handleSubmit = async () => {
    const feedback = {
      userId: userId,
      name: document.getElementById('fullName').value,
      Email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    try {
      const feed = await fetch("http://localhost:3001/feedback", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      });

      if (feed.ok) {
        setThankyou("Thank you for your feedback. This will help us improve and eventually overcome our shortcomings. Take care.");
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
        <h2 className="text-white font-bold text-3xl text-center mb-6">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-white font-serif mb-1">Full Name:</label>
          <input type="text" id="fullName" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-serif mb-1">Email:</label>
          <input type="email" id="email" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-serif mb-1">Leave us a few words:</label>
          <textarea id="message" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" rows="4"></textarea>
        </div>
        <div className='flex justify-center my-3'>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
          <div className='text-white mt-2'>
            {thankyou ? <p className="text-center text-green-500 font-semibold">{thankyou}</p> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}
