import React from 'react'
import './Pledge.css'
import PledgeHeaderPic from "../../Images/PledgeHand.png"
import {NavLink} from 'react-router-dom'


import { Button } from 'antd';

export const Pledge = () => {
    return (
        
            <div className="Pledge-Wrapper">
             <div className="Pledge-Content">
                 <div className="Pledge-Header">
            <img src={PledgeHeaderPic} alt="gndu" />
            <h1>What is a Donar Pledge?</h1>
            </div>
            <p>Organ donation is the process when a person allows an organ of their own to be removed and transplanted to another person, legally, either by consent while the donor is alive or dead with the assent of the next of kin.

Donation may be for research or, more commonly, healthy transplantable organs and tissues may be donated to be transplanted into another person

Common transplantations include kidneys, heart, liver, pancreas, intestines, lungs, bones, bone marrow, skin, and corneas Some organs and tissues can be donated by living donors, such as a kidney or part of the liver, part of the pancreas, part of the lungs or part of the intestines,[3] but most donations occur after the donor has died.[1]

In 2019, Spain had the highest donor rate in the world at 46.91 per million people, followed by the US (36.88 per million), Croatia (34.63 per million), Portugal (33.8 per million), and France (33.25 per million).</p>
           <NavLink className="Pledge-NavLink" exact to='/Donate'>
               <div className="Pledge-Button">
                   <span className="Pledge-NavLink">Pledge Now</span>
               </div>
               </NavLink>
            </div>
            </div>
        
    );
}
