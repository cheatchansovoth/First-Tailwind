const express=require('express');
const cors=require('cors');
const nodemailer = require("nodemailer");
require('dotenv').config()
const app=express();
const path=require('path');

app.use(cors());
app.use(express.json());
app.post('/receiveEmail', async (req,res)=>
{
    const name=req.body.name;
    const contact=req.body.contact;
    const message=req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cheatchansovoth@gmail.com',
          pass: 'wsuizluhrmmmtrcu'
        }
      });
      
      var mailOptions = {
        from: contact,
        to: 'cheatchansovoth@gmail.com',
        subject:name,
        html:message
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })
    try{
        res.status(200).json({Message:'Sent'})
    }
    catch(error)
    {
        console.log(error)
    }

})
if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,'/client/build')));
    
    app.get('*',(req,res)=>
    {
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}
app.listen(process.env.PORT || 8080,(req,res)=>
{
    console.log(`App is running at port ${process.env.PORT}`);
})