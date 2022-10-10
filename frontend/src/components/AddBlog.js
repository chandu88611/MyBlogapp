import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function AddBlog() {

  const [inputs ,setInputs]=useState(
    {
      title:"",
      description:"",
      image:'',
      
    }
  )
  const request= async ()=>{
    const res= await axios.post('http://localhost:5000/blog/newblog',{
      title:inputs.title,
        description:inputs.description,
        image:inputs.image
        ,user:'631c387911912277e933510e'
      }).catch((err)=>console.log(err))
      const data= await res
      return data
  
    }

const handleChange=(e)=>{
  setInputs((prev)=>({
    ...prev,[e.target.name]:e.target.value
  }))
}
const handleSubmit=(e)=>{
e.preventDefault()
request().then((data)=>console.log(data))
console.log(inputs)
}

  return (
    <div className='addblog' style={{marginTop:"9vw"}} >
   <form  onSubmit={handleSubmit} >
     <Box border={3} borderColor='green' borderRadius={10} boxShadow='10px 10px 20px #ccc' width='80%'
  margin={"auto"} display='flex' flexDirection={"column" }  alignItems={"center"} padding={3}

     
     >

    <Typography  textAlign={"center"} variant={"h3"} 
  margin={3} display='flex' flexDirection={"column" }  padding={3}
    fontWeight={"bold"} color='red'  
    
    >Add Your Blog</Typography>
    <InputLabel     sx={{   
    fontWeight:"bold" ,mt:"1",mb:"1",fontSize:"24px"


    }}>Title</InputLabel>
    <TextField   sx={{width:"100%"}}   variant="outlined"      

      value={inputs.title} name="title" onChange={handleChange}
    />
    <InputLabel     sx={{   
    fontWeight:"bold" ,mt:"1",mb:"1",fontSize:"24px"


    }}>Description</InputLabel>
    <TextField  sx={{width:"100%"   }} variant="outlined" 

      
value={inputs.description} name="description" onChange={handleChange}
    />
     <InputLabel     sx={{   
    fontWeight:"bold" ,mt:"1",mb:"1",fontSize:"24px"


    }}>ImageURL</InputLabel>

    <TextField    variant="outlined"  sx={{width:"100%",}}

      
value={inputs.image} name="image" onChange={handleChange}
    />
    <Button variant='contained' sx={{mt:3}} type="submit" >Submit</Button>
     </Box>




   </form>



    </div>
  )
}

export default AddBlog