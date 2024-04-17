import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import ViewComplaints from './ViewComplaints'; 

const UserPanel = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

    const userName = localStorage.getItem('userId');
    const password=localStorage.getItem('password');
    let Usercredentials={
      userId:userName,
      password:password
  }
   
 

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-100">Welcome, {userName}</h1>
          <button
             onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Logout
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 animate__animated animate__zoomIn">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Submit a New Complaint</h2>
          <button
             onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            {showForm ? 'Hide Form' : 'Show Form'}
          </button>
          {showForm && <Form />}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 animate__animated animate__zoomIn">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Your Complaints</h2>
          <ViewComplaints userName={userName} userpassword={password} />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;