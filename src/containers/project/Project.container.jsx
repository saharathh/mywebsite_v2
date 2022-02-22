import React from 'react';
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { FaReact, FaSass, FaDocker, FaPython } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const sections = [{
    id: 1,
    title: 'Feasibility Study',
    subtitle: 'Refine your greatest idea with the process of design thinking and financial feasibility study'
},
{
    id: 2,
    title: 'Front-end Development',
    subtitle: 'Design digital experience for your customers through front-end development and UX/UI principles'
},
{
    id: 3,
    title: 'Digital Marketing',
    subtitle: 'Pull your customers to your brand with high-quality content, SEO, and strategic brand management'
}];

const Expertise = () => {
    return (
        <Container maxWidth="md">
            <Grid sx={{
                m:10
            }}>
                <Paper>
                    <Box sx={{p:4, 
                        display:'flex',
                        borderColor: '#F28346',
                        borderRadius: '10%'
                    }}>
                        <IconContext.Provider value={{color: 'orange', size: '68px'}}>
                            <FaReact/>
                        </IconContext.Provider>
                        <Stack                            
                        direction='column'
                        alignItems='center'
                        px={4}>    
                            <Typography>
                                ABCD
                            </Typography>
                            <Typography>
                                ABCD
                            </Typography>
                        </Stack>
                    </Box>
                </Paper>
            </Grid>
        </Container>
    )
}

export default Expertise;