import express from 'express';
import mongoose from "mongoose";

const UserData = new mongoose.Schema({
    UserName:{
    type:String,
    unique:true,
    required:true,
    default:"Not Mentioned",
    minlength: 6,

    },
    Password:{
        type:String,
        unique:false,
        required:true,
        default:"Not Mentioned",   
        minlength: 6,
    }}
    ,{timestamps:true});

    const AdminData = new mongoose.Schema({
        UserName:{
        type:String,
        unique:true,
        required:true,
        default:"Not Mentioned",
        minlength: 6,
    
        },
        Password:{
            type:String,
            unique:false,
            required:true,
            default:"Not Mentioned",
            minlength: 6,
        }}
        ,{timestamps:true});

const UserLoginData = mongoose.model('UserLoginData',UserData);
const AdminLoginData = mongoose.model('UserLoginData',UserData);


export default UserLoginData;
export {AdminLoginData};

