import React from 'react'
import './User.css';
import UserHomePic from '../../Images/ImageFromPc/User-Home-Pic.png';
import StoryIllustration from '../../Images/ImageFromPc/Ink-Feather.jpg';
import crypto from 'crypto';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import { NavLink } from 'react-router-dom';
const User = ()  =>  {

  const [yArr,setyArr] = useState([1,2]);
  const [UserStatus, setUserStatus] = useState('Not Auth');
  const urlparams = useParams();
  console.log(urlparams);
  const UserName=urlparams.UserName;
 
    useEffect(async ()=>{
        
         const AccessToken = localStorage.getItem(`User ${UserName}`);
         console.log("fetched from local->")
           console.log(AccessToken);
        await axios.get('http://localhost:5000/auth/TokenValidate', {headers:{"authorization" : `Bearer ${AccessToken}`  }}).then(Response=>{
            
          if(Response.data.resval === "TokenVerified")
          { 
              setUserStatus("Auth");
               console.log("Token Verified");
          }
          else{
            window.location.replace(`/auth/User/Login`);
          }
        console.log(Response.data); 
        
     }).catch(error=>{
        console.log(error);
     })
       },[JSON.stringify(yArr)]);











  const UserStoryStatus = "Not Written";
  const UserEventStatus = "Not Hosted";
  const secretstr = 'Organ-Dontion-Website';
  let siginature = crypto.createHmac ('sha256', secretstr);

  const secret=JSON.stringify(siginature);

      Buffer.from(secret).toString('base64');

  console.log(secret);

  

if(UserStatus==="Auth"){
return(
    <div className="User-Home-Wrapper">
        <div className="User-Details-Wrapper">
            <div className="User-Home-Details-Container">
            <img src="" alt="" className="User-Avatar" />
        <span className="User-Home-Details User-UserName">{UserName}</span>
        <span className="User-Home-Details">{UserName}</span>
        <span className="User-Home-Details"></span>
        </div>
        <div className="Contribution-Details">
        <div className="Flip-Story-Wrapper">
                <div className="Flip-Story-Container">
        <div className="Flip-Story-Front-Wrapper">
            <img src={StoryIllustration} alt="" className="Flipable-Story-Pic" />
            </div>
        <div className="Flip-Story-Back-Wrapper">
           {  UserStoryStatus==="Not Written"? 
           <span className="User-Story-Status">You Haven't  Published Any Organ Story Yet</span> :
           <span className="User-Story-Status">Your Organ Has a  Story of It's Own!</span>
        }
        <div className="User-Button-Holder">
        {
            UserStoryStatus==="Not Written"?
            <NavLink exact to="/Stories/addStory" className="User-Story-Card-Buttons color1" onClick={()=>{
                window.location.href=""
            }}>
                <span className="User-Story-Status" >Write Story</span> 
            </NavLink>
            :
            <NavLink exact to="/Stories/addStory" className="User-Story-Card-Buttons color1">
                <span className="User-Story-Status" >Write Story</span> 
            </NavLink>
            
        }
        <NavLink exact to="/Stories" className="User-Story-Card-Buttons color2">
                <span className="User-Story-Status" >View Stories</span> 
            </NavLink>
        </div>
        </div>
        </div>
        </div>

        <div className="Flip-Story-Wrapper Flip-Event-Extra-Wrapper">
                <div className="Flip-Story-Container">
        <div className="Flip-Story-Front-Wrapper">
            <img src="https://www.bioeconomy-library.eu/wp-content/uploads/2019/09/icon_PublicAwarenessRaising.jpg" alt="" className="Flipable-Story-Pic" />
            </div>
        <div className="Flip-Story-Back-Wrapper Flip-Event-Extra-Back">
           {  UserStoryStatus==="Not Written"? 
           <span className="User-Story-Status Flip-Event-Extra-Text">You Haven't  Hosted any Organ Event Yet</span> :
           <span className="User-Story-Status Flip-Event-Extra-Text">You Have Hosted Events on Organ Donation!!</span>
        }
        <div className="User-Button-Holder">
        {
            UserStoryStatus==="Not Written"?
            <NavLink exact to="/Events/addEvent" className="User-Story-Card-Buttons color1">
                <span className="User-Story-Status" >Host Event</span> 
            </NavLink>
            :
            <NavLink exact to="/Events" className="User-Story-Card-Buttons color1">
                <span className="User-Story-Status" >View Event</span> 
            </NavLink>
        }
        <NavLink exact to="/Events" className="User-Story-Card-Buttons color2">
                <span className="User-Story-Status" >View Events</span> 
            </NavLink>
        </div>
        </div>
        </div>
        </div>


        </div>
        </div>
        <div className="User-Home-Side-Pic">
            <img src={UserHomePic} alt="" />
        </div>
    </div>
       
)
}
else{
    return(
        <div className="Return-SOmething"></div>
    )
}
}

export default User;