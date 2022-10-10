import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Box,Button,Tab,Tabs}  from "@mui/material"
import "./Header.css"
import {useDispatch, useSelector}  from "react-redux"
import { authActions } from '../store/store';

import { Link } from 'react-router-dom';
// import { borderRadius } from '@mui/system'
function Header() {
    const [value,setValue]=useState();
    const dispatch=useDispatch()

  const isLogged= useSelector(state=>state.isLoggedIn)
  return (
<div className="sticky">
<AppBar position="sticky" top="0" className='App-bar'>
    <Toolbar>
        <Typography variant="h4">Blogs</Typography>
{isLogged?<Box display="flex" marginRight="auto" marginLeft="auto">
    <Tabs value={value} onChange={(e,val)=>{setValue(val)}}>
        <Tab  LinkComponent={Link}  to="/blogs" label="AllBlogs" style={{color:"white"}}></Tab>
        <Tab   LinkComponent={Link}   to="/myblogs" label="MyBlogs"   style={{color:"white"}}></Tab>
        <Tab   LinkComponent={Link}   to="/blogs/add" label="AddBlogs"   style={{color:"white"}}></Tab>

    </Tabs>
</Box>:null}
        <Box className="box">
           { !isLogged?<><Button href='/login'  variant="contained"style={{color:"green",backgroundColor:"yellow" ,borderRadius:"39%"}}>Login</Button>
           
            <Button  href='/signup' variant="contained"style={{color:"green", backgroundColor:"yellow" ,marginLeft:"2px",borderRadius:"39%"
            
            }}>SignUp</Button></>:null}
             {  isLogged?  <Button  href='/logout' variant="contained"style={{color:"green", backgroundColor:"yellow" ,marginLeft:"2px",borderRadius:"39%"
            
        }}   onClick={()=>dispatch(authActions.logout())} to="/login"  >LogOut</Button>:null}
        </Box>
    </Toolbar>
</AppBar>
</div>
  )
}

export default Header