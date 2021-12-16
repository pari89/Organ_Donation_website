import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import OutlinedInput from '@mui/material/OutlinedInput';

import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import './Input.css';

const EventInput = () =>{

    const [Event,setEvent] = useState([]);
    const [SubmitMessage,setMessage] = useState('');

const SubmitEvent = async () =>{
    await axios.post('http://localhost:5000/Events/addEvent' ,{
        Title : Event[0],
        Poster : Event[1],
        Description : Event[2],
        Venue : Event[3],
        ContactDetails : Event[4]
    }).then(res=>{
        console.log(res);
        setMessage(res.data);
    }).catch(err=>{
        console.log(err);
    });
}
    return(

        <Box 
        sx={{display:'flex',flexFlow:'column nowrap',alignItems:'center',justifyContent:'space-around',width:'80%',position:'relative',padding:'30px 30px',borderRadius:'10px', alignSelf:'center'}}>
        <TextField autoComplete="new-password"  id="" label="Title of Event" variant="outlined"   onChange={(e)=>{Event[0]=e.target.value}   }            sx={{width:'100%',margin:'20px', maxWidth:'500px'  , boxShadow:4}} />
        <TextField autoComplete="new-password" id="standard-basic" label="Image URL of Event" variant="outlined"   onChange={(e)=>{Event[1]=e.target.value}   }            sx={{width:'100%',margin:'20px', maxWidth:'300px'  , boxShadow:4}} />
        <TextField autoComplete="off"  id="" label="Description of Event" variant="outlined" multiline
          maxRows={10}   onChange={(e)=>{Event[2]=e.target.value}   }            sx={{width:'100%',margin:'20px', maxWidth:'800px'  , boxShadow:4, height:'100%',maxHeight:'800px'}} />
           <TextField autoComplete="new-password" id="standard-basic" label="Venue" variant="outlined"   onChange={(e)=>{Event[3]=e.target.value}   }            sx={{width:'60%',margin:'20px', maxWidth:'300px'  , boxShadow:4}} />
           <TextField autoComplete="new-password" id="standard-basic" label="Contact Details" variant="outlined"   onChange={(e)=>{Event[4]=e.target.value}   }            sx={{width:'60%',margin:'20px', maxWidth:'300px'  , boxShadow:4}} />
            <div className="Input-Submit" onClick={()=>{
                SubmitEvent();
            }}>Submit</div>
            <div className="SubmitMessage">{SubmitMessage}</div>
    </Box>

    )
}

export default EventInput;