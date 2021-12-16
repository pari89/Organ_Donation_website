import React from 'react';
import './NewStory.css';
import testImage from '../../Images/ImageFromPc/test1.jpg';
const NewStory = () => {
    return(
<div className="New-Story-Wrapper">
      <img className="New-Story-Image" src={testImage} alt="" />
      
</div>
    )
    
}

export default NewStory;