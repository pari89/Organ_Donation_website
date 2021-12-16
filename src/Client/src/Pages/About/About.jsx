import React from 'react'
import './About.css';
import Images from '../../Images/Images';
import ImageCard from '../../Components/Cards/About-Cards';
import Compass from '../../Images/Compass.png';

const About = () => {
return(
 <div className="About-Wrapper">
     <div className="About-Content">
     <div className="Navigation-Wrapper">
     <img className="About-Header-Image"src={Compass} alt="broken" />
         <span className="Navigation-Text">Where to Navigate<br/> to?</span>
         
     </div>
    <div className="About-Nav-Items-Wrapper">
        <div className="About-Nav-Items">
            <ImageCard title={"Home"}/>
            <ImageCard title={"Community"}/>
            <ImageCard title={"Form"}/>
            <ImageCard/>
            <ImageCard/>
        </div>
    </div>
    
 </div>
 </div>
);

}

export default About;