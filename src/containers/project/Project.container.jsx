import React from 'react';
import { Box, Button, Chip, Container, Grid, Paper, Stack, SvgIcon, Typography } from '@mui/material'
import { FaFireAlt, FaFlask, FaGem, FaFire, FaFileDownload } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { MdWebAsset } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { GiShinyApple } from 'react-icons/gi';
import Header from '../../components/header/Header.component';
import { ReactComponent as Cart } from './cart.svg';
import { ReactComponent as Robot } from './robot.svg';
import { ReactComponent as Web } from './web.svg';
import { ReactComponent as Monitor} from './monitor.svg';

const projects = [{
    id: 1,
    title: 'E-Commerce Website',
    progress: 'Finished',
    subtitle: "A singple-page web application for fashion businessses. Fully responsive with log-in features, StripeAPI for payment method, and routing with React-router-dom.",
    github_link: 'https://github.com/saharathh/e_commerce_project_1',
    skills: 'ReactJs, Redux, Sass, Firebase',
    icon_ref: FiShoppingCart,
    pic_ref: Cart
},
{
    id: 2,
    title: "Gather 300+ pages of customer's review in 20 minutes",
    progress: 'Finished',
    subtitle: 'Gathering data from the Internet can be time-consuming; With knowledge in web scraping, it can save your time from gathering data by at least 50%',
    github_link: '',
    skills: 'Python, Selenium, Pandas, Web Scraping',
    icon_ref: MdWebAsset,
    pic_ref: Robot
},
{
    id: 3,
    title: 'My Website',
    progress: 'on-going',
    subtitle: "I always learn about new technology, frameworks or libraries that can boost my quality of work. Next time you visit this website, it might not look the same, but I will make sure that it will be better.",
    github_link: 'https://github.com/saharathh/mywebsite_v2',
    skills: 'ReactJs, MatterJS, Material-UI, Sass, Framer Motion, Firebase',
    icon_ref: GiShinyApple,
    pic_ref: Web
},
{
    id: 4,
    title: 'Independent Study : Full-Stack Social Monitoring Tool Prototype',
    progress: 'on-going',
    subtitle: "I'm interviewing digital marketers and content creators to find their absolute need features and build my social monitoring tool powered by NLP technology based on the interview's insight.",
    github_link: '',
    skills: 'MongoDB, ExpressJS, ReactJS, NodeJS, TwitterAPI, Scrapy, Pandas, Scikit-learn, Machine Learning',
    icon_ref: FaGem,
    pic_ref: Monitor
},];



const Project = () => {
    return (
        <Container sx={{
            py:8
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
                            <Stack sx={{
                                direction:'column',
                                alignItems:'flex-start',
                                px: 3,
                                py: 3
                            }}>
                                <Box sx={{
                                    p: 2,
                                    display: 'flex',
                                }}>
                                    <IconContext.Provider value={{color: '#B0384D', size: '24px'}}>
                                        <TheIconTitle />
                                    </IconContext.Provider>
                                    <Typography sx={{
                                        px:2,
                                        fontWeight: 'bold',
                                    }}>
                                        {project.title}
                                    </Typography>
                                    <Chip label={project.progress} size='small' sx={{
                                        px: 1,
                                    }}/>
                                </Box>
                                <Typography sx={{
                                    px: 2,
                                    py: 1,
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: '#899198'
                                }}>
                                    {project.subtitle}
                                </Typography>
                                <Box sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Typography sx={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: '#B0384D',
                                    }}>
                                        Skills: 
                                    </Typography>
                                    <Typography sx={{
                                        pl: 2,
                                        pt: '1px',
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: '#B0384D',
                                    }}>
                                        {project.skills}
                                    </Typography>
                                </Box>
                                <Button variant="contained" href={project.github_link} sx={{
                                    backgroundColor: '#F28346',
                                    px: 2,
                                    mx: 2,
                                }}>
                                    View Project
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                )})}
            </Grid>
        </Container>
    )
}

export default Project;