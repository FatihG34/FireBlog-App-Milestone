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
import { Box, Button, Stack } from '@mui/material';
// import { useFetch } from '../helpers/databaseFunctions';
import { AuthUserContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { DeleteData } from '../helpers/databaseFunctions';

const Details = () => {
    const navigate = useNavigate()
    const { currentUser } = React.useContext(AuthUserContext);
    const { state } = useLocation();
    const { data } = state;
    return (
        <Stack sx={{ margin: '1rem auto', width: '75%' }}>
            <Card>
                <Box sx={{ display: 'grid', placeContent: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '35rem' }}
                        // height="55%"
                        image={data.imageUrl}
                        alt={data.title}
                    />
                </Box>
                <Box sx={{ backgroundColor: '#E7E6F5' }}>
                    <CardHeader
                        sx={{ textAlign: 'center' }}
                        title={data.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" className='data-content' sx={{ textAlign: 'center' }}>
                            {data.blogCreateTime}
                        </Typography>
                        <Typography variant="body2" className='data-content'>
                            {data.content}
                        </Typography>
                    </CardContent>
                </Box>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {(data.bloger.blogerName).slice(0, 1)}
                        </Avatar>
                    }
                    // title="Shrimp and Chorizo Paella"
                    title={data.bloger.blogerEmail}
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
            {currentUser.uid === data.bloger.blogerId
                &&
                <Stack spacing={6} direction="row" sx={{ margin: '1rem auto' }}>
                    <Button
                        onClick={() => navigate('/updateblog')}
                        variant='contained'
                        sx={{ backgroundColor: 'green' }}
                    >Update</Button>
                    <Button
                        onClick={() => DeleteData(data.id)}
                        variant='contained'
                        sx={{ backgroundColor: 'red' }}
                    >Delete</Button>
                </Stack>
            }
        </Stack >
    )
}

export default Details