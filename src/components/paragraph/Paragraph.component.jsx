import React from 'react';
import {Typography} from '@mui/material';

const Paragraph = ({paragraph1, paragraph2, paragraph3, paragraph4, paragraph5}) => {
    return (
        <>
        <Typography sx={{
            color: '#899198',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'justify',
        }}>
           {paragraph1}
        </Typography>
        <Typography sx={{
            my: 2,
            color: '#899198',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'justify',
        }}>
           {paragraph2}
        </Typography>
        <Typography sx={{
            my: 2,
            color: '#899198',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'justify',
        }}>
          {paragraph3}
        </Typography>
        <Typography sx={{
            my: 2,
            color: '#899198',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'justify',
        }}>
           {paragraph4}
        </Typography>
        <Typography sx={{
            color: '#899198',
            fontWeight: 400,
            letterSpacing: 0.5,
            textAlign: 'justify',
        }}>
            {paragraph5}
        </Typography>
        </>
    )
}

export default Paragraph