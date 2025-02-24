import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"


const signinSchema = yup.object({
    userEmail: yup.string().required(),
    userPassword: yup.string().trim().min(7, "Password must be at least 7 characters").max(15, "Password must be less than 15 characters").required()

})



const useSignin = () => {
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




        }



        signinUser();

    }

    return { control, handleSubmit, signinHandler, showPassword, errors, setShowPassword }
}

export default useSignin