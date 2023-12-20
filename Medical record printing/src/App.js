
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./homepage-main/homepage-main/home";
import LogIN from "./LoginPage/Login";
import Registration from "./registrationpage/Registration";
import Pform2 from "./patientmedicalrecord/patientrecord";
import Password from "./forgotpassword/password";
import About2 from "./about us/about";
function App() {
return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<LogIN/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/patientrecord' element={<Pform2/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/about' element={<About2/>}/>
    </Routes>
    </BrowserRouter>
    
);
}

export default App;
