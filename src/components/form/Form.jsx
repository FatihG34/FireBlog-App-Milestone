import { AccountCircle } from '@mui/icons-material'
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Grid, Box, Stack, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import React from 'react'

const Form = ({ userInfo, setUserInfo }) => {
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value })
        console.log(userInfo);
    }
    return (
        <Grid style={{ width: '300' }} >
            <Box>
                <form>
                    <Stack spacing={4} direction='column' >
                        <TextField
                            variant='outlined'
                            value={userInfo.username}
                            name='username'
                            onChange={handleChange}
                            placeholder='Name'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant='outlined'
                            value={userInfo.phoneNumber}
                            name='phoneNumber'
                            onChange={handleChange}
                            placeholder='Phone Number'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <PhoneEnabledIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <FormControl>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                variant='outlined'
                                label='Gender'
                                name='gender'
                                value={userInfo.gender}
                                onChange={handleChange}
                            >
                                <MenuItem value='Female' >Female</MenuItem>
                                <MenuItem value='Male' >Male</MenuItem>
                                <MenuItem value='Other' >Other</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant='contained' type='submit' value='Submit' >Add</Button>
                    </Stack>
                </form>
            </Box>

        </Grid>
    )
}

export default Form