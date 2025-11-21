
const express=require("express");
const app=express();
app.use(express.json());

const err=[{
    "name":"Nibha kumari",
    "age":18
},{
    "name":"saloni kumari",
    "age":"20"
}]

app.get('/newuser',(req,res)=>{
    res.json(err);
})
 
app.post('/newdata',(req,res)=>{
    const newuser=req.body;
    err.push(newuser);
    res.json({
        message:"new user add succesfully",
        err:err
    })
})

app.listen(3000,()=>{
    console.log("server is running");
})