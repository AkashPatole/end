const express=require("express");
const app=express();

app.use(express.static("public"));

app.get("/",(req,resp)=>{
    resp.sendFile("./public/login.html",{root:__dirname});
})

app.listen(9000);
console.log("listening at 9000");