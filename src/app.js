const express=require("express");
const { get } = require("mongoose");
const app=express();
require("./db/conn");
const port= process.env.port || 3000;
app.get('/', (req,res)=>{
res.send("<h1>hello</h1>");
});
app.listen(port,()=>{
console.log(`the port is run ${port}`);
});