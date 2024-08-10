import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewComp = ({ filterType }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://backend-9o9cb0adn-anurags-projects-dc4e4a37.vercel.app/viewComp', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setComplaints(data);
          console.log("fetch user complaints", data);
        } else {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const setResolved = (email, name, type) => {
    const notify = {
      name: name,
      email: email,
      complaintType: type,
    }
    console.log(notify);
    const not = async () => {
      try {
        const response = await fetch('https://backend-9o9cb0adn-anurags-projects-dc4e4a37.vercel.app/notifyUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(notify)
        });

        if (response.ok) {
          alert("notification sent to user ");
        } else {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    not();
  }

  const filteredComplaints = complaints.filter(complaint => {
    if (filterType === 'All') {
      return true;
    } else if (filterType === 'Resolved') {
      return complaint.isDone;
    } else if (filterType === 'Unresolved') {
      return !complaint.isDone;
    } else if (filterType === 'Objection') {
      return complaint.isObjected;
    } else if (filterType === 'Healthcare') {
      return complaint.complaintType === 'Healthcare';
    } else if (filterType === 'Roads') {
      return complaint.complaintType === 'Roads';
    } else if (filterType === 'Electricity') {
      return complaint.complaintType === 'Electricity';
    } else if (filterType === 'Water') {
      return complaint.complaintType === 'Water';
    } else if (filterType === 'Waste-Management') {
      return complaint.complaintType === 'Waste-Management';
    }

  });

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8"></div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 animate__animated animate__zoomIn  ">
          {filteredComplaints.length > 0 ? (
            filteredComplaints.map((complaint, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 mb-4">
                <h3 id='complaintType' className="text-lg font-bold mb-2">{complaint.complaintType}</h3>
                <p id='name' className="text-gray-300">Name: {complaint.name}</p>
                <p id='email' className="text-gray-300">Email: {complaint.email}</p>
                <p className="text-gray-300">Address: {complaint.address}</p>
                <p className="text-gray-300">Age: {complaint.age}</p>
                <p className="text-gray-300">Phone No: {complaint.phoneNo}</p>
                <p className="text-gray-400">Status: {complaint.isDone ? "Resolved" : "Not resolved yet"}</p>

                {complaint.electricityIssue && (
                  <p className="text-gray-300">Electricity Issue: {complaint.electricityIssue}</p>
                )}
                {complaint.waterIssue && (
                  <div>
                    <p className="text-gray-300">Water Issue: {complaint.waterIssue}</p>
                    <p className="text-gray-300">Contamination Level: {complaint.contamination}</p>
                    {complaint.image && <img src={`data:image/jpeg;base64,${complaint.image}`} alt="Uploaded" />}
                  </div>
                )}
                {complaint.roadIssue && (
                  <div>
                    <p className="text-gray-300">Road Issue: {complaint.roadIssue}</p>
                    <p className="text-gray-300">Location: {complaint.location}</p>
                    <p className="text-gray-300">Severity: {complaint.severity}</p>
                    {complaint.image && <img src={`data:image/jpeg;base64,${complaint.image}`} alt="Uploaded" />}
                  </div>
                )}
                {complaint.healthIssue && (
                  <div>
                    <p className="text-gray-300">Health Issue: {complaint.healthIssue}</p>
                    <p className="text-gray-300">Symptoms: {complaint.symptoms}</p>
                    <p className="text-gray-300">Medical History: {complaint.medicalHistory}</p>
                    <p className="text-gray-300">Medications: {complaint.medications}</p>
                    <p className="text-gray-300">Allergies: {complaint.allergies}</p>
                  </div>
                )}
                {complaint.issue && (
                  <div>
                    <p className="text-gray-300">Issue: {complaint.issue}</p>
                    <p className="text-gray-300">Waste Type: {complaint.wasteType}</p>
                    <p className="text-gray-300">Description: {complaint.description}</p>
                    <p className="text-gray-300">Date Noticed: {complaint.dateNoticed}</p>
                    <p className="text-gray-300">Recurring: {complaint.recurring}</p>
                  </div>
                )}
                {(filterType === 'Unresolved' || filterType === 'Objection') && (
  <button className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded-md shadow-md transition duration-300" onClick={() => setResolved(complaint.email, complaint.name, complaint.complaintType)}>
    isDone
  </button>
)}
              </div>
            ))
          ) : (
            <p>You deserve a Raise man !!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewComp;
