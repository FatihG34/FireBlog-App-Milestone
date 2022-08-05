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
import { Box, Grid } from '@mui/material';
import { useFetch } from '../helpers/databaseFunctions';
import { AuthUserContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const { isLoading, dataList } = useFetch();
    const { currentUser } = React.useContext(AuthUserContext)
    const navigate = useNavigate()

    console.log(currentUser)

    console.log(dataList);

    return (
        <Box sx={{ display: 'grid', placeContent: 'center', padding: 3 }}>
            <Grid container spacing={2}>
                {dataList?.map((data, index) => (
                    <Grid item xs={3} onClick={() => navigate('/details', { state: { data }, replace: false })} key={index} >
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={data.imageUrl}
                                alt={data.title}
                            // sx={{ width: '300px', height: '250px' }}
                            />
                            <CardHeader
                                title={data.title}
                                subheader={(currentUser.metadata.creationTime).slice(5, 16)}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" className='data-content'>
                                    {data.content}
                                </Typography>
                            </CardContent>
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
                    </Grid>
                ))}

            </Grid>
        </Box >
    );
}
export default Dashboard