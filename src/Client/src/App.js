import React from 'react'
import './App.css';
import Home from './Pages/Home/Home.jsx';
import RedirectTo from './Components/RedirectTo.jsx';
import NavBar ,{NavBar2} from './Components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { GiBeer, GiCrossMark } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [resKey,setResKey] = useState('res-inactive');  
    const toggleResNav = (resKey) =>{console.log(resKey);                      
        if(resKey==='res-inactive')
        setResKey('res-active');
        else setResKey('res-inactive')
        console.log(resKey);
    }


  return (
    <BrowserRouter>
    <div className="Content-Wrapper">
      <div className={"NavBar-Wrapper  Alternate-Nav" + (resKey==="res-active"? " res-active" : " res-inactive")}>
        <NavBar resKey={resKey}/>
       {/* <div className={"NavBar-Wrapper  Alternate-Nav" + (resKey==="res-active"? " res-active" : " res-inactive")}>
        <NavBar2 resKey={resKey}/> </div>*/}
      </div> 
      {/* <div className={"NavBarToggle-Res-Nav nuio" +(resKey==='res-active'? " res-inactive-toggle-button" : " res-active-toggle-button"  )}  onClick={()=>{toggleResNav(resKey)}}></div>
      <div className={"NavBarToggle-Res-Nav nuiop" +(resKey==='res-active'? " res-active-toggle-button" : " res-inactive-toggle-button"  )}  onClick={()=>{toggleResNav(resKey)}}>
        <GiCrossMark className="closeMark"/>
      </div> */}
      <div className="Page-Wrapper">
        <RedirectTo></RedirectTo>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
