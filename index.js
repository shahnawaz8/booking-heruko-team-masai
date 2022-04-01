const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors());
app.listen(process.env.PORT || 2345, ()=>{
    console.log("listening on port 2345");
})
app.get('/',(req,res)=>{
    res.status(200).send("home")
})