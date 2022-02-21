import React from 'react';
import { Container, Grid, Typography, Icon, IconButton, Stack } from '@mui/material';
import { IconContext } from 'react-icons';
import { IconsList } from './IconsList.js';


const CustomizedIconComponent = () => {
    const Icons = IconsList;
    return (
        <Container maxWidth="sm">
            <Grid container>
            {Icons.map(icon => {
                const TheIcon = icon.ref
                return (
                    <Grid key={icon.id} item xs={12} sm={6} md={4} mt={3}>
                        <Stack 
                        direction="column"
                        alignItems="center"
                        py={2}
                        >
                            <IconContext.Provider value={{color: "orange", size: "28px"}}>
                                <TheIcon />
                            </IconContext.Provider>
                            <Typography varient="h5" mt={2}>
                                {icon.name}
                            </Typography>
                        </Stack>
                    </Grid>
                )
            })}
            </Grid>
        </Container>
    )
}

export default CustomizedIconComponent