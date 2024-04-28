const mongoose = require("mongoose");
require('dotenv').config()

const emailSchema=new mongoose.Schema({
    recieverEmail:{type:String},
    senderEmail:{type:String,default:process.env.SENDER},
    name:{type:String},
    subject:{type:String},
    message:{type:String}
},{timestamps:true})
const emailModel =new mongoose.model("emailModel",emailSchema)
module.exports={emailModel}