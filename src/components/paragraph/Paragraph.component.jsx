import React from 'react';
import {Typography, Box} from '@mui/material';

const Paragraph = ({paragraph}) => {
    return (
        <>
        <Box sx={{
            fontWeight: 400,
            fontFamily: 'Helvetica',
            lineHeight: 1.5,
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
            <Typography sx={{color: '#899198'}}>     
                {paragraph}
            </Typography>
        </Box>
        </>
    )
}

export default Paragraph