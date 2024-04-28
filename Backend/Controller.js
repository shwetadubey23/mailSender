
const nodemailer = require("nodemailer");
const { emailModel } = require("./Models/emailSchema");
require("dotenv").config();
const sendemailController = async (req, res) => {
  let { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER,
        pass: process.env.PASS,
      },
    });

    let details = {
      from: process.env.SENDER,
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
    };

    transporter.sendMail(details, async (err) => {
      if (err) {
        console.error(err.message);
      } else {
        await emailModel.create({
          name: name,
          recieverEmail: email,
          subject: subject,
          message: message,
        });
        res.status(200).send({ status: true, message: "Email Send" });
        console.log("Email sent");
      }
    });
  } catch (error) {
    console.log(error.message);
    res.send({ status: false, message: "server Down" });
  }
};







const allmails = async(req,res) => {
  try {
    let allMails=await  emailModel.find();
    return res.send({status:true,message:"All Mails",data:allMails})
  } catch (error) {
    return res.send({status:false,message:"Something Went wrong"})
  }
}
module.exports = { sendemailController,allmails };
