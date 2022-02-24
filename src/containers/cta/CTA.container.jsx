import * as React from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, 
    Link, Grid, Box, LockOutlinedIcon, Typography, Container } from '@mui/material';

import { IoRocketSharp } from 'react-icons/io5';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="saharath.co">
        Saharath Harnroongroj
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function CTA() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container maxWidth="sm">
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography sx={{
                fontSize: 36,
                fontWeight: 500,
                color: '#B0384D',
                my: 1,
                mx: 2,
            }}>
                Let's Work Together!
           </Typography>
            <Typography sx={{
                fontSize: 24,
                fontWeight: 400,
                color: '#F28346',
            }}>
                Bring your business to success <IoRocketSharp />
            </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ 
              mt: 4, display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center'}}>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}