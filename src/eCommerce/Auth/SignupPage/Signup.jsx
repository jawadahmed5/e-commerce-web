import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation Schema
const signupSchema = yup.object({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  userEmail: yup.string().email('Invalid email').required('Email is required!'),
  userPassword: yup
    .string()
    .trim()
    .min(7, 'Password must be at least 7 characters')
    .max(15, 'Password must be less than 15 characters')
    .required('Password is required!'),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: '', lastName: '', userEmail: '', userPassword: '' },
    resolver: yupResolver(signupSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card className="py-5 px-3 rounded-4 border-black">
          <Box>
            <Typography variant="h4">Let's Get Subscription</Typography>
            <Typography variant="body1">Welcome to FreshCart! Enter your email to get started.</Typography>
          </Box>

          {/* First Name */}
          <Box className="pt-3">
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField
                  placeholder="First Name"
                  fullWidth
                  size="small"
                  error={!!errors.firstName}
                  {...field}
                />
              )}
            />
            <Typography className="text-danger text-center">{errors?.firstName?.message}</Typography>
          </Box>

          {/* Last Name */}
          <Box className="pt-3">
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField placeholder="Last Name" fullWidth size="small" error={!!errors.lastName} {...field} />
              )}
            />
            <Typography className="text-danger text-center">{errors?.lastName?.message}</Typography>
          </Box>

          {/* Email */}
          <Box className="pt-3">
            <Controller
              control={control}
              name="userEmail"
              render={({ field }) => (
                <TextField placeholder="Email" size="small" fullWidth error={!!errors.userEmail} {...field} />
              )}
            />
            <Typography className="text-danger text-center">{errors?.userEmail?.message}</Typography>
          </Box>

          {/* Password */}
          <Box className="pt-3">
            <Controller
              control={control}
              name="userPassword"
              render={({ field }) => (
                <TextField
                  placeholder="Password"
                  size="small"
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  error={!!errors.userPassword}
                  {...field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment sx={{ cursor: 'pointer' }} position="end" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Typography className="text-danger text-center">{errors?.userPassword?.message}</Typography>
          </Box>

          {/* Register Button */}
          <Box className="pt-3">
            <Button type="submit" className="fw-bold" variant="contained" fullWidth>
              Register
            </Button>
          </Box>

          {/* Sign-in Button */}
          <Box>
            <Link to="/Sign-in">
              <Button variant="contained" fullWidth className="mt-3 text-decoration-none text-white fw-bold">
                Sign in
              </Button>
            </Link>
          </Box>
        </Card>
      </Box>
    </form>
  );
};

export default Signup;
