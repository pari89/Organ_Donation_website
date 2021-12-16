import React from 'react';
import './Organ-Info.css';

const Organ_Info = ({Image,Description,Title}) =>{
    return(

<div className="Complete-Story-Wrapper">
    
    <div className="Complete-Story-Image-Holder">
        <img  className="Complete-Story-Image" src={Image} alt="" />
    </div>
    <div className="Complete-Story-Title-Holder">
        <span className="Complete-Story-Title">
            {Title}
        </span>
    </div>
    <div className="COmplete-Story-Description-Holder">
  <p className="Complete-Story-Description">
{Description}
  </p>
    </div>
</div>



    )
}


export default Organ_Info;