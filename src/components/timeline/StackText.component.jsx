import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

const StackText = ({year, text, subtext}) => {
    return (
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 3
        }}>
            <Typography sx={{
                mr: 5,
                fontWeight: 'bold'
            }}>
                {year}
            </Typography>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography sx={{
                    color: '#B0384D',
                    fontWeight: 600,
                }}>
                    {text}
                </Typography>
                <Typography sx={{
                    fontSize: 14,
                    color: '#F28346',
                }}>
                    {subtext}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default StackText;