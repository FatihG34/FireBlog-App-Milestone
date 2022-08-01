import React, { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { Grid, Box, Stack, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import blogimg from '../assets/blockimage.jpg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const initialValue = { firstName: '', lastName: '', email: '', password: '' }


const Register = () => {
    const [user, setUser] = useState(initialValue)
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // setUser({ ...user, [name]: value })
        // console.log(userInfo);
    }
    return (
        <div className='register'>
            <Grid style={{ width: '25rem', backgroundColor: 'whitesmoke', padding: '2rem', borderRadius: '0.75rem', boxShadow: '18px 18px 25px black' }} >
                <div style={{ margin: '0 0 1rem 0' }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- Register -</h3>
                </div>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('First Name information must be filled'),
                        lastName: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('Last Name information must be filled'),
                        email: Yup.string().email('Please enter a valid e-mail address').required('e-mail information must be filled').matches(/([\w._%+-]+@[\w.-]+\.[a-zA-Z]{0,4})/, 'Such as : asdf@dfgv.com'),
                        password: Yup.string().min(8).max(16).required('Password information must be filled').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
                    })
                    }
                    onSubmit={(values, action) => {
                        user.firstName = values.firstName;
                        user.lastName = values.lastName;
                        user.email = values.email;
                        user.password = values.password;
                        action.resetForm();
                        action.setSubmitting(false)
                    }}
                >
                    <Form>
                        <Stack spacing={4} direction='column' >
                            <TextField
                                label='First Name'
                                variant='outlined'
                                id='firstName'
                                type='text'
                                name='firstName'
                                value={user.firstName}
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
                                label='Last Name'
                                type='text'
                                variant='outlined'
                                value={user.lastName}
                                name='firstName'
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
                                label='E-mail'
                                type='email'
                                variant='outlined'
                                value={user.email}
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
                                label='Password'
                                type='password'
                                variant='outlined'
                                value={user.password}
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
                    </Form>
                </Formik>
            </Grid>
        </div>
    )
}

export default Register