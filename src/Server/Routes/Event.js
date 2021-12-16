import express from 'express';
import Events from '../../Server/Models/Events.model.js';

const EventsRouter = express.Router();

 
EventsRouter.post('/addEvent', async (req,res)=>{
   const NewTitle=req.body.Title;
   const NewVenue = req.body.Venue;
   const NewDescription = req.body.Description;
   const NewDate=new Date().toLocaleDateString();
const NewPoster = req.body.Poster;
const NewTime = new Date().toLocaleTimeString();  
 console.log(NewPoster);
const NewEvent = new Events({
   UserName:req.body.UserName,
   Title:NewTitle,
   Poster:NewPoster,
   Description:NewDescription,
   Venue:NewVenue,
   Time:NewTime,
   Date:NewDate,
   ContactDetails:req.body.ContactDetails
});

try{
  await  NewEvent.save();
   console.log(NewEvent);
   const resval="Done";
   res.send(resval);
}
catch(error){
   const resval="Error";
   res.send(resval);
   console.log(error);
}


})

EventsRouter.put('/update/:UserName',async (request,response)=>{
   const UserName = request.params.UserName;
  await Events.updateOne({UserName},{$set: request.body})
   .then(response=>{
      console.log({UserName}  );  
      
   })
   .catch(error=>{
      console.log("error while updating Events"); 
      console.log(error);
   })
   response.status(200).json("Updated Event");
})


EventsRouter.get('/', async (req,res)=>{
   try{
   const EventsList= await Events.find();
   console.log(EventsList);
   res.status(200).json(EventsList);
   }
   catch(error){
   res.status(404).json({message:error.message});
   }
} );

export default EventsRouter;