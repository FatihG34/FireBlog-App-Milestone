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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AuthUserContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';


export default function BlogCard({ data }) {
    const { currentUser } = React.useContext(AuthUserContext);
    const navigate = useNavigate()

    console.log(currentUser)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <div onClick={() => { currentUser ? navigate('/details') : navigate('/login') }} style={{ cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={data.imageUrl}
                    alt={data.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {data.content}
                    </Typography>
                </CardContent>
            </div>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="blog">
                        {(currentUser?.displayName).slice(0, 1)}
                    </Avatar>
                }
                title={currentUser?.email}
                subheader={(currentUser.metadata.creationTime).slice(5, 16)}
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
    );
}
