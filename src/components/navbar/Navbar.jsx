import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FGlogo from '../../assets/logo-FG.png'
import { Link, useNavigate } from 'react-router-dom';
import { AccountCircleTwoTone } from '@mui/icons-material';
import { logOut } from '../../helpers/authFunctions';
import { AuthUserContext } from '../../context/AuthContext';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';




const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { currentUser } = React.useContext(AuthUserContext)
    const navigate = useNavigate()

    const settings = currentUser ? ['Profile', 'New', 'Logout'] : ['Login', 'Register'];
    // console.log(currentUser.displayName)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        logOut();
        navigate('/')

    }

    return (
        <AppBar position="static" color='info'>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }} >

                    <Container sx={{ display: { xs: 'none', md: 'flex' }, width: '150px' }}>
                        <img src={FGlogo} alt="logo" width='100%' />
                    </Container>
                    <Container sx={{ display: { xs: 'flex', md: 'none' }, width: '100px' }}>
                        <img src={FGlogo} alt="" width='100%' />
                    </Container>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant='h5' href='/' component='a' sx={{ textDecoration: 'none', color: 'inherit' }} >── <span>&lt; F & G /&gt;</span> Blog ──</Typography>
                    </Box>

                    <Box>
                        {/* <Typography variant='h5'>{currentUser.displayName}</Typography> */}
                        <Tooltip title={currentUser ? "Open Personal Pages" : "Account Pages"}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                <AccountCircleTwoTone />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    {
                                        setting === 'Logout'
                                            ?
                                            <Link to={'#'} onClick={handleLogout}>{setting}</Link>
                                            :
                                            <Link to={`/${(setting).toLocaleLowerCase()}`} textAlign="center">{setting}</Link>
                                    }
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
