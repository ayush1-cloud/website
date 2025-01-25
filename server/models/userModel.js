const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'password is required']

    },
},
{timestamps:true}

)

const Usermodel = new mongoose.model('user1',userSchema)

module.exports =  Usermodel