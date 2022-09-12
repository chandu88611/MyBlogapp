import express from "express";
// import  gAllUser  from "./control/Controller";
import { getAllUser ,createUser,login} from "../control/controller.js";

 const router=express.Router();
router.get("/user",getAllUser);
router.post("/signup",createUser);
router.post("/login",login)

export default router;



// router.post("/user",(req,res)=>{
//     const dbMessage=req.body
//     res.send("hikjnn")
// })
