
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


app.listen(3000,()=>{
    console.log("server is running");
})