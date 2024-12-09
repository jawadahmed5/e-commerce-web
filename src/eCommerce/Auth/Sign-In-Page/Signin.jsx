

import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Signin = () => {
const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='text-center'>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>


        <Card className='py-5 px-3 rounded-4 border-black '  >


          <Box>
            <Typography variant='h4' >Sign in to Subscription Store</Typography>

            <Typography variant='body1'  >Welcome back to Subscription Store! Enter your email to get started.</Typography>
          </Box>





          <Box>
            <TextField placeholder='Email' size='small' className='py-3' fullWidth></TextField>
          </Box>
          <Box>
            <TextField placeholder='Password' type={showPassword ? "text" : "password" } size='small' className='pb-3' fullWidth slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=> setShowPassword(!showPassword)} >
               {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon />}
              </InputAdornment>
            ),
          },
        }}></TextField>


          </Box>


          <Box>
            <Button className='mt-3' variant="contained" fullWidth><Link className='text-decoration-none text-white fw-bold' to="/Sign-in">Sign in</Link></Button>

          </Box>
          <Box>
            <Typography className='pt-4' variant='body2'>Don't Have an Account? <Link to="/Sign-up">Sign up</Link></Typography>
          </Box>
        </Card>

      </Box>

    </div>
  )
}

export default Signin