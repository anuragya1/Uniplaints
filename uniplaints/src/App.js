import Navbar from "./component/Navbar";
import LandingPage from "./component/main";
import {  Routes, Route } from 'react-router-dom';
import  Form  from "./component/Form";
import Contact from "./component/Contact";
import ViewComplaints from "./component/ViewComplaints";
import UserLogin from "./component/UserLogin";
import UserSignup from "./component/UserSignup";
import GetLocation from "./component/GetLocation";




export default function App() {
  return (<>
 <Navbar/>
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/submitForm" element={<Form/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/ViewComplaint" element={<ViewComplaints/>}></Route>
    <Route path="/sign" element={<UserSignup/>}></Route>
    <Route path="/login" element={<UserLogin/>}></Route>
    
    </Routes>
    
    </>
  )
}