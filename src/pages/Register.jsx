import { AccountCircle } from '@mui/icons-material'
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { Grid, Stack, TextField, InputAdornment, Button, Box } from '@mui/material'
import blogimg from '../assets/blockimage.jpg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createUser } from '../helpers/authFunctions';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className='register'>
            <Grid style={{ width: '25rem', backgroundColor: 'whitesmoke', padding: '2rem', borderRadius: '0.75rem', boxShadow: '18px 18px 25px black' }} >
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- Register -</h3>
                </Box>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('First Name information must be filled'),
                        lastName: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('Last Name information must be filled'),
                        email: Yup.string().email('Please enter a valid e-mail address').required('e-mail information must be filled').matches(/([\w._%+-]+@[\w.-]+\.[a-zA-Z]{0,4})/, 'Such as : asdf@dfgv.com'),
                        password: Yup.string().min(8).max(16).required('Password information must be filled').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
                    })
                    }
                    onSubmit={(values, action) => {
                        const displayName = `${values.firstName}  ${values.lastName}`
                        createUser(values.email, values.password, navigate, displayName);

                        action.resetForm();
                        action.setSubmitting(false)
                    }}
                >
                    {({ values, handleChange, errors, touched, handleBlur }) => (
                        <Form>
                            <Stack spacing={4} direction='column' >
                                <TextField
                                    label='First Name'
                                    variant='outlined'
                                    id='firstName'
                                    type='text'
                                    name='firstName'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    placeholder='First Name'
                                    onBlur={handleBlur}
                                    helperText={touched.firstName && errors.firstName}
                                    error={touched.firstName && Boolean(errors.firstName)}
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
                                    value={values.lastName}
                                    name='lastName'
                                    onChange={handleChange}
                                    placeholder='Last Name'
                                    onBlur={handleBlur}
                                    helperText={touched.lastName && errors.lastName}
                                    error={touched.lastName && Boolean(errors.lastName)}
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
                                    value={values.email}
                                    name='email'
                                    onChange={handleChange}
                                    placeholder='e-mail'
                                    onBlur={handleBlur}
                                    helperText={touched.email && errors.email}
                                    error={touched.email && Boolean(errors.email)}
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
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                    onBlur={handleBlur}
                                    helperText={touched.password && errors.password}
                                    error={touched.password && Boolean(errors.password)}
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
                    )}
                </Formik>
            </Grid>
        </div>
    )
}

export default Register