import express from 'express';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';






const NewEvent = new mongoose.Schema({
    UserName:{
        type:String,
        unique:true,
        minlength:5,
        required:true,
        trim:true,
        default:"DefaultUserName"+ new Date().toLocaleTimeString()
      },
    Title : {
        type: String,
        required:true,
        unique:false,
        trim:true,
        minlength:5, 
        default:"Not Mentioned"
    },
    Venue: {
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3,
        default:"Not Mentioned"
    },
    Date: {
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3,
        default:new Date().toLocaleTimeString
    },
    Time: {
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3,
        default:"Not Mentioned"
    },
    Description: {
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:5,
        default:"Not Mentioned"
    },
    ContactDetails:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:5,
        default:"Not Mentioned"
    },
    Poster: {
        type:String,
        required:false,
        unique:false,
        default:"Not Mentioned"
    }
});

const Events = mongoose.model('Events', NewEvent);

export default Events;