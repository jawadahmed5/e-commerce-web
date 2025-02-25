import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoutes = ({ children }) => {
    const [token, setToken] = useState("");
const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
        console.log(token, "token");

    }, []);





    if (token) {

        return <>{children}</>
    } else {


       
       navigate("/")
       
    }





    
}

export default ProtectedRoutes;



