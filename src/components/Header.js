import React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@mui/material';
import { Link ,LinkComponent} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <AppBar position='sticky'>
      <Toolbar>
        <Typography varient ='h1'>
          SUPERMARKET_AUTOMATION_SYSTEM

        </Typography>
        <Box display={"flex"} marginleft="auto" marginRight={"auto"} ></Box>
        <Box display={"flex"} marginleft="auto">
          <Button sx={{ margin: 2 , color : "white"}}
          LinkComponent ={Link} to='/home'>Home</Button>
        </Box>
        <Box display={"flex"} marginleft="auto">
          <Button sx={{ margin: 2 , color : "white"}}
          LinkComponent ={Link} to='/orders'>Orders</Button>
        </Box>
        <Box display={"flex"} marginleft="auto">
          <Button sx={{ margin: 2 , color : "white"}}
          LinkComponent ={Link} to='/inventory'>Inventory</Button>
        </Box>
        <Box display={"flex"} marginleft="auto">
          <Button sx={{ margin: 2 , color : "white"}}
          LinkComponent ={Link} to='/report'>Report</Button>
        </Box>
        <Box display={"flex"} marginleft="auto">
          <Button sx={{ margin: 2 , color : "white"}}
          LinkComponent ={Link} to='/itemprice'>Itemprice</Button>
        </Box>
      </Toolbar>

    </AppBar>
    </>
  )
}

export default Header
