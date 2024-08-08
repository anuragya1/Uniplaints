import React, { useState,useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import UserSignUpDetails from './UserSignup';
  import useLocation from './GetLocation';
export default function Form() {
  const navigate = useNavigate();
  let [formStatus, setformStatus] = useState(null);
  const [user, SetUser] = useState(0);
  const [complaintType, setComplaintType] = useState('');
  const{latitude,longitude}=useLocation();
   const [complaintData,setComplaintData]=useState(null);
           
        
        
  const handleSubmit = async () => {
    const formData = {
      userId:localStorage.getItem('userId'),
      password:localStorage.getItem('password'),
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      age: document.getElementById('age').value,
      phoneNo: document.getElementById('PhoneNo').value,
      
      complaintType: complaintType,
    };
    
    // Add the subparts based on the complaint type
    if (complaintType === 'Electricity') {
      formData.electricityIssue = document.getElementById('electricityIssue').value;
    }
    
    if (complaintType === 'Water') {
      formData.waterIssue = document.getElementById('WaterIssue').value;
      formData.contamination = document.getElementById('contamination').value;
      formData.image = document.getElementById('image').files[0];
    }
    
    if (complaintType === 'Roads') {
      formData.roadIssue = document.getElementById('roadIssue').value;
      formData.location = document.getElementById('location').value;
      formData.severity = document.getElementById('severity').value;
      formData.image = document.getElementById('image').files[0];
    }
    
    if (complaintType === 'Healthcare') {
      formData.healthIssue = document.getElementById('healthIssue').value;
      formData.symptoms = document.getElementById('symptoms').value;
      formData.medicalHistory = document.getElementById('medicalHistory').value;
      formData.medications = document.getElementById('medications').value;
      formData.allergies = document.getElementById('allergies').value;
    }
    
    if (complaintType === 'Waste Management') {
      formData.issue = document.getElementById('Issue').value;
      formData.wasteType = document.getElementById('WasteType').value;
      formData.description = document.getElementById('Description').value;
      formData.dateNoticed = document.getElementById('DateNoticed').value;
      formData.recurring = document.querySelector('input[name="Recurring"]:checked')?.value;
    }


    try {
      const response = await fetch('https://backen-c9mc6rw6y-anurags-projects-dc4e4a37.vercel.app/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setformStatus(true);
        redirect("/submitForm")
        console.log('Form submitted successfully');
      } else {
        setformStatus(false);
        console.error('Form submission failed');
      }

    } catch (error) {
      console.error('Error:', error);
    }

  };
  const formSubmitted = () => {
    let form;
    if (formStatus) {
      form = "Form submitted successfully and you will recieve the email with assistent details shortly ";
    }
    else if (formStatus === false) {
      form = "Theres a problem that has occured. open console for more details";
    }
    else
      form = "";
    return (
      <>
        <h1 style={{ color: "white" }}>{form}</h1>
      </>
    )
  }

  return (<>
     {console.log(latitude,longitude)}
    <div className="bg-gradient-to-r from-gray-900 to-teal-500 min-w-96  flex justify-center items-center">
      <div className="bg-gray-800 bg-opacity-50 rounded-lg mt-2 p-8 w-4/5">
        <h2 className="text-white font-bold text-3xl text-center mb-6">Complaint Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-mono mb-1">Full Name:</label>
          <input type="text" id="name" className="block text-black bg-gray-200 border w-1/3 border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-white font-mono mb-1">Age:</label>
          <input type="number" id="age" className="block  text-black w-28  border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className='mb-4'>
          <label htmlFor='address' className='block text-white font-mono mb-1'>
            address
          </label>
          <textarea id='address' placeholder="enter your full address" className='bg-gray-200 border block w-full text-black border-gray-300 rounded px-4 py-2' rows='4'/>
        </div>
        <div className="mb-4">
          <label htmlFor="PhoneNo" className="block text-white font-mono mb-1">Phone No:</label>
          <input type="text" id="PhoneNo" className="block w-1/3 bg-gray-200 border text-black border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-mono mb-1">Email:</label>
          <input type="email" id="email" className="block w-full bg-gray-200 border text-black border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="complaintType" className="block text-white font-mono mb-1">Complaint Type:</label>
          <select id="complaintType" value={complaintType} onChange={(e) => setComplaintType(e.target.value)} className="block w-full bg-gray-200 border text-black border-gray-300 rounded px-4 py-2">
            <option value={""}>Select</option>
            <option value={"Electricity"}>Electricity</option>
            <option value={"Water"}>Water</option>
            <option value={"Roads"}>Roads</option>
            <option value={"Healthcare"}>Healthcare</option>

            <option value={"Waste Management"}>Waste Management</option>

          </select>
        </div>

        {complaintType === 'Electricity' && (
          <div className="mb-4">
            <label htmlFor="electricityIssue" className="block text-white font-mono mb-1">Electricity Issue:</label>
            <textarea id="electricityIssue" className="block w-full bg-gray-200 border text-black border-gray-300 rounded px-4 py-2" placeholder="Describe the electricity issue" rows="4"></textarea>
          </div>
        )}
        {/* {below is for water related complaints} */}
        {complaintType === 'Water' && (
          <div className="mb-4">
            <label htmlFor="WaterIssue" className="block text-white font-mono mb-1">Water Issue:</label>
            <textarea id="WaterIssue" className="block w-full bg-gray-200 border text-black border-gray-300 rounded px-4 py-2" placeholder="Describe the water issue" rows="4"></textarea>
            <div className='mb-4'>
              <label htmlFor='contamination' className='block text-white font-mono mb-1'>Contaminaton level:</label>
              <select id="contamination" className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
                <option value={"low level"}>low level</option>
                <option value={"medium level"}>medium level</option>
                <option value={"high level"}>high level</option>
              </select>
             
            </div>
          </div>
        )}
        {/* {below is for roads related complaints} */}
        {complaintType === 'Roads' && (
          <div>
            <div className="mb-4">
              <label htmlFor="roadIssue" className="block text-white font-semibold mb-2">Road Issue:</label>
              <textarea id="roadIssue"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
                placeholder="Describe the road issue"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-white font-semibold mb-2">Location:</label>
              <input type="text"
                id="location"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py focus:border-blue-500"
                placeholder="Enter the location of the road issue"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="severity" className="block text-white font-semibold mb-2">Severity:</label>
              <select id="severity"
                className="block w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black  focus:border-blue-500"
                required
              >
                <option value="">Select severity</option>
                <option value="Minor">Minor</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
              </select>
            </div>
           
          </div>

        )}
        {/* {below is for healthcare related complaints} */}
        {complaintType === 'Healthcare' && (
          <div>
            <div className="mb-4">
              <label htmlFor="healthIssue" className="block text-white font-semibold mb-2">Health Issue:</label>
              <textarea id="healthIssue"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
                placeholder="Describe the health issue"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="symptoms" className="block text-white font-semibold mb-2">Symptoms:</label>
              <textarea id="symptoms"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
                placeholder="Describe any symptoms you are experiencing"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="medicalHistory" className="block  text-white font-semibold mb-2">Medical History:</label>
              <textarea id="medicalHistory"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
                placeholder="Briefly describe your medical history including any pre-existing conditions, surgeries, or chronic illnesses"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="medications" className="block text-white font-semibold mb-2">Current Medications:</label>
              <textarea id="medications"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
                placeholder="List any medications you are currently taking, including dosage and frequency"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="allergies" className="block text-white font-semibold mb-2">Allergies:</label>
              <textarea id="allergies"
                className="block w-full bg-gray-100 border text-black border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
                placeholder="List any allergies you have, including medications, foods, or other substances"
                rows="4"
              ></textarea>
            </div>
          </div>

        )}

        {/* {below is for waste management related complaints} */}
        {complaintType === 'Waste Management' && (
          <div>
            <div className="mb-4">
              <label htmlFor="Issue" className="block text-white font-mono mb-1">Issue:</label>
              <textarea id="Issue" className="block w-full text-black bg-gray-200 border border-gray-300 rounded px-4 py-2" placeholder="Describe the issue" rows="4"></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="WasteType" className="block  text-white font-mono mb-1">Type of Waste:</label>
              <select id="WasteType" className="block w-full text-black bg-gray-200 border border-gray-300 rounded px-4 py-2">
                <option value="">Select waste type</option>
                <option value="Household">Household Waste</option>
                <option value="Industrial">Industrial Waste</option>
                <option value="Hazardous">Hazardous Waste</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="Description" className="block text-white font-mono mb-1">Description:</label>
              <textarea id="Description" className="block w-full text-black bg-gray-200 border border-gray-300 rounded px-4 py-2" placeholder="Describe the problem or complaint" rows="4"></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="DateNoticed" className="block text-white font-mono mb-1">Date Noticed:</label>
              <input type="date" id="DateNoticed" className="block w-full text-black bg-gray-200 border border-gray-300 rounded px-4 py-2" />
            </div>

            <div className="mb-4">
              <label htmlFor="Recurring" className="block text-white font-mono mb-1">Recurring Problem:</label>
              <input type="radio" id="RecurringYes" name="Recurring" value="Yes" />
              <label htmlFor="RecurringYes" class="text-white">Yes</label>
              <input type="radio" id="RecurringNo" name="Recurring" value="No" />
              <label htmlFor="RecurringNo" class="text-white">No</label>
            </div>
          </div>
        )}

        <div className='flex justify-center my-3'>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">Submit</button>
        </div>
        <div>{formSubmitted()}</div>
        
      </div>
    </div>
  </>
  );
}
