import React from 'react';
import { Box, Button, Chip, Container, Grid, Paper, Stack, SvgIcon, Typography } from '@mui/material';
import Header from '../../components/header/Header.component';

const About = () => {
    return (
        <Container sx={{
            py: 8
        }}>
            <Grid container lg={7} md={6} sm={12}>
                <Grid item>
                    <Header subHeader="Inspiration" Header="About Me"/>
                    <Typography sx={{
                        color: '#899198',
                        fontWeight: 400,
                        letterSpacing: 0.5,
                        textAlign: 'justify',
                    }}>
                        Back in 2020, I was working as a feasibility analyst in the real estate industry, providing the market and financial feasibility of condominium projects to the executives. During that time, I was building one side project that completely changed my life.
                    </Typography>
                    <Typography sx={{
                        my: 2,
                        color: '#899198',
                        fontWeight: 400,
                        letterSpacing: 0.5,
                        textAlign: 'justify',
                    }}>
                       One of the tasks that I had to do was acquire the information about re-sales condominiums on the Internet. This task was time-consuming because you needed to do it manually; copy details from a website to an excel spreadsheet one by one. I was wondering whether there is a strategy to finish the task more efficiently.
                    </Typography>
                    <Typography sx={{
                        my: 2,
                        color: '#899198',
                        fontWeight: 400,
                        letterSpacing: 0.5,
                        textAlign: 'justify',
                    }}>
                       Fortunately, I came across the topic of web scraping using Selenium and learned how to do it with python as a side project. It was fascinating. My python web scraping code automatically collects data for me, significantly shortening my work time from 3 hours to only 10-20 minutes.
                    </Typography>
                    <Typography sx={{
                        my: 2,
                        color: '#899198',
                        fontWeight: 400,
                        letterSpacing: 0.5,
                        textAlign: 'justify',
                    }}>
                       But it doesn't end just web scraping. I began to explore other topics related to computer science as well. I realized that I might be interested in computer science more than I expected, so I chose to walk on the new path to be a developer who understands business and in-depth technical understanding of a developer.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About