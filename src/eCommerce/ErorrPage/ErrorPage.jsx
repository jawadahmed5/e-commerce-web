// import { Height } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <Box sx={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>

            <Box >
                {/* <Typography variant='h1'   >Oops!</Typography> */}


                <Box>

                    <Typography variant='h3'   >404 - Page Not Found</Typography>
                </Box>


                <Box className="pt-3">


                    <Typography variant='body2'   >We searched the space, but we couldn't find the page you're looking for.</Typography>
                </Box>

                <Box className="text-center pt-3">
                    <Link to="/">
                    <Button
                    
                    variant='contained'> Go Back Home</Button>
                    </Link>
                
                </Box>

            </Box>

        </Box>
    )
}
