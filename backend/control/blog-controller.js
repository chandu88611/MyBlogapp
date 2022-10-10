import mongoose from "mongoose";
import Blog from "../model/blog.js"
import User from "../model/database.js"
export const getAllBlogs= async (req,res,next)=>{
    let blogs;
    try {
        blogs= await Blog.find().populate("user");
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status(404).json({message:"No blogs found"})
    }
    return res.status(200).json({blogs})
}
export const addBlog= async (req,res,next)=>{
    const {title,description,image,user}=req.body;
    let existingUser;
    try{
existingUser= await User.findById(user);
}catch(err){
console.log(err)
} 
if(!existingUser){ 
return res.status(400).json({message:"no users found"})
}
    const blog=new Blog({
        title,description,image,user 
    })
    try {
        const session=await mongoose.startSession();
        session.startTransaction();
      await blog.save({session}) ;
      existingUser.blogs.push(blog);
      await existingUser.save({session})
      await session.commitTransaction()
    } catch (error) { 
         console.log(error)
         return res.status(500).json({message:"error"})
    }
    
    return res.status(200).json({blog})
}

export const updateBlog=async (req,res,next)=>{
    const {title,description,image}=req.body;
    const blogId=req.params.Id;
    let updatedBlog;
    try {
         updatedBlog=await Blog.findByIdAndUpdate(blogId,{
            title,description,image
         })
    } catch (error) {
        return console.log(error)
    }
    if(!updatedBlog){
        return res.status(500).json({message:"Unable to  update the blog"})
    }
    return res.status(200).json({updatedBlog})
}

export  const getById=async (req,res,next)=>{
    const blogId=req.params.Id;
    let recievedBlog;
    try {
        recievedBlog=await Blog.find(blogId)
    } catch (error) {
        return console.log(error)
    }
    if(!recievedBlog){
        return res.status(404).json({message:"Blog not found"})
    }
    return res.status(200).json({recievedBlog})

}

export const deleteById=async (req,res,next)=>{
    const Id=req.params.Id;
    let blog;
    try {
        blog=await Blog.findByIdAndRemove(Id).populate("user")
        await blog.user.blogs.pull(blog)
    } catch (error) {
        return console.log(error)
    }
   if(!blog){
  return res.status(404).json({message:"unable to delete"})
   }
   return  res.status(200).json({message:"succesully deleted"})
}


export const getbyUserId=async (req,res,next)=>{
    
    const uId=req.params.Id;
    let userBlogs;
    try {
        userBlogs=await User.findById(uId).populate("blogs");
    } catch (error) {
        return console.log(error)
    }
   if(!userBlogs){
  return res.status(404).json({message:"blogs not found"})
   }
   return  res.status(200).json({blogs:userBlogs})
}