import React, { useContext } from 'react';
import { Button, Grid, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import blogimg from '../assets/blockimage.jpg';
// import { DataBlogContext } from '../context/BlogContext';
import { UpdateData } from '../helpers/databaseFunctions';
// import BlogForm from '../components/blogForm/BlogForm';
// import { AuthUserContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataBlogContext } from '../context/BlogContext';


const UpdateBlog = () => {
    // const { currentUser } = useContext(AuthUserContext)
    const { setBlogData } = useContext(DataBlogContext)
    const navigate = useNavigate()
    const { state } = useLocation();
    const { data } = state;
    console.log('updateblog da ki data:', data)

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const blogUpdateTime = (new Date()).toString().slice(4, 16)
        // const bloger = { blogerId: currentUser.uid, blogerName: currentUser.displayName, blogerEmail: currentUser.email }
        setBlogData({ ...data, [name]: value, blogUpdateTime })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        UpdateData(data)
        navigate('/')
    }

    return (
        <Box sx={{ display: 'grid', placeContent: 'center' }}>
            <Grid style={{ width: '30rem', padding: '2rem' }}>
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- Update Blog -</h3>
                </Box>
                <form
                    onSubmit={handleSubmit}
                >
                    <Stack spacing={3} direction='column' >
                        <TextField
                            label='Title *'
                            type='text'
                            name='title'
                            value={data.title}
                            id="outlined-size-normal"
                            required
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            label='Image URL *'
                            type='url'
                            name='imageUrl'
                            value={data.imageURL}
                            id="outlined-size-normal"
                            onChange={handleChange}
                            // onChange={handleChange} same with above
                            required
                        />
                        <TextField
                            label='Content *'
                            name='content'
                            value={data.content}
                            multiline
                            rows={12}
                            maxRows={18}
                            onChange={handleChange}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            value='submit'
                        >Update</Button>
                    </Stack>
                </form>
            </Grid>
        </Box >
    )
}
export default UpdateBlog