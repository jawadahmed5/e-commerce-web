import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"


const useSignup = () => {



    const signupSchema = yup.object({
        firstName: yup.string().required("First name is required!"),
        lastName: yup.string().required("Last name is required!"),
        userEmail: yup.string().required("Email is required!"),
        userPassword: yup.string().trim().min(7, "Password must be at least 7 characters").max(15, "Password must be less than 15 characters").required("Password is required!")
      }).required()
      
      




    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors }, } = useForm({
      defaultValues: { firstName: "", lastName: "", userEmail: "", userPassword: "" },
  
      resolver: yupResolver(signupSchema),
    });
  



  return{ control, handleSubmit,  showPassword, errors, setShowPassword }
  
}

export default useSignup