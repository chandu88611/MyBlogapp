
import User from "../model/database.js"
import bcrypt from "bcryptjs";

 export const getAllUser= async (req,res,next)=>{
               let users;
             try{
        users= await User.find();
    }catch(err){
        console.log(err)
    } 
    if(!users){ 
        return res.status(404).json({message:"no users found"})
    }
    return res.status(200).json({users})
}
export const createUser= async (req,res,next)=>{
    const {name,email,password}=req.body;
    let existingUser;
  try{
    existingUser=await User.findOne({email})
}catch(err){
console.log(err)
}
if(existingUser){
return res.status(400).json({message:"user already exist:login instead"})
}
const hashedPassword=bcrypt.hashSync(password)
const user=new User({
    name,
    email,
    password:hashedPassword,
    blogs:[]
});
console.log(user)
try {
    await user.save();
} catch (err) {
    
console.log(err)
}
return res.status(201).json({user})
}


export const login= async (req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
  try{
    existingUser=await User.findOne({email})
}catch(err){
 return console.log(err)
}
if(!existingUser){
return res.status(404).json({message:"user not found  "})
}
const isCorrectPassword=bcrypt.compareSync(password,existingUser.password)
if(!isCorrectPassword){
    return res.status(400).json({message:"Incorrect password"})
}
return res.status(200).json({message:"logged in succesfully"})
}

// export {getAllUser}