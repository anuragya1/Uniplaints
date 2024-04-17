import Navbar from "./component/Navbar";
import LandingPage from "./component/main";
import {  Routes, Route } from 'react-router-dom';
import  Form  from "./component/Form";
import Feedback from "./component/Feedback";
import ViewComplaints from "./component/ViewComplaints";
import UserLogin from "./component/UserLogin";
import UserSignup from "./component/UserSignup";
import GetLocation from "./component/GetLocation";
import UserPanel from "./component/UserPanel";



export default function App() {
  return (<>
  <div className="scroll-smooth">
 <Navbar/>
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/submitForm" element={<Form/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/ViewComplaint" element={<ViewComplaints/>}></Route>
    <Route path="/sign" element={<UserSignup/>}></Route>
    <Route path="/login" element={<UserLogin/>}></Route>
    <Route path="/userpanel" element={<UserPanel/>}></Route>
    </Routes>
    </div>
     
    </>
  )
}