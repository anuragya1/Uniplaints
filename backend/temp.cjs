const express=require('express');
const fs=require('fs');
const cor=require('cors')

const app=express();

app.use(cor());
app.get('/',async(req,res)=>{
    res.send("server started");
})
app.post('/sign',async(req,res)=>{
  console.log("sign in component active");

  const data=JSON.parse(req.body)
  
  console.log(data);
  res.status(200).send("data written!");
    // fs.writeFile('./singin.json',`${JSON.stringify(req.body)}`,(data,err)=>{
    //     if(data){
    //         res.status(200).send("you are now signed in");
    //     }
    //     else if(err)
    //     res.status(411).send("error while signin ");
    // else
    // console.log("data has written to the signin");
    // })
    
})
app.post('/login',async(req,res)=>{
    console.log("login activated");
    const {name,password}=req.body;
 
})
app.listen(3000,()=>{
    console.log("server started on port=",3000);
})