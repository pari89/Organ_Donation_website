import React from "react";
import "./Story.css";
import {AiFillLike} from "react-icons/ai";
import { useState } from "react";
import { NavLink ,Route ,Routes } from "react-router-dom";
import CompleteStory from "../CompleteStory/CompleteStory";
import Organ_Info from "../../Pages/Organ-Info/Organ-Info";
import { CustomRoute_CompleteStory } from "../RedirectTo";



const Story = ({Story}) => {


  const [CurrentLikes, setCurrentLikes] = useState(0);
const Increment_Like = (CurrentLikes) => {
  // if this user didnt already like 
  //keep that code after creating login and authentication
setCurrentLikes(CurrentLikes+1);
}


const UserName= Story.UserName;
const StoryStatusx =  Story.Status;
  return (
    
    <div className={"Demo-Story-Wrapper" + (StoryStatusx === "Visible"? " Visible" : " Hidden" )}>
       
      <NavLink to = {`/Stories/${UserName}`} className="Demo-Story-Container" >
      <div className="Demo-Story-Title-Holder">
        <span className="Demo-Story-Title">{Story.Title}</span>
      </div>
      <div className="Demo-Story-Image-Holder">
        <img className="Demo-Story-Image" src={Story.Image} alt="broken" />
      </div>
      <div className="Demo-Story-Description-Holder">
        <p className="Demo-Story-Description">
          {Story.Description}
        </p>
      </div>
      </NavLink>
      </div>
    
    

    
   
    
  );
};

export default Story;
