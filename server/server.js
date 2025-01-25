require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Connection = require('./connect/Database')
const router = require('./routes/userRoutes')

PORT = process.env.PORT ||8001
Connection();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use('/api/users',router)



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})