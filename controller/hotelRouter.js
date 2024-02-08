const express=require("express")
const hotelModel = require("../Model/hotelModel")

const route=express.Router()

route.post("/add",async(req,res)=>{
    let data=req.body
    let hotel=new hotelModel(data)
    let result=await hotel.save()
    res.json(
        {
            status:"success"
        }
    )
    
})

module.exports=route