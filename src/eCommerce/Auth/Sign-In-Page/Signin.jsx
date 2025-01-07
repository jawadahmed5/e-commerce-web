import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { data, Link, Navigate, useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import PrimarySearchAppBar from '../../HomePage/HomePage';
import axios from 'axios';
import { Email } from '@mui/icons-material';


const signinSchema = yup.object({
  userEmail: yup.string().required(),
  userPassword: yup.string().trim().min(7, "Password must be at least 7 characters").max(15, "Password must be less than 15 characters").required()

})

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { userEmail: "", userPassword: "", },

    resolver: yupResolver(signinSchema)

  });
  const navigate = useNavigate()

  const signinHandler = (data) => {

    const signinUser = async () => {
      const resp = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email: data.userEmail,
        password: data.userPassword
      })

      if (resp.data.access_token) {
        localStorage.setItem("token", resp.data.access_token)
      navigate("/");
      }

console.log(resp, "resp");



    }
    


signinUser();

  }

  console.log(errors);



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
                <Button type='submit' variant="contained" fullWidth className='mt-3 text-decoration-none text-white fw-bold' >Sign in</Button>
                {/* <Link to="/Sign-in"></Link> */}

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