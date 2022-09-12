import express from "express"
import mongoose from "mongoose"
import router from "./routes/router.js"
import blogRouter from "./routes/blog-router.js"

const app=express()
 app.use(express.json())
 app.use("/",router)
 app.use("/blog",blogRouter)
 
 const mb="mongodb+srv://chandan:2xcVW4SPf.SdAYU@cluster0.wnqqekd.mongodb.net/?retryWrites=true&w=majority"

 mongoose.connect(mb,{
  
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
 }).then(()=>{console.log("MB connected")
}).catch((err)=>{console.log(err)})
// app.get("/",(req,res)=>{
//     res.send("hello chandan")
// })

app.listen(5000,()=>{
    console.log('conected')
})