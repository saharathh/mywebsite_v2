import React, { useState, useEffect } from 'react';
import { Container, Button, Box, Grid, Stack, Typography } from '@mui/material'
import { BsGraphUp } from 'react-icons/bs';
import { FaAppleAlt, FaPaintBrush, FaPodcast, FaTools } from 'react-icons/fa';
import { GiShinyApple, GiSpellBook, GiFizzingFlask, GiLoveSong } from 'react-icons/gi';
import StartUp from '../../assets/startup.svg';
import Read from '../../assets/read.svg';
import Music from '../../assets/music.svg';
import Idea from '../../assets/idea.svg';
import Creative from '../../assets/creative.svg';
import Lost from '../../assets/lost.svg';
import Love from '../../assets/love.svg';
import Graph from '../../assets/graph.svg';

const taglines = [
    {   id: 1,
        quote: "A T-shaped skill Developer",
        icon_ref: FaTools,
        pic_ref: StartUp,
    },
    {
        id: 2,
        quote: "Love your given Apple !!",
        icon_ref: GiShinyApple,
        pic_ref: Love,
    },
    {
        id: 3,
        quote: "love Reading Books",
        icon_ref: GiSpellBook,
        pic_ref: Read,
    },
    {
        id: 4,
        quote: "has a lot of ideas !!",
        icon_ref: GiFizzingFlask,
        pic_ref: Idea,
    },
    {
        id: 5,
        quote: "is Creative !!",
        icon_ref: FaPaintBrush,
        pic_ref: Creative,
    },
    {
        id: 6,
        quote: "is a Digital Marketer",
        icon_ref: GiLoveSong,
        pic_ref: Lost,
    },
    {
        id: 7,
        quote: "is a Feasibility Analyst",
        icon_ref: BsGraphUp,
        pic_ref: Graph,
    },
    {
        id: 8,
        quote: "Love Listening to Podcast",
        icon_ref: FaPodcast,
        pic_ref: Music,
    }];

const Hero = () => {
    const [ activeTagline, setTagline] = useState(0);
    const [ activePicture, setPicture ] = useState(0);

    const TaglineRandomizer = () => {
        const quote_len = taglines.length;
        setTagline(Math.floor(Math.random() * quote_len));
    }

    useEffect(() => {
        const pic_len = taglines.length;
        setPicture(() => {
            Math.floor(Math.random() * pic_len);
        })
    }, [])

    const TheIcon = taglines[activeTagline].icon_ref
    const ThePicture = taglines[activeTagline].pic_ref

    return (
        <Container href="#home" sx={{my: {
            xs: 30,
            sm: 30,
            md: 48,
            lg: 30,
        }}}>
            <Grid container sx={{
                px: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 0,
                }
            }}>
                <Grid item lg={8} sm={12} md={8}>
                    <Box>
                        <Typography sx={{
                            color: 'orange',
                            fontWeight: 'bold',
                            letterSpacing: 1,
                            fontSize: {
                                xs: 14,
                                sm: 14,
                                md: 16,
                                lg: 16,
                            }
                        }}>
                            Hi!, My Name is 
                        </Typography>
                    </Box>
                    <Box sx={{
                            color: '#B0384D',
                            letterSpacing: 1,
                            fontWeight: 'bold',
                            fontSize: {
                                xs: 44,
                                sm: 44,
                                md: 48,
                                lg: 48,
                            }
                        }}>
                        Saharath Harnroongroj
                    </Box>
                    <Stack sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Box key={taglines.id} sx={{
                                color: '#F28346',
                                fontWeight: 'bold',
                                letterSpacing: 1,
                                textTransform: 'Capitalize',
                                pr: 1,
                                mt: 1,
                                fontSize: {
                                    xs: 20,
                                    sm: 20,
                                    md: 36,
                                    lg: 42,
                                }
                            }}>
                            {taglines[activeTagline].quote}
                        </Box>
                        <Box key={taglines.id} sx={{
                                color: 'orange',
                                pl: 2,
                                mt: 1,
                                fontSize: {
                                    xs: 28,
                                    sm: 28,
                                    md: 36,
                                    lg: 42,
                                },
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'flex',
                                    lg: 'flex'
                                }
                            }}>
                            <TheIcon />
                        </Box>
                    </Stack>
                    <Stack sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Box>
                            <Button variant="contained" size="medium" onClick={TaglineRandomizer} sx={{
                                background: 'linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)',
                                mt: 5,
                                borderRadius: '10px',
                            }}>
                                <Box sx={{
                                    fontSize: {
                                        xs: 14,
                                        sm: 14,
                                        md: 18,
                                        lg: 18,
                                    },
                                    p: {
                                        xs: 0,
                                        sm: 0,
                                        md: 0.5,
                                        lg: 0.5
                                    }
                                }}>
                                    Change Me
                                </Box>
                                <Box sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'none',
                                        md: 'flex',
                                        lg: 'flex',
                                    }, px: {
                                        xs: 0,
                                        sm: 0,
                                        md: 1,
                                        lg: 1,
                                    }}}>
                                    <FaAppleAlt size="24"/>
                                </Box>
                            </Button>
                        </Box>
                        <Box sx={{
                                    textTransform: 'Capitalize',
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                    fontSize: {
                                        xs: 20,
                                        sm: 20,
                                        md: 24,
                                        lg: 24,
                                    },
                                }}>
                            <Button variant="outlined" size="medium" sx={{
                                color: '#fc575e',
                                borderRadius: '12px',
                                borderColor: '#fc575e',
                                ml: 3,
                                mt: 5,
                                p: {
                                    xs: 0,
                                    sm: 0,
                                    md: 1.5,
                                    lg: 1.5,
                                },
                                px: {
                                    xs: 0,
                                    sm: 0,
                                    md: 3,
                                    lg: 3,
                                },
                                '&:hover': {
                                    borderColor: '#fc575e',
                                }
                            }}>
                                View Project
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item lg={4} sm={12} md={4}>
                    <Box sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'flex',
                            lg: 'flex',
                        }
                    }}>
                        <img 
                            src={ThePicture}
                            style={{height: '80%', width: '80%'}}
                            alt="svg picture"
                            >
                        </img>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero;
