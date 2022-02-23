import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = ({subHeader, Header, AdditionalHeader, textSubtitle}) => {
    return (
        <Box sx={{ py:4 }}>
            <Typography sx={{
                color: 'orange',
                fontSize: 14,
                fontFamily: 'Helvetica',
                letterSpacing: 1,
                fontWeight: 'bold'
            }}>
                {subHeader}
            </Typography>
            <Typography sx={{
                mb: 1,
                color: '#B0384D',
                fontSize: 32,
                fontWeight: 'bold'
            }}>
                {Header}
            </Typography>
            <Typography sx={{
                color: '#F28346',
                fontSize: 24,
            }}>
                {AdditionalHeader}
            </Typography>
            <Typography sx={{
                color: '#899198',
                fontSize: 16,
                fontWeight: 400,
            }}>
                {textSubtitle}
            </Typography>
        </Box>
    );
  }
  
  export default Header;
  