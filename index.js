require('dotenv').config()
const express=require('express')
const app=express()
const cors =require ('cors')
const conaction=require("./db")
const userRouts=require('./routes/users')
const authRouts=require('./routes/auth')
conaction()
app.use(express.json())
app.use(cors()) 


//data conection


//routes
app.use("api/users",userRouts)
app.use("api/auth",authRouts)
const port =process.env.PORT ||8080
app.listen(port,()=> console.log('is conect'))
