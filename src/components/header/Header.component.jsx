import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = ({subHeader, Header, AdditionalHeader, textSubtitle}) => {
    return (
        <Box sx={{ py:4, mx: {
            xs: 1,
            sm: 1,
            md: 2,
            lg: 0,
        } }}>
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
                fontWeight: 'bold',
                fontSize: {
                    xs: 28,
                    sm: 28,
                    md: 32,
                    lg: 32,
                }
            }}>
                {Header}
            </Typography>
            <Typography sx={{
                color: '#F28346',
                fontSize: {
                    xs: 20,
                    sm: 20,
                    md: 24,
                    lg: 28,
                }
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
  