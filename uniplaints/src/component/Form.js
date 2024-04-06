import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSignUpDetails from './UserSignup';

export default function Form() {
  const navigate = useNavigate();
  let [formStatus, setformStatus] = useState(null);
  const [user, SetUser] = useState(0);
      const [form,SetForm]=useState(null);
      const formValidator=()=>{
        const data={
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          PassoWord: document.getElementById('Password').value,
          age: document.getElementById('age').value,
          phoneNo: document.getElementById('PhoneNo').value,
          description: document.getElementById('description').value,
        }
       
      }
  const handleSubmit = async () => {
       if(!form) {alert('There are some errors in the form and are highlighted');return};
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      PassoWord: document.getElementById('Password').value,
      age: document.getElementById('age').value,
      phoneNo: document.getElementById('PhoneNo').value,
      description: document.getElementById('description').value,
    };

   
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setformStatus(true);
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
        <h1 style={{ color: "red" }}>{form}</h1>
      </>
    )
  }

  return (<>

    <div className="bg-gradient-to-r from-orange-400  to-blue-600 min-w-96  flex justify-center items-center">
      <div className="bg-gray-800 bg-opacity-50 rounded-lg mt-2 p-8 w-96">
        <h2 className="text-white font-bold text-3xl text-center mb-6">Complaint Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-mono mb-1">Full Name:</label>
          <input type="text" id="name" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-white font-mono mb-1">Age:</label>
          <input type="number" id="age" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="PhoneNo" className="block text-white font-mono mb-1">Phone No:</label>
          <input type="number" id="PhoneNo" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-mono mb-1">Email:</label>
          <input type="email" id="email" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="Password" className="block text-white font-mono mb-1">Password:</label>
          <input type="passoword" id="Password" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white font-mono mb-1">Description:</label>
          <textarea id="description" className="block w-full bg-gray-200 border border-gray-300 rounded px-4 py-2" placeholder='describe your problem briefly' rows="4"></textarea>
        </div>
        <div className='flex justify-center my-3'>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">Submit</button>
        </div>
        <div>{formSubmitted()}</div>
        <div className='flex justify-center my-3'>
          <button onClick={() => navigate(-1)} className="bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded ">previous Page</button>
        </div>
      </div>
    </div>

  </>
  );
}
