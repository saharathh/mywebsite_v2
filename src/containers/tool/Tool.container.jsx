import React from 'react';
import { Container, Grid, Paper, Typography, Stack } from '@mui/material';
import { IconContext } from 'react-icons';
import { IconsList } from '../../components/icon/IconsList';
import Header from '../../components/header/Header.component';


const Tool = () => {
    const Icons = IconsList;
    return (
        <Container maxWidth='md' sx={{mt:12, mb:24}}>
            <Header 
                subHeader="Skills" 
                Header="Developer's Toolkits" 
                textSubtitle="Technology always changing. That's why I can't stop learning, so that I can provide value to my clients. Most of these tools I already familiar with; only few of them that I'm currently learning."
            />
            <Grid container spacing={3}>
            {Icons.map(icon => {
                const TheIcon = icon.ref
                return (
                    <Grid item key={icon.id} mt={3} xs={4} sm={3} md={3} lg={3}>
                        <Paper sx={{
                            p:1,
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
                                <Typography mt={2} sx={{
                                    fontWeight: 450,
                                    letterSpacing: {
                                        xs: 0,
                                        sm: 0,
                                        md: 1,
                                        lg: 1,
                                    },
                                    fontSize: {
                                        xs: 10,
                                        sm: 10,
                                        md: 14,
                                        lg: 14
                                    }
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