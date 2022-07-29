import { AccountCircle } from '@mui/icons-material'
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Grid, Box, Stack, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import React from 'react'

const Form = () => {
    return (
        <Grid style={{ width: '300' }} >
            <Box>
                <form>
                    <Stack spacing={4} direction='column' >
                        <TextField
                            variant='outlined'
                            value={null}
                            name='username'
                            onChange={null}
                            placeholder='Name'
                            InputProps={{
                                startAdorment: (
                                    <InputAdornment position='start' >
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant='outlined'
                            value={null}
                            name='phoneNumber'
                            onChange={null}
                            placeholder='Phone Number'
                            InputProps={{
                                startAdorment: (
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
                                value={null}
                                onChange={null}
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