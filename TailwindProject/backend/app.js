const express=require('express');
const app=express();
const userRouter=require('./route/UserRoute')
const User=require('./db/user')
const PORT=5000;

app.use('/user',userRouter);

app.use(express.json());

app.get('/',(req,res)=>
{
    res.send('App is running');
})

app.listen(PORT || 8080,()=>
{
    console.log(`App is running at port ${PORT}`);
})