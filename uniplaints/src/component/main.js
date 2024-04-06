import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [signin, setsignin] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setsignin(true);
  }
  const getTempData = async () => {
    try {
      let data = await fetch('http://localhost:3001/');
      if (data.ok) {
        console.log(data);
      } else {
        console.log("Error:", data.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Resolve Your Complaints Hassle-Free with Uniplaints</h1>
        <p className="text-xl text-center mb-8">A user-friendly platform to submit and resolve complaints efficiently, backed by personalized assistance from our dedicated team.</p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 ">
          <h2 className="text-2xl font-bold mb-4">Welcome to Uniplaints</h2>
          <p className="text-lg mb-6">Say goodbye to frustration and uncertainty  we're here to provide you with expert guidance and support every step of the way.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-50 rounded-lg shadow delay-150 duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Key Features</h3>
              <ul className="list-disc list-inside">
                <li>Effortless Complaint Submission</li>
                <li>Personalized Assistance</li>
                <li>Secure and Confidential</li>
                <li>Transparent Process</li>
                <li>Expert Guidance</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow delay-150 duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Why Choose Us</h3>
              <ul className="list-disc list-inside">
                <li>Dedicated Support Team</li>
                <li>Efficiency and Effectiveness</li>
                <li>Customer-Centric Approach</li>
                <li>Proven Track Record</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('submitForm')} onClickCapture={() => handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"> Submit Your Complaint</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 delay-150 duration-300 hover:shadow-2xl ">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="mb-4">
            <p className="italic text-gray-600 mb-2">"I was amazed by the level of support and assistance I received from the team at Uniplaints. They helped me resolve my complaint quickly and efficiently." - Ramesh D roger</p>
            <p className="italic text-gray-600">"I highly recommend Uniplaints to anyone looking for reliable assistance in resolving complaints. The team's dedication and expertise made all the difference." - Aizen sosuke</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
