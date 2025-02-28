import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);

        if (!storedToken) {
            navigate("/"); // Redirect only when token is missing
        }
    }, [navigate]); // Dependency array me `navigate` add karna zaroori hai

    if (!token) {
        return null; // Jab tak check ho raha ho, kuch mat render karo
    }

    return <>{children}</>;
};

export default ProtectedRoutes;
