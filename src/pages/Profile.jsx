import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { updateCurrentUser } from 'firebase/auth';
import { AuthUserContext } from '../context/AuthContext';

const Profile = () => {
    const { currentUser } = React.useContext(AuthUserContext)
    return (
        <Box sx={{ display: 'grid', placeContent: 'center', width: '100vw', height: '100vh' }}>
            <Card sx={{ maxWidth: 750, padding: '2rem' }}>
                <CardMedia
                    component="img"
                    height="140"
                    width='500'
                    image={currentUser.photoURL}
                    alt={currentUser.displayName}
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        Display Name
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {currentUser.displayName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Email
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {currentUser.email}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Profile