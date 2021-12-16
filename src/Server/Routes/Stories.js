import express from 'express';

import Stories from '../../Server/Models/Stories.model.js';
import pkg from 'react-router';
const { useParams } = pkg;


const StoriesRouter = express.Router();


StoriesRouter.post('/addStory', async (req,result )=>{
   const NewUserName=req.body.UserName;
const NewTitle=req.body.Title;
const NewImage=req.body.Image;
const NewDescription = req.body.Description;

const NewStory = new Stories({
   Title:NewTitle,
   Image:NewImage,
   Description:NewDescription,
   UserName:req.body.UserName
});
try{
  await  NewStory.save().then(res=>{ 
      if(res) {console.log(res);
      const resval="Done";
      console.log("New Story Added");
      result.send(resval);}
   })
   .catch(err=>{
      console.log(err);
      const resval=err;
      result.send(resval); 
   })

}
catch(error){
   console.log(error);
   resval=error;
      result.send(resval);
}


})

StoriesRouter.put('/update/:UserName',async (request,response)=>{var resval="";    
   const UserName = request.params.UserName; 
   console.log(request.body);
  await Stories.findOneAndUpdate({UserName},{$set: request.body})
   .then(response=>{
      console.log({UserName}  );  
      resval="Updated";
      console.log(response);
   })
   .catch(error=>{
      console.log("error while updating Stories"); 
      console.log(error);
      resval="Error";
      
   })
   response.send(resval)
})

StoriesRouter.get('/', async (req,res)=>{
   try{
      
   const storiesList= await Stories.find();
   console.log(storiesList);
   res.status(200).json(storiesList); 
   
   }
   catch(error){
   res.status(404).json({message:error.message});
   }
} );
 

StoriesRouter.get('/getOne/:UserName', async (req,res)=>{
   try{
      const UserName = req.params.UserName;  
   await Stories.find({UserName},(err,obj)=>{
      if(err) console.log(err);
      else{
     const Story= obj[0];
     console.log(obj[0]);
     res.send(Story); }   
   });
   
}
catch(err){
  console.log(err);
}


});











export default StoriesRouter;