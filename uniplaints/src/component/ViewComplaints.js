import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Viewcomplaints = (UserCredentials) => {
  console.log("view complaint active");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://backend-epuhye6ms-anurags-projects-dc4e4a37.vercel.app/viewComplaints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(UserCredentials),
        });

        if (response.ok) {
          const data = await response.json();
          setComplaints(data);
          //window.location.reload();
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

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8"></div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 animate__animated animate__zoomIn">
          {complaints.length > 0 ? (
            complaints.map((complaint, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold mb-2">{complaint.complaintType}</h3>
                <p className="text-gray-300">Name: {complaint.name}</p>
                <p className="text-gray-300">Email: {complaint.email}</p>
                <p className="text-gray-300">Address: {complaint.address}</p>
                <p className="text-gray-300">Age: {complaint.age}</p>
                <p className="text-gray-300">Phone No: {complaint.phoneNo}</p>
                <p className="text-gray-400">Status: {complaint.isDone?"Resolved":"Not resolved yet"}</p>
                {complaint.isObjected?<p className='bg-red-700'>Objection:Yes</p>:<p className='bg-green-600'>Objection:No</p>}
                
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
              </div>
            ))
          ) : (
            <p>No complaints submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Viewcomplaints;
