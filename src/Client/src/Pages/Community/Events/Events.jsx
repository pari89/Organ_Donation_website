import React, { useEffect,useState } from 'react';
import './Events.css'
import  EventComponent from '../../../Components/Event/Event';
import TestImage from '../../../Images/ImageFromPc/Community.png';
import axios from 'axios';
import FlipableEvent from '../../../Components/FlipableEvent/FlipableEvent';

const Events = () => {
    const [EventsData,setEventsData] = useState([]);
  useEffect(async ()=>{
   await axios.get('http://localhost:5000/Events/').
    then(response=>{
      setEventsData(response.data);
      console.log("Events Data fetched into events page");
      console.log(EventsData);

    }).catch(error=>{
      console.log("Error while fetching events data into events page");
      console.log(error.message);
    })
  },[]);
    const testDescription ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem aspernatur voluptatibus ab, ad assumenda alias, explicabo tempore neque facere quia praesentium aliquam odio dolorum officia perferendis temporibus vel corrupti?"

    return(
        <div className="Stories-Wrapper Events-Wrapper">
        <div className="Event-Header">
            <span className="Event-Contact-Details">Hosting an Event? Let our Viewers Know!<br/> Contact us @</span>
    <img className="Event-Header-Image" src={TestImage} alt="broken" />
        </div>
        <div className="Event-Content-Holder">
         <div className="Events-Container">
           
           {
             EventsData.map((Event,key)=>{
               return(
               <FlipableEvent Event={Event}  key={key} />
               )
             })
           }
         </div>
          <div className="New-Events-Wrapper">
          </div>
        </div>
        </div>
        
    )
}

export default Events;