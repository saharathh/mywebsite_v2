import React from 'react';
import { Container, Grid, Paper, Typography, Stack } from '@mui/material';
import { IconContext } from 'react-icons';
import { IconsList } from '../../components/icon/IconsList';
import Header from '../../components/header/Header.component';


const Tool = () => {
    const Icons = IconsList;
    return (
        <Container maxWidth='sm'>
            <Header subHeader="Skills" Header="Developer's toolkits" textSubtitle="Everything"/>
            <Grid container spacing={4}>
            {Icons.map(icon => {
                const TheIcon = icon.ref
                return (
                    <Grid key={icon.id} item xs={6} md={4} mt={3}>
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
                                <IconContext.Provider value={{color: 'orange', size: '28px'}}>
                                    <TheIcon />
                                </IconContext.Provider>
                                <Typography mt={2} sx={{
                                    fontSize: 14
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