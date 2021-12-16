import React, { useEffect,useState } from 'react';
import './FlipableEvent.css';




const FlipableEvent = ({Event}) =>{
    console.log(Event.Poster);
    return(
        <div className="Flip-Wrapper"  id="Flip-Wrapper" >
            <div className="Flip-Container">
            <div className="Flip-Front-Wrapper"  id="Flip-Front-Wrapper" >
                <img  className="Flip-Front-Image" src={Event.Poster} alt="" />
            </div>
            <div className="Flip-Back-Wrapper"  id="Flip-Back-Wrapper" >
                <div className="Flip-Back-Title">
                    {Event.Title}
                </div>
                <div className="Flip-Back-Details">
                    <span className="Event-Date-Time Flip-Event-Text">
          {Event.Date + ' ' + Event.Time}   
        </span>
        <span className="Event-Venue Flip-Event-Text">{Event.Venue}</span>
        <span className="Event-Contact-US Flip-Event-Text">{Event.ContactDetails}</span>
        </div>
      
        <div className="Event-Description-Holder Flip-Description-Holder">
        <p className="Event-Description Flip-Description">{Event.Description}</p>
      </div>
      </div>
      </div>
        </div>
    )
}

export default FlipableEvent;