const mongoose=require('mongoose');

const food= new mongoose.Schema(
    {
        Foodname:{type:String,required:true},
        Price:{type:Number,required:true},
        Description:{type:String,required:true},
        image:{type:String,required:true}
    },
    {
        collection:'foods'
    }
);
module.exports = mongoose.model('foods', food);