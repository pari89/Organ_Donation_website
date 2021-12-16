import React, { useState } from 'react';
import './Input.css';
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


const StoryInput = () =>{

    const [Story,setStory] = useState([]);
  
    const SubmitStory = async () =>{
        await axios.post('http://localhost:5000/Stories/addStory' ,{
            Title : Story[0],
            Image : Story[1],
            Description : Story[2]
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }

    




    return(

        <Box 
        sx={{display:'flex',flexFlow:'column nowrap',alignItems:'center',justifyContent:'space-around',width:'80%',position:'relative',padding:'30px 30px',borderRadius:'10px', alignSelf:'center'}}>
        <TextField autoComplete="new-password" inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}  id="" label="Title of Story" variant="outlined"   onChange={(e)=>{Story[0]=e.target.value}   }            sx={{width:'100%',margin:'20px', maxWidth:'500px'  , boxShadow:4}} />
        <TextField autoComplete="new-password" inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} id="standard-basic" label="Image URL of Story" variant="outlined"   onChange={(e)=>{Story[1]=e.target.value}   }            sx={{width:'100%',margin:'20px', maxWidth:'300px'  , boxShadow:4}} />
        <TextField autoComplete="new-password" inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}  id="" label="Description of Story" variant="outlined" multiline
          maxRows={10}   onChange={(e)=>{Story[2]=e.target.value}   }            sx={{width:'100%',margin:'20px', maxWidth:'800px'  , boxShadow:4, height:'100%',maxHeight:'800px'}} />
    
    <div className="Input-Submit" onClick={()=>{
                SubmitStory();
            }}>Submit</div>
    </Box>

    )
}

export default StoryInput;