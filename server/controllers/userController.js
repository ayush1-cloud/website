require('dotenv').config();
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');

const registerUser =asyncHandler(async(req,res)=>{
    const {username ,email,password} = req.body;
    if(!username|| !email|| !password){
        res.status(400)
        throw new Error("All fields are manditory!")
    }
   const userExist = await User.findOne({email});
    if(userExist){
        res.status(400)
        throw new Error("User already exists!")
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)
    
    const user = await User.create({
        username,
        email,
        password:hashPassword
    })

    if(user){
           const _id = user._id;
           const token =  jwt.sign({_id },process.env.JWT_SECRET)
        res.status(201).json({_id:user._id ,username:user.username,email:user.email,token })   
    }
    else{
        res.status(400)
        throw new Error("Registration failed!")
    }

})

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("all field manditory!")
    }
    const existsUser = await User.findOne({email})
       if(!existsUser){
        res.status(400)
        throw new Error('user not exist!')
       }

    if(existsUser && bcrypt.compare(password ,existsUser.password)){
        const _id= existsUser._id
        const token =jwt.sign({_id},process.env.JWT_SECRET)
        res.status(200).json({username:existsUser.username,token})
     }
})

module.exports = {registerUser , loginUser}
