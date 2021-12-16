import React, { useState ,Component,useEffect} from "react";
import "./Admin.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tabs from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

import topBG from "../../Images/ImageFromPc/Blue-Background-2.png";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useParams } from "react-router";
import FlipableEvent from "../../Components/FlipableEvent/FlipableEvent";


const Admin =  () => {
  
    
   
  

  const [value, setValue] = React.useState(1);
  const [ LoadData ,setLoadData] = useState(0);
  const[ xArray ,setxArray]=useState([0,1,2]);
  const handleChange = (event, newValue) => {
    setValue(newValue);   setLoadData(newValue);
     xArray[0]=newValue;
  };
  const [StoryStatus,setStoryStatus]=useState("");
    const [DonationData , setDonationData] =useState([]);
    const [StoriesData , setStoriesData] =useState([]);
    const [EventsData , setEventsData] =useState([]);
    const [UserStatus, setUserStatus] = useState('Not Auth');
    const urlparams = useParams();
    const UserName=urlparams.UserName;
   
    useEffect(async ()=>{
     


if(UserName){
const AccessToken = localStorage.getItem(`Admin ${UserName}`);
console.log("username->");
console.log(UserName);
       console.log("fetched from local->")
         console.log(AccessToken);
      await axios.get('http://localhost:5000/auth/TokenValidate', {headers:{"authorization" : `Bearer ${AccessToken}`  }}).then(Response=>{
          
        if(Response.data.resval === "TokenVerified")
        {   setUserStatus("Auth");
             console.log("Token Verified");
        }
        else{
          window.location.replace(`/auth/Admin/Login`);
        }
      console.log(Response.data); 
      
   }).catch(error=>{
      console.log(error);
   })
  }
     },[JSON.stringify(xArray)]);




    useEffect(() => {console.log("useEffect Fired");
  if(LoadData === '1'){console.log("DonationData Fetched");
    
         axios.get('http://localhost:5000/Donate/')
      .then((response=>{
        console.log(" Donation response found");
        
        setDonationData(response.data);
        
        console.log(response.data);
      })); 
      setEventsData([]); setStoriesData([]);
    }
    else if(LoadData === '2')   {console.log("StoriesData Fetched");
      axios.get('http://localhost:5000/Stories/')
      .then((response=>{
        console.log("Stories response found");
        
        setStoriesData(response.data);
        
        console.log(response.data);
      })); 
      setEventsData([]); setDonationData([]);
    } 
    else if(LoadData === '3'){console.log("EventsData Fetched");
      axios.get('http://localhost:5000/Events/')
      .then((response=>{
        console.log(" Events response found");
        
        setEventsData(response.data);
        
        console.log(response.data);
      
      })); 
      setStoriesData([]); setDonationData([]);
    }
    }, [JSON.stringify(xArray)])
    
  const DonationFormDisplay = ({Item}) => { console.log("Item->"); console.log(Item.FirstName)
    return (
      <Grid container spacing={6} sx={{width:'92%', justifyContent:'space-around', alignSelf:'center' ,  alignItems:'center' ,marginTop:'5vh' , marginBottom:'20vh',  borderRadius: '10px' ,boxShadow: 8, paddingBottom:'20px',bgcolor:'hsl(0,0%,94%)'}}  >
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >FirstName : <span className={Item.FirstName==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
             {Item.FirstName} </span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" > Middle Name : <span className={ Item.MiddleName==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.MiddleName}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Last Name : <span className={ Item.LastName==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.LastName}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Gender : <span className={ Item.Gender==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.Gender}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Blood Group : <span className={ Item.BloodGroup==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
             {Item.BloodGroup}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Mobile Number : <span className={ Item.MobileNumber==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.MobileNumber}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >AadharCard Number : <span className={ Item.AadharCardNumber==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.AadharCardNumber}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" > Parent Name : <span className={ Item.ParentName==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.ParentName}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} sx={{  display:'flex', flexDirection:'row' }}>
          <span className="Address-Break">Address : </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Apartment Name/Society Name : <span className={ Item.Address.ApartmentName_SocietyName==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
             {Item.Address.ApartmentName_SocietyName}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >  City : <span className={ Item.Address.City==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
          {Item.Address.City}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" > District : <span className={ Item.Address.District==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
           {Item.Address.District}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" > State : <span className={ Item.Address.State==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
            {Item.Address.State}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Pincode : <span className={ Item.Pincode==="Not Mentioned"? " Not-Mentioned" : "Mentioned"}>
             {Item.Pincode}</span>
          </span>
        </Grid>
        
        
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >occupation : <span className={ (Item.occupation==="Not Mentioned")? " Not-Mentioned" : "Mentioned"}>
            {Item.occupation}</span>
          </span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <span className="Donation-Info-Component-Text" >Date & Time: <span className="Mentioned">
            {Item.Date}</span>
          </span>
        </Grid>
        
      </Grid>
    );
  };
  const params= useParams(); 
  const username=params.UserName; 
  const userName = username; 
 
 
  const UpdateStatus = async (UserName,Statusx) =>{var temp="";
  console.log("username before sending put-> ");
  console.log(`http://localhost:5000/Stories/update/${UserName}`);var ty="";
    Statusx==="Visible"? ty="Hidden" : ty="Visible";  setStoryStatus(ty); const tr=ty; console.log("Before Updating->"); console.log({tr});
   await axios.put(`http://localhost:5000/Stories/update/${UserName}`,{"Status":ty})
   .then(res=>{
     console.log("UI sent Story Update request to Server Successfully");
   }).catch(err=>{
     console.log("Error while UI sending Story Update request to Server");
   });
   console.log("StoryStatus After Update->")
  setStoryStatus(tr);
  console.log(StoryStatus);

  }; 
  console.log(StoryStatus);
const StoryDisplay = ({Story}) =>{console.log("Story->");  setStoryStatus(Story.Status);
  return(
    <div className="Admin-Story-Wrapper">
      <div className="Admin-Story-Container">
        <div className="Row-Holder1">
       <img className ="ASI" src={Story.Image} alt="Broken" />
       <span className="Admin-Story-Title">
       {Story.Title}
       </span>
       </div>

       <p className="Admin-Story-Description">

         
         {Story.Description} from {Story.UserName}
       </p>
       <div className={"Status-Button" + (Story.Status==="Visible"? " Hidden" : " Visible" )}  onClick={()=>{
         UpdateStatus(Story.UserName,Story.Status);
       }} >{
         <span className="Status-Text">{Story.Status}</span>
         
       }</div>
      </div>
    </div>
  )
}
if(UserStatus==="Auth"){
  return (
    <div className="Admin-Wrapper">
      <div className="Top-Pane">
        <img src="" alt="" />
      </div>
      <div className="Raised-Pane">
        <div className="Admin-Header">
          <div className="Avatar-Holder">
            <img className="Avatar Hidden" src="" alt="" />
          </div>
          <div className="User-Name-Holder">
            <span className="User-Name">AdminAccess</span>
            <span className="Basic-Info-Text">Admintest1</span>
          </div>
        </div>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            marginTop: "10vh",
            display: "flex",
            flexFlow: "column nowrap",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="Admin-Tab-Switch"
                centered
              >
                <Tab label="Donation Forms" value="1" sx={{fontSize:'16px',fontWeight:'320'}} />
                <Tab label="Stories" value="2" sx={{fontSize:'16px',fontWeight:'320'}}/>
                <Tab label="Events" value="3" sx={{fontSize:'16px',fontWeight:'320'}}/>
              </TabList>
            </Box>
            <TabPanel value="1"  sx={{display:'flex', flexFlow:'column nowrap', alignItems:'center' }}>
              <span className="Count-Of-Entity">
                {DonationData.length}
              </span>
              {
               DonationData.map(Form =>{
                 return(
                <DonationFormDisplay Item={Form}/> );
})}
            
            </TabPanel>
            <TabPanel value="2"  sx={{display:'flex', flexFlow:'column nowrap', alignItems:'center' }}>
            <span className="Count-Of-Entity">
                {StoriesData.length}
              </span>
            {
               StoriesData.map(Story =>{
                 return(
                <StoryDisplay Story={Story}/> );
})}
            </TabPanel>
            <TabPanel value="3" sx={{position:'relative',flex:'1',height:'100%', display:'flex', flexFlow : 'row wrap' ,justifyContent: 'space-around', alignItems:'center' }}>
              {EventsData.length}
            {
              EventsData.map(Event=>{
                return(
                  <FlipableEvent Event={Event}/>
                )
              })
              
            }
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
else{
    return(
        <div className="Return-SOmething"></div>
    )
}
};

export default Admin;
