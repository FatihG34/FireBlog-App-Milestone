import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Box, Button, Grid, Stack } from '@mui/material';
import { useFetch } from '../helpers/databaseFunctions';
import { AuthUserContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const { currentUser } = React.useContext(AuthUserContext);
    const { state } = useLocation()
    const { data } = state
    console.log(data)
    return (
        <Stack sx={{ width: '90vw', height: '90vh', margin: '1rem auto' }}>
            <Card>
                <CardMedia
                    component="img"
                    height="60%"
                    image={data.imageUrl}
                    alt={data.title}
                />
                <Box sx={{ backgroundColor: '#E7E6F5' }}>
                    <CardHeader
                        title={data.title}
                        subheader={(currentUser.metadata.creationTime).slice(5, 16)}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" className='data-content'>
                            {data.content}
                        </Typography>
                    </CardContent>
                </Box>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {(currentUser.displayName).slice(0, 1)}
                        </Avatar>
                    }
                    // title="Shrimp and Chorizo Paella"
                    title={currentUser.email}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Stack spacing={6} direction="row" sx={{ margin: '1rem auto' }}>
                <Button variant='contained' sx={{ backgroundColor: 'green' }}>Update</Button>
                <Button variant='contained' sx={{ backgroundColor: 'red' }}>Delete</Button>
            </Stack>
        </Stack >
    )
}

export default Details