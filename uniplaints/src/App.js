import Navbar from "./component/Navbar";
import LandingPage from "./component/main";
import {  Routes, Route } from 'react-router-dom';
import  Form  from "./component/Form";

import ViewComplaints from "./component/ViewComplaints";
import UserLogin from "./component/UserLogin";
import UserSignup from "./component/UserSignup";
import GetLocation from "./component/GetLocation";
import UserPanel from "./component/UserPanel";
import ExecutivePanel from "./component/ExecutivePanel";
import Confirmation from "./component/Confirmation";

export default function App() {
  return (<>
  <div className="scroll-smooth">
 <Navbar/>
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/submitForm" element={<Form/>}></Route>
    <Route path="/confirmation" element={<Confirmation/>}></Route>
    <Route path="/ViewComplaint" element={<ViewComplaints/>}></Route>
    <Route path="/sign" element={<UserSignup/>}></Route>
    <Route path="/login" element={<UserLogin/>}></Route>
    <Route path="/userpanel" element={<UserPanel/>}></Route>
    <Route path="/Exepanel" element={<ExecutivePanel/>}></Route>
    </Routes>
    </div>
     
    </>
  )
}