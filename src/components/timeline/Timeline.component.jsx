import React from 'react';
import { Container, Grid, Stack, Box, Typography, } from '@mui/material';
import StackText from './StackText.component';


const Timeline = () => {
    return (
        <Box sx={{
            display: 'flex',
            mx: {
                xs: 1,
                sm: 1,
                md: 2,
                lg: 0,
            },
        }}>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <StackText year="2015" text="Thamasat University" subtext="Bachelor's degree in Entreprenuership and Management"/>
                <StackText year="2020" text="Noble Development" subtext="Feasibility Analyst"/>
                <StackText year="2021" text="NIDA University" subtext="Master's degree in Communication Art and Management Innovation"/>
            </Stack>
        </Box>
    )
}

export default Timeline