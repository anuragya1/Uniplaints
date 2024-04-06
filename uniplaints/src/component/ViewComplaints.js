import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ViewComplaints() {
  useEffect(()=>{
    console.log("rendered")
  })
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('UserId');
  const password = urlParams.get('password');
  const LoginData={
    userName:username,
    passwrd:password
  }
  console.log(username);
  console.log(password);
  const navigate=useNavigate();
  const getTologin=()=>{
    navigate('/Login');
  }
  
  const [userData,setUserdata]=useState(null);
  const[name,setName]=useState('--');
  const[description,setDescription]=useState('--');
  const[age,setAge]=useState('--');
  const[email,setEmail]=useState('--');
  const[isFetched,setIsFetched]=useState(false);
    const getUsers = async () => {
  
    try {
      const response = await fetch('http://localhost:3001/viewComplaints',{method:"POST",headers:{"Content-Type":'application/json'},body:JSON.stringify(LoginData)});
      if (response.ok) {
      const data =   await response.json();
      setUserdata(data);
      if(data!=null)
      setIsFetched(true);
      console.log(data)
        
      } else {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    if(isFetched){  
       setName(userData.name)
       setDescription(userData.description)
       setAge(userData.Age)
       setEmail(userData.email)
    }
  };
    
  return (
    <div className=' grid place-content-center'>
      
      <p>here are your submitted complaints </p>
      <h1 className='font-mono font-extrabold'>hello {name?name:"data not fetched yet"} </h1>
      <p>{email?email:"data not fetched yet"}</p>
      <p>{age?age:"data not fetched yet"}</p>
      <p>{description?description:"data not fetched yet"}</p>
      
      <button onClick={getTologin} className='content-center bg-blue-700e-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded '>go to login</button>
      <button onClick={getUsers} className='bg-lime-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded '>view complaints</button>
        
    </div>
  )
}
