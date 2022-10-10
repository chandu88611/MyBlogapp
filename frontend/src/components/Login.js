import { TextField, Typography ,Button} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import "./Login.css"
import axios from "axios"
import {useDispatch} from "react-redux"
import {authActions}  from "../store/store"
import {useNavigate}  from "react-router-dom"
function Login() {
  const navigate=useNavigate()
    const[inputs,setInputs]=useState({
   name:"",
   email:"",
   password:""
    })
  const [signUp,setSignUp]=useState(false)
  const dispatch=useDispatch()
  const request= async (type= "login")=>{
  const res= await axios.post(`http://localhost:5000/${type}`,{
    name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch((err)=>console.log(err))
    const data= await res
    return data
    console.log(data)
  }
  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }));
  }   //.then((data)=>localStorage.setItem("userId",data.user._id))
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(inputs) 
  if(signUp){request("signup").then(()=>dispatch(authActions.login())).then(()=>navigate("/blogs"))
  .then(data=>console.log(data))
}else{
  request().then(()=>dispatch(authActions.login())).then(()=>navigate("/blogs")).then(data=>console.log(data))
}
}

  return (
    <div className='main3_div'>
      <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection={"column"}
     alignItems="center"
     className="Box">
      <Typography variant='h2' > {signUp?"SignUp":"Login"}</Typography>
      {signUp && <TextField  value={inputs.name}

         className="text" placeholder='name'
          margin="normal"  name="name" onChange={handleChange}/>}
      <TextField   className="text"
       placeholder='Email'    margin="normal"   value={inputs.email}
        name="email" onChange={handleChange}/>
      <TextField  className="text" placeholder='password'  value={inputs.password}
       margin="normal"  name="password" onChange={handleChange}/>
      <Button  variant="contained"  type="submit" > Submit</Button>
      <Button onClick={()=>setSignUp(!signUp) }> Change to {signUp?"Login":"SignUp"}</Button>
    </Box>

      </form>
    </div>
  )
}

export default Login