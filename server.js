const express = require('express');

const app = express();

const PORT = 3005

app.get("/",(req,res)=>{
    res.send("Welcome to Zomato backend")
})

app.listen(PORT, ()=>{
    console.log(`Server on running port ${PORT}`);
})