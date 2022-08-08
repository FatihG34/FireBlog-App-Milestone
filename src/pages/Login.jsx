import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { Grid, Stack, TextField, InputAdornment, Button, Box } from '@mui/material'
import blogimg from '../assets/blockimage.jpg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { signIn, forgotPassword, signUpProvider } from '../helpers/authFunctions';
import { useNavigate } from 'react-router-dom'
import Toastify from '../helpers/toastify';


const Login = () => {
    ;
    const navigate = useNavigate()
    return (
        <div className='register'>
            <Grid style={{ width: '25rem', backgroundColor: 'whitesmoke', padding: '2rem', borderRadius: '0.75rem', boxShadow: '18px 18px 25px black' }} >
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- Login -</h3>
                </Box>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Please enter a valid e-mail address').required('e-mail information must be filled').matches(/([\w._%+-]+@[\w.-]+\.[a-zA-Z]{0,4})/, 'Such as : asdf@dfgv.com'),
                        password: Yup.string().min(8).max(16).required('Password information must be filled').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
                    })
                    }
                    onSubmit={(values, action) => {
                        // setUser({ ...user, firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password })
                        signIn(values.email, values.password, navigate);

                        action.resetForm();
                        action.setSubmitting(false);
                        Toastify('Logined successfully')
                    }}
                >
                    {({ values, handleChange, errors, touched, handleBlur }) => (
                        <Form>
                            <Stack spacing={4} direction='column' >
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
                                <Button variant='text' onClick={() => forgotPassword(values.email)}>Forgot password?</Button>
                                <Button variant='contained' type='submit' value='Submit' >Login</Button>
                                <Button variant='contained' onClick={() => signUpProvider(navigate)} >SignIn with Google</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </div>
    )
}

export default Login