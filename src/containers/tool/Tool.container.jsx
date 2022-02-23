import React from 'react';
import { Container, Grid, Paper, Typography, Stack } from '@mui/material';
import { IconContext } from 'react-icons';
import { IconsList } from '../../components/icon/IconsList';
import Header from '../../components/header/Header.component';


const Tool = () => {
    const Icons = IconsList;
    return (
        <Container maxWidth='md' sx={{my:12}}>
            <Header 
                subHeader="Skills" 
                Header="Developer's Toolkits" 
                textSubtitle="Technology always changing. That's why I can't stop learning, so that I can provide value to my clients. Most of these tools I already familiar with; only few of them that I'm currently learning."
            />
            <Grid container spacing={6}>
            {Icons.map(icon => {
                const TheIcon = icon.ref
                return (
                    <Grid key={icon.id} item xs={6} md={4} mt={3} lg={3}>
                        <Paper sx={{
                            border: 1,
                            borderColor: '#F28346',
                            borderRadius: '10%',
                            transition: 'transform', 
                            '&:hover':{
                                color: 'orange',
                                backgroundColor: 'grey',
                                transform: 'scale(1.1) perspective(0px)',
                                boxShadow: '0 2px 2px',
                                cursor: 'default'
                                }}}>
                            <Stack 
                            direction='column'
                            alignItems='center'
                            py={2}
                            >
                                <IconContext.Provider value={{
                                    size: '32px',
                                    color: '#f7b42c',
                                    }}>
                                    <TheIcon />
                                </IconContext.Provider>
                                <Typography mt={3} sx={{
                                    fontSize: 14,
                                    fontWeight: 450,
                                    letterSpacing: 1,
                                }}>
                                    {icon.name}
                                </Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                )
            })}
            </Grid>
        </Container>
    )
}

export default Tool