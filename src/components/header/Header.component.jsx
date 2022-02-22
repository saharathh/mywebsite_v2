import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = ({subHeader, Header, textSubtitle}) => {
    return (
        <Box sx={{ py:4 }}>
            <Typography varient="h5" sx={{
                color: 'orange',
                fontSize: 14,
                fontFamily: 'Helvetica',
                letterSpacing: 1,
                fontWeight: 'bold'
            }}>
                {subHeader}
            </Typography>
            <Typography varient="h2" sx={{
                color: '#B0384D',
                fontSize: 28,
                fontWeight: 'bold'
            }}>
                {Header}
            </Typography>
            <Typography varient="subtitle" sx={{
                color: '#899198',
                fontSize: 16,
                fontWeight: 400
            }}>
                {textSubtitle}
            </Typography>
        </Box>
    );
  }
  
  export default Header;
  