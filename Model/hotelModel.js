const mongoose=require("mongoose")
const hotelSchema=mongoose.Schema(
    {
        name:String,
        type:String,
        price:String
    }
)

module.exports=mongoose.model("menus",hotelSchema)