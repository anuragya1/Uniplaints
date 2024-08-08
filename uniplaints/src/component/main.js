import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [signin, setsignin] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setsignin(true);
  }
  const [Totalcomplaints, setTotalComplaints] = useState(null);
  const [TotalcompResolved, setTotalcompResolved] = useState(null);
  const getData = async () => {
    try {
      let response = await fetch('https://backen-kyumgdki0-anurags-projects-dc4e4a37.vercel.app/Data');
      if (response.ok) {
        const complaint = await response.json();
        setTotalComplaints(complaint.total);
        setTotalcompResolved(complaint.resolved);
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-center mb-4">Resolve Your Complaints Hassle-Free with Uniplaints</h1>
        <p className="text-xl text-center mb-8 font-light">A user-friendly platform to submit and resolve complaints efficiently, backed by personalized assistance from our dedicated team.</p>

        <div className="bg-gray-800 rounded-lg shadow-lg mx-40 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Welcome to Uniplaints</h2>
          <p className="text-lg mb-6 font-light">Say goodbye to frustration and uncertainty – we're here to provide you with expert guidance and support every step of the way.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-2 text-teal-400">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Effortless Complaint Submission</li>
                <li>Personalized Assistance</li>
                <li>Secure and Confidential</li>
                <li>Transparent Process</li>
                <li>Expert Guidance</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-2 text-teal-400">Why Choose Us</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Dedicated Support Team</li>
                <li>Efficiency and Effectiveness</li>
                <li>Customer-Centric Approach</li>
                <li>Proven Track Record</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('login')} onClickCapture={() => handleSubmit} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">login to view or submit a new complaint</button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mx-40 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-teal-400 ">Testimonials</h2>
          <div className="mb-4">
            <p className="italic text-gray-300 mb-2">"I was amazed by the level of support and assistance I received from the team at Uniplaints. They helped me resolve my complaint quickly and efficiently." - Ramesh D roger</p>
            <p className="italic text-gray-300">"I highly recommend Uniplaints to anyone looking for reliable assistance in resolving complaints. The team's dedication and expertise made all the difference." - Aizen sosuke</p>
          </div>
        </div>
      </div>
      {/* {current interactions with this site} */}
      <div className='shadow-lg rounded-lg mb-5 hover:shadow-2xl px-16 py-14 mx-20 w-auto text-4xl font-bold flex justify-center flex-wrap bg-gray-800'>
        <h1 className='text-teal-400'>Unveiling Accountability</h1>
        <h1 className='text-gray-100'>Tracking Total Complaints and Resolved Issues for Transparent Action!</h1>
      </div>
      <div className='flex mx-52 '>
        <div id="content" className='shadow rounded-lg hover:shadow-2xl text-xl font-semibold w-1/2 mb-4 px-20 py-14 mx-10 my-10 bg-gray-800 flex-wrap'>
          <p className='text-gray-300'>Discover the power of transparency. We've got all the stats you need:</p>
          <p className='text-gray-300'>Dive in, stay informed, and see how we're turning feedback into action!</p>
        </div>
        <div id="values" className=' mr-7 shadow rounded-lg text-4xl hover:shadow-2xl font-semibold w-1/2 px-16 mb-4 justify-center mx-10 py-14 my-10 bg-gray-800 flex-wrap'>
          <p className='text-gray-300'>Total complaints filed: <span className='text-teal-400'>{Totalcomplaints}</span></p>
          <p className='text-gray-300'>Total complaints resolved: <span className='text-teal-400'>{TotalcompResolved}</span></p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
