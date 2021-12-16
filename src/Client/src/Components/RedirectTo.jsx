import React from 'react';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Image from '../Images/ImageFromPc/ODF8.png'


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { withRouter } from 'react-router';
import Statistics from '../Pages/Statistics/Statistics';
import { Pledge } from '../Pages/Pledge/Pledge';
import WhyDonate from '../Pages/Why-Donate/Why-Donate';
import Events from '../Pages/Community/Events/Events';
import Stories from '../Pages/Community/Stories/Stories';
import Community from '../Pages/Community/Community';
import Donate from '../Pages/Donate/Donate';
import OrganInfo from '../Pages/Organ-Info/Organ-Info';
import Organ_Info from '../Pages/Organ-Info/Organ-Info';
import CompleteStory from './CompleteStory/CompleteStory';

import test1 from '../Images/ImageFromPc/AncientScroll.png';
import Admin from '../Pages/Admin/Admin';
import User from '../Pages/User/User';
import UserLogin from '../Pages/Auth/UserLogin';
import AdminLogin from '../Pages/Auth/AdminLogin';
import StoryInput from './Cards/InputPage/StoryPage';
import EventInput from './Cards/InputPage/EventInput';
import UserSignUp from '../Pages/Auth/UserSignUp';
import AdminSignUp from '../Pages/Auth/AdminSignUp';




const Redirect = () =>{

    return (
   
    
     <Routes>
       <Route exact path="/" element={<Home/>} />
          
       <Route exact path="/About" element={<About/>} />

       <Route exact path="/About/Statistics" element={<Statistics/>} />

       <Route exact path="/Pledge" element={<Pledge/>} />

       <Route exact path="/About/Why-Donate" element={<WhyDonate/>} />

       <Route exact path="/About/Organ-Info" element={<Organ_Info/>} />
    
       <Route exact path="/Community" element={<Community/>} />

       <Route exact path="/Community/Events" element={<Events/>} />

       <Route exact path="/Community/Stories" element={<Stories/>} />

       <Route exact path="/Donate" element={<Donate/>} />

       <Route exact path = "/Admin/:UserName" element={<Admin/>}/>

       <Route exact path = "/user/:UserName" element={<User/>}/>

       <Route exact path = "/auth/User/Login" element={<UserLogin/>}/>

       <Route exact path = "/auth/Admin/Login" element={<AdminLogin/>}/>

       <Route exact path = "/auth/User/SignUp" element={<UserSignUp/>}/>

       <Route exact path = "/auth/Admin/SignUp" element={<AdminSignUp/>}/>

       <Route exact path = "/Stories/:UserName" element={<CompleteStory/>}/>

       


       <Route exact path="/:UserName" element={<Home/>} />
          
          <Route exact path="/About/:UserName" element={<About/>} />
   
          <Route exact path="/About/Statistics/:UserName" element={<Statistics/>} />
   
          <Route exact path="/Pledge/:UserName" element={<Pledge/>} />
   
          <Route exact path="/About/Why-Donate/:UserName" element={<WhyDonate/>} />
   
          <Route exact path="/About/Organ-Info/:UserName" element={<Organ_Info/>} />
       
          <Route exact path="/Community/:UserName" element={<Community/>} />
   
          <Route exact path="/Community/Events/:UserName" element={<Events/>} />
   
          <Route exact path="/Community/Stories/:UserName" element={<Stories/>} />
   
          <Route exact path="/Donate/:UserName" element={<Donate/>} />
   
          <Route exact path = "/Admin/:UserName" element={<Admin/>}/>
   
          <Route exact path = "/User/:UserName" element={<User/>}/>
   
          <Route exact path = "/auth/User/Login/:UserName" element={<UserLogin/>}/>
   
          <Route exact path = "/auth/Admin/Login/:UserName" element={<AdminLogin/>}/>
   
          <Route exact path = "/auth/User/SignUp/:UserName" element={<UserSignUp/>}/>
   
          <Route exact path = "/auth/Admin/SignUp/:UserName" element={<AdminSignUp/>}/>

          <Route exact path = "/Stories/:UserName" element={<CompleteStory/>}/>

          <Route exact path = "/Stories/addStory" element={<StoryInput/>}/>

          <Route exact path = "/events/addEvent" element={<EventInput/>}/>

     </Routes>
    
  
    );
}


const CustomRoute_CompleteStory = (Image,Title,Description) => {
  <Routes>
     <Route exact path = "Stories/:id" element={<CompleteStory Image={Image} Title={Title} Description={Description} />}/>
  </Routes>
}





export default Redirect;
export {CustomRoute_CompleteStory};