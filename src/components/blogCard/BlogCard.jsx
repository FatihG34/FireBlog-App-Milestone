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
import { useNavigate } from 'react-router';


export default function BlogCard({ data }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <div onClick={() => navigate('/details', /*! bu şekilde olmadı başka bir yol bulmam lazım => */ { state: data })} style={{ cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={data.imageUrl}
                    alt={data.title}
                />
                <CardContent>
                    <Typography variant='h5'>{data.title}</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '4',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {data.content}
                    </Typography>
                </CardContent>
            </div>
            <CardHeader sx={{ ml: 2 }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="blog">
                        {(data.bloger.blogerName).slice(0, 1)}
                    </Avatar>
                }
                title={data.bloger.blogerEmail}
                subheader={data.blogCreateTime}
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
