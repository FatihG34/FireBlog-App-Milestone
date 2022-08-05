import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { AuthUserContext } from '../context/AuthContext';

const Profile = () => {
    const { currentUser } = React.useContext(AuthUserContext)
    return (
        <Box sx={{ display: 'grid', placeContent: 'center', width: '100vw', height: '80vh' }}>
            <Card sx={{ maxWidth: 750, padding: '1rem', boxShadow: '2px 2px 3px 5px #0289d1a2' }}>
                <CardMedia
                    component="img"
                    height="300"
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