

import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Signup = () => {

const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='text-center'>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>


        <Card className='py-5 px-3 rounded-4 border-black' >


          <Box>
            <Typography variant='h4' >Let's Get Subscription</Typography>

            <Typography variant='body1'  >Welcome to FreshCart! Enter your email to get started.</Typography>
          </Box>





          <Box className="pt-3">
            <TextField placeholder='First Name'size='small' className='pe-1'></TextField>
            <TextField placeholder='Last Name' size='small' className='ps-1'></TextField>
          </Box>
          <Box>
            <TextField placeholder='Email'     size='small' className='py-3' fullWidth></TextField>
          </Box>
          <Box>
            <TextField  slotProps={{
        


          input: {
            endAdornment: (
              <InputAdornment sx={{cursor:"pointer"}}   position="start" onClick={() => setShowPassword(!showPassword)} >
               {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon />}
              </InputAdornment>
            ),
          },
        }} placeholder='Password'  size='small' className='pb-3' fullWidth type={showPassword ? "text" : "password"} ></TextField>


          </Box>

          <Box>
            <Button className='fw-bold' variant="contained" fullWidth>Register</Button>
          </Box>


          <Box>
            <Button className='mt-3' variant="contained" fullWidth><Link className='text-decoration-none text-white fw-bold' to="/Sign-in">Sign in</Link></Button>

          </Box>
        </Card>

      </Box>

    </div>
  )
}

export default Signup