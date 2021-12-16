import React,{useState} from 'react';
import './NavBar.css';
import { BrowserRouter , NavLink,Routes,Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Logo from '../../Images/Actual-Logo (2).png';

const NavBar = ({resKey}) => {

  const urlParams =window.location.pathname;
  
  console.log(window.location.pathname );
   
const [activeKey , setActiveKey] =  useState('Home');

   
      


    const tabKey= 'Home'; 
    const changeNavState = (tab,activeKey)=>{
        if(tab!=activeKey ) { console.log({activeKey});
          
            const temp=tab;
             setActiveKey(tab);
           
        }
        
    }
    console.log(activeKey);
    console.log(resKey);


    return(
       <div className="NavBar-Main-Wrapper">
           <div className="Logo-Container">
           <NavLink exact to="./" >
                <img className="Nav-Logo" src={Logo} alt="broken" />
            </NavLink>
           </div>
        <div className={"NavBar-Content-Wrapper" + (resKey==="res-active"? " res-active" : " res-inactive")}>
            
          <div  className={"NavBar-Element-Container"+ (activeKey==="Home"? " Active" : "")}  onClick={ () => {changeNavState('Home',activeKey)}}>
              <NavLink exact to="/"  className="NavLink" >
                 <span className="Link-Text">Home</span> 
              </NavLink>
           </div>
           <div className="About-Dropdown">
           <div  className={"NavBar-Element-Container About-Element"+ (activeKey==="About"? " Active" : "")}  onClick={ () => {changeNavState('About',activeKey)}}>
              <NavLink exact to ="/About"    className="NavLink" >
              <span className="Link-Text">About</span> 
              </NavLink>
          </div >
          <div className="Dropdown-Menu About-DropDown-Menu">
          <NavLink exact to ="/About/Why-Donate"    className={"NavLink"+ (activeKey==="Statistics"? " Active" : "")}  onClick={ () => {changeNavState('Statistics',activeKey)}}>
          <span className="Link-Text">Statistics</span> 
              </NavLink>
              <NavLink exact to ="/About/Statistics"    className={"NavLink"+ (activeKey==="Why-Donate"? " Active" : "")}  onClick={ () => {changeNavState('Why-Donate',activeKey)}}>
              <span className="Link-Text">Why-Donate</span> 
              </NavLink>
              <NavLink exact to ="/About/Organ-Info"   className={"NavLink"+ (activeKey==="Organ-Info"? " Active" : "")}  onClick={ () => {changeNavState('Organ-Info',activeKey)}}>
              <span className="Link-Text">Organ-Info</span> 
              </NavLink>
          </div>
          </div>
          <div className="About-Dropdown">
           <div  className={"NavBar-Element-Container Community-Element"+ (activeKey==="Community"? " Active" : "")}  onClick={ () => {changeNavState('Community',activeKey)}}>
              <NavLink exact to ="/Community"    className="NavLink" >
              <span className="Link-Text">Community</span> 
              </NavLink>
          </div >
          <div className="Dropdown-Menu Community-Menu-Nav">
          <NavLink exact to ="/Community/Events"    className={"NavLink"+ (activeKey==="Events"? " Active" : "")}  onClick={ () => {changeNavState('Events',activeKey)}}>
          <span className="Link-Text">Events</span> 
              </NavLink>
              <NavLink exact to ="/Community/Stories"   className={"NavLink"+ (activeKey==="Stories"? " Active" : "")}  onClick={ () => {changeNavState('Stories',activeKey)}}>
              <span className="Link-Text">Stories</span> 
              </NavLink>
          </div>
          </div>
          <div  className={"NavBar-Element-Container"+ (activeKey==="Donate"? " Active" : "")}  onClick={ () => {changeNavState('Donate',activeKey)}}>
          <NavLink exact to ="/Donate"   className="NavLink" >
          <span className="Link-Text">Donate</span> 
          </NavLink>
          
          </div>
          <div  className={"NavBar-Element-Container"+ (activeKey==="Pledge"? " Active" : "")}  onClick={ () => {changeNavState('Pledge',activeKey)}}>
          <NavLink exact to ="/Pledge"   className="NavLink" >
          <span className="Link-Text">Pledge</span> 
          </NavLink>
        </div>
        <div className="About-Dropdown">
           <div  className={"NavBar-Element-Container Community-Element"+ (activeKey==="SignUp"? " Active" : "")}  onClick={ () => {changeNavState('SignUp',activeKey)}}>
              <NavLink exact to ="/auth/User/SignUp"    className="NavLink" >
              <span className="Link-Text">Sign Up</span> 
              </NavLink>
          </div >
          <div className="Dropdown-Menu Community-Menu-Nav">
          <NavLink exact to ="/auth/User/SignUp"    className={"NavLink"+ (activeKey==="User"? " Active" : "")}  onClick={ () => {changeNavState('User',activeKey)}}>
          <span className="Link-Text">User</span> 
              </NavLink>
              <NavLink exact to ="/auth/Admin/SignUp"   className={"NavLink"+ (activeKey==="Admin"? " Active" : "")}  onClick={ () => {changeNavState('Admin',activeKey)}}>
              <span className="Link-Text">Admin</span> 
              </NavLink>
          </div>
          </div><div className="About-Dropdown">
           <div  className={"NavBar-Element-Container Community-Element"+ (activeKey==="Login"? " Active" : "")}  onClick={ () => {changeNavState('Login',activeKey)}}>
              <NavLink exact to ="/auth/User/Login"    className="NavLink" >
              <span className="Link-Text">Login</span> 
              </NavLink>
          </div >
          <div className="Dropdown-Menu Community-Menu-Nav">
          <NavLink exact to ="/auth/User/Login"    className={"NavLink"+ (activeKey==="User"? " Active" : "")}  onClick={ () => {changeNavState('User',activeKey)}}>
          <span className="Link-Text">User</span> 
              </NavLink>
              <NavLink exact to ="/auth/Admin/Login"   className={"NavLink"+ (activeKey==="Admin"? " Active" : "")}  onClick={ () => {changeNavState('Admin',activeKey)}}>
              <span className="Link-Text">Admin</span> 
              </NavLink>
          </div>
          </div>
        
        </div>
        </div>
    );
}
const NavBar2 = ({resKey}) =>{
    return(
        <div className="NavBar2-Main-Wrapper">
           <div className="Logo-Container">
           <NavLink exact to="./" >
                <img className="Nav-Logo" src={Logo} alt="broken" />
            </NavLink>
           </div>
           </div>
    
    
    );
}

export default NavBar;
export {NavBar2};


