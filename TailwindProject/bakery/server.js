const express=require('express');
const cors=require('cors')
require('dotenv').config()
const User=require('./db/user')
const Foods=require('./db/food')
const multer=require('multer');
const app=express();
const productRouter=require('./route/FoodRoute')
const userRouter=require('./route/UserRoute');
const { default: mongoose } = require('mongoose');

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./client/public/images/");
    },
    filename:(req,file,callback)=>
    {
        console.log(file)
        callback(null,file.originalname);
    }
})
const storeImage=multer({storage:storage});


app.use(express.json())
app.use(cors());
app.use('/product',productRouter);
app.use('/user',userRouter);

app.post('/storeiamge',storeImage.single('image'),async(req,res)=>
{
    const saveFood=new Foods({Foodname:req.body.Foodname,Price:req.body.Price,Description:req.body.Description,image:req.file.originalname});
    await saveFood.save();
})
app.get('/',(req,res)=>
{
    res.send('<h1>Hello world</h1>')
})
app.listen(process.env.PORT || 8080,()=>
{
    console.log(`RUNNING IS ${process.env.PORT}`);
})