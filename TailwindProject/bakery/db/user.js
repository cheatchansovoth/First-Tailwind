const db = require('./db');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    resetToken: String,
    resetTokenExpiration: Date
});
userSchema.pre('save', function(next) {
    const user = this;
  
    if (!user.isModified('password')) {
      return next();
    }
  
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) {
        return next(err);
      }
  
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
  
        user.password = hash;
        next();
      });
    });
  });
module.exports = mongoose.model('User', userSchema);
