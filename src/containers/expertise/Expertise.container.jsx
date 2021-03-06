import React from 'react';
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { FaMobileAlt, FaRegLightbulb, FaRegThumbsUp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Header from '../../components/header/Header.component';

const sections = [{
    id: 1,
    title: 'Feasibility Study',
    subtitle: 'Refine your greatest idea with the process of design thinking, market and financial feasibility studies',
    iconref: FaRegLightbulb 
},
{
    id: 2,
    title: 'Front-end Development',
    subtitle: 'Design digital experience for your customers through front-end development and UX/UI principles',
    iconref: FaMobileAlt
},
{
    id: 3,
    title: 'Digital Marketing',
    subtitle: 'Pull your customers to your brand with high-quality content, SEO, and strategic brand management',
    iconref: FaRegThumbsUp
}];

const Expertise = () => {
    return (
        <div id="expertise"> 
            <Container sx={{py: {
                xs: 8,
                sm: 8,
                md: 14,
                lg: 14,
            }}}>
                <Header subHeader="Expertises" Header="Business, Design, and Technology" AdditionalHeader="Three components for your business success"/>
                <Grid container spacing={4}>
                {sections.map(section => {
                    const TheIconTitle = section.iconref
                    return (
                        <Grid item key={section.id} lg={4} md={4}>
                            <Paper sx={{
                                p:2,
                                mt: 2,
                                border: 1,
                                borderRadius: '12px',
                                borderColor: '#E0E3E7'}}>
                                <Box sx={{
                                    px: 2,
                                    pt: 2,
                                    display: 'flex',
                                }}>
                                    <IconContext.Provider value={{color: '#B0384D', size: '24px'}}>
                                        <TheIconTitle />
                                    </IconContext.Provider>
                                    <Typography sx={{
                                        px:2,
                                        fontWeight: 'bold',
                                    }}>
                                        {section.title}
                                    </Typography>
                                </Box>
                                <Stack                            
                                direction='column'
                                alignItems='flex-start'
                                sx={{
                                    py:3,
                                    px:2
                                }}
                                >    
                                    <Typography sx={{
                                        color: '#899198',
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}>
                                        {section.subtitle}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    )
                })}
                </Grid>
            </Container>
        </div>
    )
}

export default Expertise;