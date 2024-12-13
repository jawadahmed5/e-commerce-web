import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


// required functionality //
const signupSchema = yup.object({
  firstName: yup.string().required("First name is required!" ),
  lastName: yup.string().required("Last name is required!"),
  userEmail: yup.string().required("Email is required!"),
  userPassword: yup.string().trim().min(7, "Password must be at least 7 characters").max(15, "Password must be less than 15 characters").required("Password is required!")
}).required()


// eye password functionality //
const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: { firstName: "", lastName: "", userEmail: "", userPassword:"" },

    resolver: yupResolver(signupSchema),
  });


  console.log(errors);


  return (

    <form onSubmit={handleSubmit((data) => console.log(data))} >

      <div className='text-center'>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>


          <Card className='py-5 px-3 rounded-4 border-black' >


            <Box>
              <Typography variant='h4' >Let's Get Subscription</Typography>

              <Typography variant='body1'  >Welcome to FreshCart! Enter your email to get started.</Typography>
            </Box>

            <Box className="pt-3">

              <Controller control={control} name='firstName' render={({ field }) => (<TextField placeholder='First Name' fullWidth size='small'  error={errors.firstName ? true : false} {...field}>



              </TextField>)} />


             <Typography className='text-danger text-center'>{errors?.firstName?.message}</Typography>
            </Box>
            <Box className="pt-3">
              <Controller control={control} name='lastName' render={({ field }) => (<TextField placeholder='Last Name' fullWidth size='small' error={errors.lastName ? true : false}  {...field}></TextField>)} />
            <Typography className='text-danger text-center'>{errors?.lastName?.message}</Typography>
            </Box>
            <Box className="pt-3">
              <Controller control={control} name="userEmail" render={({ field }) => (
                <TextField placeholder='Email' size='small' error={errors.userEmail ? true : false}  fullWidth {...field}></TextField>
              )} />
<Typography className='text-danger text-center'> {errors?.userEmail?.message}</Typography>

            </Box>

            <Box className="pt-3"> 
              < Controller control={control} name="userPassword" render={({ field }) => (
                <TextField slotProps={{



                  input: {
                    endAdornment: (
                      <InputAdornment sx={{ cursor: "pointer" }} position="start" onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </InputAdornment>
                    ),
                  },
                }} placeholder='Password' size='small' error={ errors.userPassword ? true : false}  fullWidth {...field} type={showPassword ? "text" : "password"} ></TextField>


              )} />

              <Typography className='text-danger text-center '>{errors?.userPassword?.message}</Typography>
            </Box>
            <Box className="pt-3">
               <Button type='submit' className='fw-bold' variant="contained" fullWidth>Register</Button>
               {/* <Link to="/Sign-in" ></Link> */}
            </Box>


            <Box>
              <Link to="/Sign-in">
              <Button  variant="contained" fullWidth className='mt-3 text-decoration-none text-white fw-bold' >Sign in</Button>
              </Link> 
            </Box>
          </Card>

        </Box>

      </div>
    </form>
  )
}

export default Signup