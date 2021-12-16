import React from "react";
import "./Event.css";

const Event = ({Event}) => {

 
  window.addEventListener('load', ()=>{
    if(document.readyState==='complete'){
    const PosterHeight = document.getElementById('Event-Poster');
  if(PosterHeight!=null)
  {const ImageHeight = PosterHeight.clientWidth;
  console.log({ImageHeight});
   if(ImageHeight>650) { PosterHeight.style.width="550" }
}}});
  return (
    <div className="Event-Wrapper">
            <div className="Event-Name-Holder">
                
      <span className="Event-Name-Top">{Event.Title}</span>
      </div>
      <div className="Event-Row-Holder">
      <img className="Event-Poster"src={Event.Poster} id="Event-Poster" alt="Poster Not Available" />
      
      <div className="Event-Details">
      <span className="Event-Date-Time Event-Text">
          {Event.Date + ' ' + Event.Time}   
        </span>
        <span className="Event-Venue Event-Text">{Event.Venue}</span>
        <span className="Event-Contact-US Event-Text">{Event.ContactDetails}</span>
        </div>
        </div>
        <div className="Event-Description-Holder">
        <p className="Event-Description">{Event.Description}</p>
      </div>
    </div>
  );
};
export default Event;
