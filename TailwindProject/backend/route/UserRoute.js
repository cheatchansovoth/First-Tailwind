const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer =require('nodemailer');
const User = require('../db/user');
const validator = require('validator');
router.use(express.json())

router.get('/', (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(500).send(err));
});
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    const options={minLength:8}
    if (validator.isStrongPassword(password,options))
    {
        user.save()
        .then(() => res.status(201).send('User created'))
        .catch(err => res.status(400).send(err));
    }
    else
    {
        res.status(400).send({Error:'Weak Password'});
    }
});
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.send(user))
        .catch(err => res.status(404).send(err));
});
router.post('/login',async (req,res,next)=>
{
    const {email,password}=req.body;
    User.findOne({email}).then(user=>
        {
            if(!user)
            {
                return res.status(401).json({message:'Invalid information'});
            }
            if(user.password!=password)
            {
                return res.status(400).json({message:'Wrong password'});
            }
            else
            {
                return res.status(200).json({ok:'Login'})
            }
        })
})
function sendResetPasswordEmail(user, resetToken) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cheatchansovoth@gmail.com',
        pass: 'wsuizluhrmmmtrcu'
      }
    });
  
    const mailOptions = {
      to: user.email,
      from: 'cheatchansovoth@gmail.com',
      subject: 'Password Reset Request',
      text: `You are receiving this email because you (or someone else) have requested to reset your password for your account. Please click on the following link, or paste it into your browser to complete the process:\n\nhttp://localhost:5000/user/reset-password/${resetToken}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
    };
  
    transporter.sendMail(mailOptions, (err,info) => {
      if (err) {
        console.error(err);
      }
      else
      {
        console.log(info)
      }
    });
  }

  router.post('/resetpassword',(req,res,next)=>
  {
    const {email}=req.body;
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
          return next(err);
        }
        const resetToken = buffer.toString('hex');
        const resetTokenExpiration = Date.now() + 3600000; // 1 hour
    
        User.findOneAndUpdate({ email }, { resetToken, resetTokenExpiration }, { new: true })
          .then(user => {
            if (!user) {
              return res.status(400).json({ message: 'User not found' });
            }
            sendResetPasswordEmail(user, resetToken);
            res.json({ message: 'Password reset email sent' });
          })
          .catch(next);
      });
  })
  router.post('/reset-password/:token', async (req, res) => {
    try {
      const token = req.params.token;
      const user = await User.findOne({
        resetToken: token,
         resetTokenExpiration: { $gt: Date.now() },
      });
      if (!user) {
        return res.status(400).send({ message: 'Invalid or expired token' });
      }
      // Update user's password and clear the reset token
      user.password = req.body.password;
      user.resetToken = undefined;
      user.resetTokenExpiration = undefined;
      await user.save();
  
      // Send confirmation email to the user
      // ...
  
      res.status(200).send({ message: 'Password reset successful' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server error' });
    }
  });
  
  
module.exports = router;
