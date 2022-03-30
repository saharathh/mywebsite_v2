import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaGem, FaWordpress } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { GiShinyApple } from 'react-icons/gi';
import Header from '../../components/header/Header.component';
import Cart from '../../assets/cart.svg';
import Web from '../../assets/web.svg';
import Monitor from '../../assets/monitor.svg';
import CMS from '../../assets/cms.svg';

const projects = [{
    id: 1,
    title: 'Full-stack E-Commerce Website',
    progress: 'on-going',
    subtitle: "I built an e-commerce website for a korean-style bag brand called Puffle with MERN Stack and deployed in Heroku.",
    github_link: 'https://github.com/saharathh/puffle',
    external_link: 'https://puffleprojectecommerce.herokuapp.com/',
    skills: 'ReactJs, ExpressJS, MongoDB, NodeJS, Material-UI, Scss, UX/UI Design',
    icon_ref: BsFillCartCheckFill,
    pic_ref: Cart
},
{
    id: 2,
    title: "Contentbooknotes: WordPress-based Content Website",
    progress: 'on-going',
    subtitle: "I am developing, designing a WordPress-based Website called Contentbooknotes, and focusing on writing long-form, research-based content about business, technology, and productivity. You can visit my writing here.",
    github_link: 'none',
    external_link: 'https://contentbooknotes.com/deep-work/',
    skills: 'Content Writing, SEO, Brand Management, UX/UI Design',
    icon_ref: FaWordpress,
    pic_ref: CMS
},
{
    id: 3,
    title: "My Portfolio Website",
    progress: 'on-going',
    subtitle: "I always learn about new technology, frameworks or libraries that can boost my quality of work. Next time you visit this website, it might not look the same, but I will make sure that it will be better.",
    github_link: 'https://github.com/saharathh/mywebsite_v2',
    external_link: 'saharath',
    skills: 'ReactJs, Material-UI, UX/UI Design',
    icon_ref: GiShinyApple,
    pic_ref: Web
},
{
    id: 4,
    title: 'Full-Stack Social Monitoring Tool Prototype',
    progress: 'on-going',
    subtitle: "I'm interviewing digital marketers and content creators to find their absolute need features and build my social monitoring tool powered by NLP technology based on the interview's insight.",
    github_link: 'none',
    skills: 'MongoDB, ExpressJS, ReactJS, NodeJS, TwitterAPI, Pandas, Scikit-learn, Machine Learning',
    external_link: 'none',
    icon_ref: FaGem,
    pic_ref: Monitor
},];



const Project = () => {
    return (
        <div id="project">
            <Container sx={{
                py:12
            }}>
                <Header 
                    subHeader="Projects" 
                    Header="My Projects" 
                />
                <Grid container spacing={4}>
                {projects.map(project => {
                    const TheIconTitle = project.icon_ref
                    const TheSvg = project.pic_ref
                    return (
                        <Grid item key={project.id} md={12} lg={12}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                overflow: 'hidden',
                                border: 1,
                                borderColor: '#E0E3E7',
                                borderRadius: '12px',
                                boxShadow: 1,
                            }}>
                            <Box sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'flex',
                                    lg: 'flex'
                                }
                            }}>
                                <img
                                    src={TheSvg}
                                    style={{height: 230, width: 280, padding: '2.5rem',}}
                                    alt="svg logo"
                                    >
                                </img>
                            </Box>
                            <Box sx={{
                                display: {
                                    xs: 'flex',
                                    sm: 'flex',
                                    md: 'none',
                                    lg: 'none'
                                },
                            }}>
                                <img
                                    src={TheSvg}
                                    style={{height: '90%', width: '90%', padding: '2rem',}}
                                    alt="svg logo"
                                    >
                                </img>
                            </Box>                    
                                <Stack sx={{
                                    direction:'column',
                                    p: 3,
                                    alignItems: {
                                        xs: 'center',
                                        md: 'flex-start',
                                        lg: 'flex-start',
                                    }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Box sx={{
                                            p: 2,
                                            display: {
                                                xs: 'none',
                                                sm: 'none',
                                                md: 'flex',
                                                lg: 'flex',
                                            },
                                        }}>
                                            <IconContext.Provider value={{color: '#B0384D', size: '28px'}}>
                                                <TheIconTitle />
                                            </IconContext.Provider>
                                        </Box>
                                        <Box sx={{
                                            display: 'in-line',
                                            alignItems: 'center',
                                            fontFamily: 'Helvetica',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            fontSize: {
                                                xs: 16,
                                                sm: 16,
                                                md: 18,
                                                lg: 18,
                                            }
                                        }}>
                                            {project.title}
                                        </Box>
                                    </Box>
                                    <Typography sx={{
                                        px: 2,
                                        py: 1,
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: '#899198',
                                        display: {
                                            xs: 'none',
                                            sm: 'none',
                                            md: 'flex',
                                            lg: 'flex',
                                        },
                                    }}>
                                        {project.subtitle}
                                    </Typography>
                                    <Box sx={{
                                        p: {
                                            xs: 0,
                                            sm: 0,
                                            md: 2,
                                            lg: 2,
                                        },
                                        py: {
                                            xs: 1,
                                            sm: 1,
                                        },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography sx={{
                                            pr: {
                                                xs: 0,
                                                sm: 0,
                                                md: 1,
                                                lg: 1,
                                            },
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#B0384D',
                                            display: { xs:'none', sm:'none', md: 'none', lg: 'flex'},
                                        }}>
                                            Skills : 
                                        </Typography>
                                        <Typography sx={{
                                            pt: '1px',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica',
                                            fontWeight: 400,
                                            color: '#B0384D',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            {project.skills}
                                        </Typography>
                                    </Box>
                                    <Stack sx={{display: 'flex', flexDirection: 'row', textAlign: 'center'}}>
                                    {project.external_link === 'none' ? (
                                        <Button variant="contained" disabled sx={{
                                            px: 2,
                                            m: 2}}>
                                            View Project
                                        </Button>
                                    ) :
                                    project.external_link === 'saharath' ? (
                                        <Button variant="contained" disabled sx={{
                                            px: 2,
                                            m: 2}}>
                                            You're here!
                                        </Button>
                                    )
                                    : (
                                        <Button variant="contained" 
                                        href={project.external_link} 
                                        sx={{
                                            backgroundColor: '#F28346',
                                            px: 2,
                                            m: 2,
                                            '&:hover': {
                                                backgroundColor: '#B0384D',}
                                        }}>
                                            View Project
                                        </Button>
                                    )}
                                    {project.github_link === 'none' ? (
                                        <Button variant="outlined" disabled sx={{
                                            px: 2,
                                            m: 2}}>
                                            View GitHub
                                        </Button>
                                    ) : (
                                        <Button variant="outlined" 
                                        href={project.github_link} 
                                        sx={{
                                            color: '#F28346',
                                            borderColor: '#F28346',
                                            px: 2,
                                            m: 2,
                                            '&:hover': {
                                                borderColor: '#B0384D',
                                                color: '#B0384D'}
                                        }}>
                                            View GitHub
                                        </Button>
                                    )}
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    )})}
                </Grid>
            </Container>
        </div>
    )
}

export default Project;