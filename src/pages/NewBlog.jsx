import React, { useContext } from 'react';
import Form from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import blogimg from '../assets/blockimage.jpg';
import { DataBlogContext } from '../context/BlogContext';
import { addData } from '../helpers/databaseFunctions';


const NewBlog = () => {

    const { blogData, setBlogData } = useContext(DataBlogContext);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addData(blogData)
    }
    console.log(blogData);
    return (
        <Box sx={{ display: 'grid', placeContent: 'center' }}>
            <Grid style={{ width: '30rem', padding: '2rem' }}>
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- Register -</h3>
                </Box>
                <Form
                    onSubmit={handleSubmit}
                    sx={{ width: '25rem', gap: 4 }}
                >
                    <TextField
                        label="Title *"
                        type='text'
                        name='title'
                        value={blogData.title}
                        id="outlined-size-normal"
                        required
                        onChange={(e) => handleChange(e)}
                    // onChange={handleChange} same with above
                    />
                    <TextField
                        label='Image URL *'
                        type='url'
                        name='imageUrl'
                        value={blogData.imageURL}
                        id="outlined-size-normal"
                        onChange={handleChange}

                    />
                    <TextField
                        label='Content *'
                        name='content'
                        value={blogData.content}
                        multiline
                        rows={12}
                        maxRows={18}
                        onChange={handleChange}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        value='submit'
                    >Submit</Button>
                </Form>
            </Grid>
        </Box>
    )
}

export default NewBlog