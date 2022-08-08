import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <Stack sx={{ margin: '1rem auto', width: '75%' }}>
            <Card>
                <Box sx={{ display: 'grid', placeContent: 'center' }}>
                    <CardHeader
                        sx={{ textAlign: 'center' }}
                        title='About Page'
                    />
                    <CardMedia
                        component="img"
                        sx={{ width: '100%' }}
                        // height="55%"
                        image='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/zetaoph.jpg'
                    // alt={data.title}
                    />
                </Box>
                <Box sx={{ backgroundColor: '#E7E6F5' }}>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" className='data-content' sx={{ textAlign: 'center' }}>
                            Welcome, I'm Full Stack Developer. In this blog page; worked React-Router, Global State Management: Context-Api, Firebase Authenticaiton-Realtime Database, Toastify,...
                        </Typography>
                    </CardContent>
                </Box>
                <CardHeader
                    avatar={
                        <Avatar sx={{ width: 50 }} src='https://cdn.britannica.com/92/152292-050-EAF28A45/Bald-eagle.jpg' />
                    }
                    title="Fatih Günaydın"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <a href="http://" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    </IconButton>
                    <IconButton aria-label="share" >
                        <a href="http://" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: 'black' }} /> </a>
                    </IconButton>
                </CardActions>
            </Card>

        </Stack >
    )
}

export default About