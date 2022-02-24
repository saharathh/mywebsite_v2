import React from 'react';
import {Typography, Box} from '@mui/material';

const Paragraph = ({paragraph}) => {
    return (
        <>
        <Box sx={{
            color: '#899198',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'justify',
            fontSize: {
                xs: 16,
                sm: 16,
                md: 18,
                lg: 18,
            },
            m: {
                xs: 2,
                sm: 2,
                md: 2.5,
            },
            ml: {
                lg: 4,
            }}}>     
            {paragraph}
        </Box>
        </>
    )
}

export default Paragraph