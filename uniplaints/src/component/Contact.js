import React from 'react'

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
  <div className="bg-gray-800 bg-opacity-50 rounded-lg mt-[-3rem] p-8 w-96">
    <h2 className="text-white font-bold text-3xl text-center mb-6">Contact Us</h2>
    <div className="mb-4">
      <label for="fullName" className="block text-white  font-serif mb-1">Full Name:</label>
      <input type="text" id="fullName" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
    </div>
    <div className="mb-4">
      <label for="email" className="block text-white  font-serif mb-1">Email:</label>
      <input type="email" id="email" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" />
    </div>
    <div className="mb-4">
      <label for="message" className="block text-white  font-serif mb-1">Leave us a few words:</label>
      <textarea id="message" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none" rows="4"></textarea>
    </div>
    <div className='flex justify-center my-3'>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">Submit</button>
    </div>
    
  </div>
</div>

  )
}
