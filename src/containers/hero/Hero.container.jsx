import React, { useState } from 'react';
import { Container, Button, Box, Grid, Stack, Typography } from '@mui/material'
import { useSpring, animated, config } from 'react-spring';

//icons
import { BsGraphUp } from 'react-icons/bs';
import { FaAppleAlt, FaPaintBrush, FaPodcast, FaTools } from 'react-icons/fa';
import { GiShinyApple, GiSpellBook, GiFizzingFlask, GiLoveSong } from 'react-icons/gi';
import { MdCastForEducation } from 'react-icons/md';

//images
import StartUp from '../../assets/startup.svg';
import Education from '../../assets/education.svg';
import Read from '../../assets/read.svg';
import Music from '../../assets/music.svg';
import Idea from '../../assets/idea.svg';
import Creative from '../../assets/creative.svg';
import Lost from '../../assets/lost.svg';
import Love from '../../assets/love.svg';
import Graph from '../../assets/graph.svg';

const taglines = [
    {   id: 1,
        quote: "A T-shaped skill Professional",
        icon_ref: FaTools,
        pic_ref: StartUp,
    },
    {
        id: 2,
        quote: "A life-long Learner",
        icon_ref: MdCastForEducation,
        pic_ref: Education
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
        quote: "A Digital Marketer",
        icon_ref: GiLoveSong,
        pic_ref: Lost,
    },
    {
        id: 7,
        quote: "A Feasibility Analyst",
        icon_ref: BsGraphUp,
        pic_ref: Graph,
    },
    {
        id: 8,
        quote: "Love Listening to Podcast",
        icon_ref: FaPodcast,
        pic_ref: Music,
    },
    {
        id: 9,
        quote: "Love your given Apple !!",
        icon_ref: GiShinyApple,
        pic_ref: Love,
    }];

const Hero = () => {
    const [ activeTagline, setTagline ] = useState(0);

    const woop = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        config: { duration: "100"},
        config: config.molasses,
    });

    const TaglineRandomizer = () => {
        setTagline(() => {
            let newTagline = Math.floor(Math.random() * taglines.length);
            while (newTagline === activeTagline) {
                newTagline = Math.floor(Math.random() * taglines.length);
            }
            return newTagline;
        })
    }

    const TheIcon = taglines[activeTagline].icon_ref
    const ThePicture = taglines[activeTagline].pic_ref

    return (
        <div id="home">
            <Container sx={{my: {
                xs: 20,
                sm: 20,
                md: 30,
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
                                fontFamily: 'Helvetica',
                                fontSize: {
                                    xs: 40,
                                    sm: 40,
                                    md: 48,
                                    lg: 52,
                                }
                            }}>
                            Saharath Harnroongroj
                        </Box>
                        <Stack sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <animated.div style={woop}
                            onAnimationEnd={woop}>
                                <Box key={taglines.id} sx={{
                                        color: '#F28346',
                                        fontWeight: 'bold',
                                        letterSpacing: 1,
                                        textTransform: 'Capitalize',
                                        fontFamily: 'Helvetica',
                                        pr: 1,
                                        mt: {
                                            xs: 3,
                                            sm: 3,
                                            md: 1,
                                            lg: 1,
                                        },
                                        fontSize: {
                                            xs: 20,
                                            sm: 20,
                                            md: 28,
                                            lg: 42,
                                        }
                                    }}>
                                    {taglines[activeTagline].quote}
                                </Box>
                            </animated.div>
                            <animated.div style={woop}>
                                <Box key={taglines.id} sx={{
                                        color: 'orange',
                                        pl: 2,
                                        mt: 1,
                                        fontSize: {
                                            xs: 28,
                                            sm: 28,
                                            md: 28,
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
                            </animated.div>
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
                                        display: 'flex', 
                                        ml: 1
                                        }}>
                                        <FaAppleAlt size="18"/>
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
                                <Button href="#project" variant="outlined" size="medium" sx={{
                                    color: '#fc575e',
                                    borderRadius: '12px',
                                    borderColor: '#fc575e',
                                    ml: 3,
                                    mt: 5,
                                    p: {
                                        xs: 0.75,
                                        sm: 0.75,
                                        md: 1.65,
                                        lg: 1.65,
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
                    <Grid item lg={4} sm={12} xs={12} md={4} sx={{
                        my: {
                            xs: 6,
                            sm: 6,
                            md: 0,
                            lg: 0,
                        }
                    }}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <animated.div style={woop}>
                                <img 
                                    src={ThePicture}
                                    style={{height: '90%', width: '90%'}}
                                    alt="svg picture"
                                    >
                                </img>
                            </animated.div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Hero;
