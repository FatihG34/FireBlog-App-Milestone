import React from 'react';
import Form from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import blogimg from '../assets/blockimage.jpg';
const NewBlog = () => {
    return (
        <Box sx={{ display: 'grid', placeContent: 'center' }}>
            <Grid style={{ width: '30rem', padding: '2rem' }}>
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- Register -</h3>
                </Box>
                <Form sx={{ width: '25rem', gap: 4 }}>
                    <TextField
                        label="Title *"
                        type='text'
                        id="outlined-size-normal"
                    />
                    <TextField
                        label='Image URL *'
                        type='email'
                        id="outlined-size-normal"
                    />
                    <TextField
                        label='Content *'
                        multiline
                        rows={12}
                        maxRows={18}
                    />
                    <Button
                        variant='contained'
                        type='submit'

                    >Submit</Button>
                </Form>
            </Grid>
        </Box>
    )
}

export default NewBlog