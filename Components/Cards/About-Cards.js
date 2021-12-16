import React from 'react'
import './About-Cards.css';
import { NavLink } from 'react-router-dom';

const ImageCard = ({img,title,description,dest}) =>
{
    return(
       
        <div className="Image-Card-Wrapper">
            <div className="Image-Card-Image-Holder">
               <img className="Image-Card-Image" src="https://dehdan.org/ejournal/mayjun2019/organ-donation.jpg"/>
            </div>
            <div className="Image-Card-Description">
                <div className="Image-Card-Description-Title-Holder">
                   <hi className="Image-Card-Description-Title">
                     {title}  
                   </hi>
                </div>
                <div className="Image-Card-Description-Info-Holder">
                  <span className="Image-Card-Description-Info">
                      {description} 
                  </span>
                </div>
            </div>
        </div>
       
    );
}



export default ImageCard;