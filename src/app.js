const express = require("express");
const app = express()


app.use(express.json())

app.post("/create-post", async(req,res)=>{
    
})

module.exports=app