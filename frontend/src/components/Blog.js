import React, { useEffect, useState } from 'react'
import Blo from './Blo'
import axios from 'axios'
function Blog() {

  const [blogs,setBlogs]=useState([])
const sendRequest= async ()=>{

  
 const res= await axios.get("http://localhost:5000/blog").catch((err)=>console.log(err))
 const Data= await res.data.blogs

 
 return Data
}
useEffect(()=>{
  sendRequest().then((data)=>{setBlogs(data)
    console.log(data) })
    console.log(blogs)
},[])
  return (
    <div  style={{marginTop:"10vw"}}>
  {blogs&&blogs.map((blog,index)=>(
   
   <div  key={index}><Blo  tle={blog.title} image={blog.image} description={blog.description}                     />
</div>
  
      ))


  }

   </div>
  )
}

export default Blog