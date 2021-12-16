import React ,{useEffect,useState} from 'react';
import './CompleteStory.css';
import test1 from '../../Images/ImageFromPc/ODF8.png';
import { useParams } from 'react-router';
import axios from 'axios';

const CompleteStory = () =>{

    const userurl = useParams();
    const UserName= userurl.UserName;
  const [CompStory,setCompStory] = useState({});

   useEffect(async ()=>{
    await  axios.get(`http://localhost:5000/Stories/getOne/${UserName}`).then(res=>{
         const resu=res.data;
          console.log(resu.Description);
          setCompStory(resu);
  
     })
   },[]);


  console.log(CompStory);





    return(

<div className="Complete-Story-Wrapper-x">
<div className="Complete-Story-Title-Holder-x">
        <span className="Complete-Story-Title-x">
        {CompStory.Title}
        </span>
    </div>
    <div className="Row-Holder-x">
    <div className="Complete-Story-Image-Holder-x">
        <img  className="Complete-Story-Image-x" src={CompStory.Image} alt="No Image Submitted" />
      
    </div>
    
    <div className="COmplete-Story-Description-Holder-x">
  <p className="Complete-Story-Description-x">
  {CompStory.Description}
  </p>
    </div>
    </div>
</div>



    )
}


export default CompleteStory;