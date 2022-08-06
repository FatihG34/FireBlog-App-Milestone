import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import blogimg from '../assets/blockimage.jpg';
import { DataBlogContext } from '../context/BlogContext';
import { addData } from '../helpers/databaseFunctions';
import BlogForm from '../components/blogForm/BlogForm';
import { AuthUserContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const NewBlog = () => {
    const { currentUser } = useContext(AuthUserContext)
    const { blogData, setBlogData } = useContext(DataBlogContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const blogCreateTime = (new Date()).toString().slice(4, 16)
        const bloger = { blogerId: currentUser.uid, blogerName: currentUser.displayName, blogerEmail: currentUser.email }
        setBlogData({ ...blogData, [name]: value, bloger, blogCreateTime })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addData(blogData);
        navigate('/')
    }

    return (
        <Box sx={{ display: 'grid', placeContent: 'center' }}>
            <Grid style={{ width: '30rem', padding: '2rem' }}>
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={blogimg} alt="blogimage" />
                    <h3>- New Blog -</h3>
                </Box>
                <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} />
            </Grid>
        </Box >
    )
}

export default NewBlog