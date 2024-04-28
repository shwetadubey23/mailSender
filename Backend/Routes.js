const express =require("express")
const { sendemailController, allmails } = require("./Controller")
const routes=express.Router()

routes.post("/sendMail",sendemailController)
routes.get("/allmails",allmails)




module.exports={routes} 