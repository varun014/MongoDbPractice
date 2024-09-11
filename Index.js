const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(27017,()=>{
    console.log('running on server 27017');
})

app.get('/',(req,res) =>{
   res.send("Hello from Node API server update");
})

mongoose.connect("mongodb+srv://varungoyal014:PSExX6ECgbPg0eTE@backenddb.9stkf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>
{
    console.log("connected to database");
})
.catch(() =>
{
    console.log("connection failed");
})