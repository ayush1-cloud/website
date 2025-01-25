require('dotenv').config();
const mongoose = require('mongoose')

const Connection = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected Db Successfully!')
    }
    catch(err){
        console.log(err)
    }
}

module.exports =Connection