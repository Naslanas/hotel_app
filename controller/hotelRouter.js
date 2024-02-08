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

route.get("/view",async(req,res)=>{
    let data=await hotelModel.find()
    res.json(data)
})

route.posts("/search",async(req,res)=>{
    let input=req.body
    let data=await hotelModel.find(input)
    req,express.json(data)
})
module.exports=route