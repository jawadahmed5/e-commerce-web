import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { data, Link, Navigate, useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from 'react-hook-form';
import useSignin from './useSignin';



const Signin = () => {

  const { control, handleSubmit, signinHandler, showPassword, errors, setShowPassword } = useSignin();

  return (
    <>


      <form onSubmit={handleSubmit((data) => signinHandler(data)
      )}>
        <div className='text-center'>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>


            <Card className='py-5 px-3 rounded-4 border-black '  >



              <Box>
                <Typography variant='h4' >Sign in to Subscription Store</Typography>

                <Typography variant='body1'  >Welcome back to Subscription Store! Enter your email to get started.</Typography>
              </Box>





              <Box className='pt-3'>
                <Controller control={control} name="userEmail" render={({ field }) => (<TextField placeholder='Email' size='small' error={errors.userEmail ? true : false} fullWidth {...field}></TextField>)} />

                <Typography className='text-danger text-center'>{errors?.userEmail?.message}</Typography>
              </Box>






              <Box className='pt-3'>

                <Controller control={control} name="userPassword" render={({ field }) => <TextField placeholder='Password' type={showPassword ? "text" : "password"} size='small' error={errors.userPassword ? true : false} fullWidth {...field} slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment sx={{ cursor: "pointer" }} position="start" onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </InputAdornment>
                    ),
                  },
                }}></TextField>
                } />

                <Typography className='text-danger text-canter'>{errors?.userPassword?.message}</Typography>


              </Box>

              <Box>
              <Link to="/">
                <Button type='submit' variant="contained" fullWidth className='mt-3 text-decoration-none text-white fw-bold' >Sign in</Button>
                 </Link>  
              </Box>
              <Box>
                <Typography className='pt-4' variant='body2'>Don't Have an Account? <Link to="/Sign-up">Sign up</Link></Typography>
              </Box>
            </Card>

          </Box>

        </div>
      </form>
    </>
  )
}

export default Signin