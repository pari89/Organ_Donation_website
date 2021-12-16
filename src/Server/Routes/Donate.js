import express from 'express';
import DonationFormList from '../../Server/Models/Donate.model.js';


const DonateRouter = express.Router();

DonateRouter.post('/add', async (req,res)=> {
  try{
    const  FirstName = req.body.FirstName;
    const MiddleName = req.body.MiddleName;
  const   LastName = req.body.LastName;
    const ParentName = req.body.ParentName;
  
    
 const Pincode = req.body.Pincode;
 const  MobileNumber = req.body.MobileNumber;
 const  AadharCardNumber = req.body.AadharCardNumber;
 const  Occupation = req.body.Occupation;
 const  Gender = req.body.Gender;
 const  BloodGroup = req.body.BloodGroup;
 const  EmergencyContactNumber = req.body.EmergencyContactNumber;
 const  Organs= req.body.Organs;
   
    
   const NewDonationFormList = new DonationFormList({ 
     UserName:req.body.UserName,
FirstName : FirstName,
     MiddleName : MiddleName,
     LastName : LastName,
     ParentName : ParentName,
    
   Pincode :Pincode,
   MobileNumber : MobileNumber,
   AadharCardNumber : AadharCardNumber,
   Occupation : Occupation,
   Gender : Gender,
   BloodGroup : BloodGroup,
   EmergencyContactNumber : EmergencyContactNumber,
   Organs: Organs,
   Date:new Date().toLocaleDateString()
});
  await NewDonationFormList.save()
  .then(() => {res.json(NewDonationFormList ); console.log("New Donation List Created") })
.catch(err => res.status(400).json('Error: ' + err));
  }
  catch(error){
    console.log(error);
  }
});

DonateRouter.put('/update/:UserName',async (request,response)=>{
  const UserName = request.params.UserName;
 await Donate.updateOne({UserName},{$set: request.body})
  .then(response=>{
     console.log({UserName}  );  
     
  })
  .catch(error=>{
     console.log("error while updating Donations"); 
     console.log(error);
  })
  response.status(200).json("Updated Donation Form");
})

DonateRouter.get('/', async (req,res)=>{
    
    try {
        const GetDonationList= await DonationFormList.find();
        console.log("GET request tried");
        console.log(GetDonationList);
        res.status(200).json(GetDonationList);
    } catch (error) { 
      console.log("GET request failed");
        console.log({message:error.message});
        res.status(404).json(error.message);
    }
    
} );

export default DonateRouter;