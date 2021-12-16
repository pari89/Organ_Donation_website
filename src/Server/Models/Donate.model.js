import express from "express";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
const DonationForm = new mongoose.Schema({
  UserName:{
    type:String,
    unique:true,
    minlength: 1,
       trim:true,
    default:"DefaultUserName"+ new Date().toLocaleDateString() 
  },
  FirstName: {
    type: String,
    required: true,
    unique: false,
    minlength: 1,
        default: "Not Mentioned", 
  },
  MiddleName: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },
  LastName: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },
  ParentName: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },
  Address: {
    ApartmentName_SocietyName: {
      type: String,
      required: false,
      unique: false,
      minlength: 1,
            default: "Not Mentioned",
    },
    City: {
      type: String,
      required: false,
      unique: false,
      minlength: 1,
            default: "Not Mentioned",
    },
    District: {
      type: String,
      required: false,
      unique: false,
      minlength: 1,
            default: "Not Mentioned",
    },
    State: {
      type: String,
      required: false,
      unique: false,
      minlength: 1,
            default: "Not Mentioned",
    },
  },

  Pincode: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },

  AadharCardNumber: {
    type: String,
    required: false,
    unique: true,
    minlength: 1,

    default: "Not Mentioned",
  },
  MobileNumber: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,

    default: "Not Mentioned",
  },
  occupation: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },
  Gender: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },
  BloodGroup: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,
        default: "Not Mentioned",
  },
  EmergencyContactNumber: {
    type: String,
    required: false,
    unique: false,
    minlength: 1,

    default: "Not Mentioned",
  },
  Organs: [
    {
      type: Array,
    },
  ],
  Date: {
    type: Date,
    default: Date.now(),
  },
});

const DonationFormList = mongoose.model("DonationFormList", DonationForm);

export default DonationFormList;
