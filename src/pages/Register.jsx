import React from 'react'
import { AccountCircle } from '@mui/icons-material'
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { Grid, Box, Stack, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import blogimg from '../assets/blockimage.jpg'




const Register = ({ userInfo, setUserInfo }) => {
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value })
        console.log(userInfo);
    }
    return (
        <div className='register'>
            <Grid style={{ width: '25rem', backgroundColor: 'whitesmoke', padding: '2rem', borderRadius: '0.75rem', boxShadow: '18px 18px 25px black' }} >
                <div>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>--Register--</h3>
                </div>
                <Box>
                    <form>
                        <Stack spacing={4} direction='column' >
                            <TextField
                                type='text'
                                variant='outlined'
                                value={userInfo.username}
                                name='username'
                                onChange={handleChange}
                                placeholder='First Name'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start' >
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                type='text'
                                variant='outlined'
                                value={userInfo.username}
                                name='username'
                                onChange={handleChange}
                                placeholder='Last Name'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start' >
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                type='email'
                                variant='outlined'
                                value={userInfo.phoneNumber}
                                name='email'
                                onChange={handleChange}
                                placeholder='e-mail'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start' >
                                            <AlternateEmailSharpIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                type='password'
                                variant='outlined'
                                value={userInfo.phoneNumber}
                                name='password'
                                onChange={handleChange}
                                placeholder='Password'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start' >
                                            <KeySharpIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button variant='contained' type='submit' value='Submit' >Register</Button>
                        </Stack>
                    </form>
                </Box>

            </Grid>
        </div>
    )
}

export default Register