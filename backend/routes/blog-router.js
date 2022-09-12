import  express  from "express"
import  {getAllBlogs,addBlog,updateBlog,getById, deleteById,getbyUserId}  from  "../control/blog-controller.js"
// import blog from "../model/blog.js";

const blogRouter=express.Router();

blogRouter.get('/',getAllBlogs)
blogRouter.post('/newblog',addBlog)
blogRouter.put("/update/:Id",updateBlog)

blogRouter.get("/:Id",getById)
blogRouter.delete("/delete/:Id",deleteById)
blogRouter.get("/user/:id",getbyUserId)
export default blogRouter;