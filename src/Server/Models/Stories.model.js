import express from 'express';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });

        const storage = new CloudinaryStorage({
            cloudinary: cloudinary,
            params: {
              folder: 'some-folder-name',
              allowedFormats: ['jpg', 'png'],
              format: async (req, file) => 'png', // supports promises as well
              public_id: (req, file) => 'computed-filename-using-request',
            },
          });

var Schema = mongoose.Schema;
const NewStory = new Schema({
  UserName:{
    type:String,
    unique:true,
    minlength:5,
    trim:true,
    default:"DefaultUserName"+ new Date().toLocaleTimeString()
  },
    Title : { 
        type: String,
        required:true,
        trim:true,
        minlength:5,
        default:"Not Mentioned"
    },
    Description: {
        type:String,
        required:true,

default:"Not Mentioned" ,  
     unique:false,
        trim:true,
        minlength:8
    },
    Image: {
        type:String,
        required:false,
        default:"Not Mentioned",
        unique:false,
    },
    Status:{
  type:String,
  default:"Hidden",
  required:true,
  minlength:4,
  unique:false
    }
});

const Stories= mongoose.model('Stories' , NewStory);

export default Stories;