import React from 'react'
import './Home.css';
import Image from '../../Images/ImageFromPc/xyz.jpeg';
import { Link } from 'react-router-dom';
import HomeImage from '../../Images/PledgeHeaderImage.jpg'
import {useParams}  from 'react-router'
import Carousel from 'react-bootstrap/Carousel'
import Image2 from '../../Images/ImageFromPc/one-organ-donor-saves-8-lives.png'
import Image3 from '../../Images/LeftHalf.jpg';
import Image4 from '../../Images/RightHalf.png';
const Home = () =>{
   
    const urlparams = useParams();
    console.log(urlparams);
    const UserNamex=urlparams.UserName;
    var UserName='';
     UserNamex && UserNamex.length >1 ?  UserName=UserName : UserName=""; 
    return ( 

        <div class="Home-Wrapper">
            <div className="Home-Header">
      <Carousel className="Carousel-home"  fade>
        <Carousel.Item interval={2000} >
          <img
            class="d-block w-100"
            src={Image}
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            class="d-block w-100"
            src={Image2}
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            src="https://images.financialexpress.com/2021/08/world-Organ-Donation-Day-2021.jpg"
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            src={Image4}
            alt="First slide"
          ></img>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="Body-Home">
      <div className="Custom-Insert">
               <Link className="Home-Dive-In-Button Home-Button" exact to="./About">Explore</Link>
         <p className="CustomQuote">An Initiative To Bridge those with the WILL to those in NEED</p>
     </div>
      </div>
    </div>
    );
}


export default Home;