
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Blog from './components/Blog';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import UserBlogs from './components/UserBlogs';
import {useSelector} from "react-redux";
import {Route,Routes} from "react-router-dom"
import React from 'react';
function App() {

  const isLogged= useSelector(state=>state.isLoggedIn)
  console.log(isLogged)
  return (
    <React.Fragment>
   <header><Header/></header> 
   <main>
     
    
   
   <Routes>
     <Route  path="/login" element={<Login/>} />
     
     <Route  path="/blogs" element={<Blog/>} />
     
     <Route  path="/blog/details/:id" element={<BlogDetails/>} />
     <Route  path="/myblogs" element={<UserBlogs/>} />
     <Route  path="/blogs/add" element={<AddBlog/>} />
       </Routes>
  
   </main>
   </React.Fragment>
    
  );
}

export default App;
