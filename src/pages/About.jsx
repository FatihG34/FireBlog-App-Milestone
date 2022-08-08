import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <Stack sx={{ margin: '1rem auto', width: '50%' }}>
            <Card>
                <Box sx={{ backgroundColor: '#E7E6F5' }}>
                    <CardHeader
                        sx={{ textAlign: 'center' }}
                        title='About This Blog App'
                    />
                    <CardHeader
                        avatar={
                            <Avatar sx={{ width: 50 }} src='https://cdn.britannica.com/92/152292-050-EAF28A45/Bald-eagle.jpg' />
                        }
                        title="<F & G /> Blog"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" className='data-content' sx={{ textAlign: 'center' }}>
                            Welcome, I'm Fatih, I'm Full Stack Developer. In this blog page; worked React-Router, Global State Management: Context-Api, Firebase Authenticaiton-Realtime Database, Toastify,...
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'grid', placeContent: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%' }}
                        // height="70%"
                        image='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/zetaoph.jpg'
                        alt='spacePhoto'
                    />
                </Box>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <a href="https://www.linkedin.com/in/fatih-g%C3%BCnaydin/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    </IconButton>
                    <IconButton aria-label="share" >
                        <a href="https://github.com/FatihG34" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: 'black' }} /> </a>
                    </IconButton>
                </CardActions>
            </Card>

        </Stack >
    )
}

export default About