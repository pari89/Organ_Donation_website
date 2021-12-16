import React , {useState, useEffect} from 'react';
import StoryComponent from '../../../Components/Story/Story';
import './Stories.css'
import StoryImage from '../../../Images/PledgeHeaderImage.jpg';
import NewStory from '../../../Components/Story/NewStory';
import axios from 'axios';
import { Result } from 'antd';


const Stories = () => {
    const testDescription ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem aspernatur voluptatibus ab, ad assumenda alias, explicabo tempore neque facere quia praesentium aliquam odio dolorum officia perferendis temporibus vel corrupti?"

    const [StoriesData , setStoriesData] =useState([]);
     useEffect(async ()=>{
        await axios.get('http://localhost:5000/Stories/')
        .then(response=>{
            setStoriesData(response.data);
            console.log("Stories Data fetched into Stories page");
            console.log(StoriesData);

             
          }).catch(error=>{
            console.log("Error while fetching Stories data into Stories page");
            console.log(error.message);
          })
     },[]);

    return(
        <div className="Stories-Wrapper">
        <div className="Stories-Header">
            <span className="Event-Contact-Details Stories-Contact-Details">Do you have an Organ Story to Share? <br/>Write to us @ </span>
    <img className="Stories-header-Image" src={StoryImage} alt="broken" />
        </div>
        <div className="Stories-Content-Holder">
         <div className="Stories-Container">
             {
                 StoriesData.map((Story,key)=>{
                     return(
                     <StoryComponent Story={Story} key={key} className={"" + (Story.Status === "Visible"? " Visible" : " Hidden" )}/>
                     )
                 })
             }


     </div>
        
        </div>
        </div>
        
    )
}

export default Stories;