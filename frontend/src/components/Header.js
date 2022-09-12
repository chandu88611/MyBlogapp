import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Box,Button,Tab,Tabs}  from "@mui/material"
import "./Header.css"
// import { borderRadius } from '@mui/system'
function Header() {
    const [value,setValue]=useState();
  return (
<AppBar position="sticky" className='App-bar'>
    <Toolbar>
        <Typography variant="h4">Blogs</Typography>
<Box display="flex" marginRight="auto" marginLeft="auto">
    <Tabs value={value} onChange={(e,val)=>{setValue(val)}}>
        <Tab  label="AllBlogs" style={{color:"white"}}></Tab>
        <Tab label="MyBlogs" style={{color:"white"}}></Tab>
    </Tabs>
</Box>
        <Box className="box">
            <Button href='/login'  variant="contained"style={{color:"green",backgroundColor:"yellow" ,borderRadius:"39%"}}>Login</Button>
           
            <Button  href='/signup' variant="contained"style={{color:"green", backgroundColor:"yellow" ,marginLeft:"2px",borderRadius:"39%"
            
            }}>SignUp</Button>
                 <Button  href='/logout' variant="contained"style={{color:"green", backgroundColor:"yellow" ,marginLeft:"2px",borderRadius:"39%"
            
        }}>LogOut</Button>
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Header