import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ViewComp from './ViewComp';
           
const ExecutivePanel = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [filterType, setFilterType] = useState('All'); 

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-52 flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-100">Welcome, Exe</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Logout
          </button>
        </div>
        
        <div className="mx-52 bg-gray-800 rounded-lg shadow-lg p-8 animate__animated animate__zoomIn ">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Complaints</h2>
          <div className="mb-4">
            <label htmlFor="filterSelect" className="text-gray-300 mr-2">Filter by:</label>
            <select  id="filterSelect" value={filterType} onChange={(e) => setFilterType(e.target.value)}  className="bg-green-300 border text-black border-green-600 rounded px-4 py-2 focus:outline-none">
              <option value="All">All</option>
              <option value="Resolved">Resolved</option>
              <option value="Unresolved">Unresolved</option>
              <option value="Objection">Objection</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Roads">Roads</option>
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="Waste Management">Waste Management</option>
            </select>
          </div>
          <ViewComp filterType={filterType} />
        </div>
      </div>
    </div>
  );
};

export default ExecutivePanel;
