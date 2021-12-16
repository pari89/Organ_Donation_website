import express from 'express';
import mongoose from 'mongoose';

import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import StoriesRouter from '../Server/Routes/Stories.js';
import DonateRouter from '../Server/Routes/Donate.js';
import EventsRouter from '../Server/Routes/Event.js';
import LoginRouter from './Routes/Login.js';


dotenv.config();

const serverApp = express(); 
const port = process.env.PORT || 5000;



serverApp.use(cors());
serverApp.use(express.json());



serverApp.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
});



const URI = process.env.ATLAS_URI;

mongoose.connect(URI)
.catch((error) =>{console.log(error.message)})
    



const DBconnection = mongoose.connection;

DBconnection.once('open',   ()=> {
    console.log(`Data Base Connection Established Successfully`);
}
);





serverApp.use('/Stories', StoriesRouter); 
serverApp.use('/Donate', DonateRouter); 
serverApp.use('/Events', EventsRouter);
serverApp.use('/auth',LoginRouter);





          



    