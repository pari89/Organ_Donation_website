import React from "react";
import "./OrganStatistics.css";


const OrganStatistics = ({
  direction,
  OrganName,
  OrganDescription,
  OrganImage,
}) => {
  return (
    <div className="Organ-Info-Wrapper">
      <div className="Organ-Info">
        
        
        <div className="Organ-Info-Title-Holder">
          <h1 className="Organ-Info-Title">{OrganName}</h1>
        </div>
        <div className="Organ-Info-Row-Holder">
        <div className="Organ-Info-Image-Holder">
          <img className="Organ-Info-Image" src={OrganImage} alt="Broken" />
        </div>
        <div className="Organ-Info-Description-Holder">
          <p className="Organ-Info-Description">{OrganDescription}   </p>
        </div>
        </div>
      </div>
    </div>
  );
};


export default OrganStatistics;
