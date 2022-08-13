import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { UpdateData } from '../helpers/databaseFunctions';
import { useLocation, useNavigate } from 'react-router-dom';
import Toastify from '../helpers/toastify';
import BlogForm from '../components/blogForm/BlogForm';


const UpdateBlog = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const { data } = state;
    const [updateData, setUpdateData] = useState(data)

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const blogUpdateTime = (new Date()).toString().slice(4, 16)
        setUpdateData({ ...updateData, [name]: value, blogUpdateTime })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        UpdateData(updateData)
        navigate('/');
        Toastify('You have updated the Blog Content successfully')
    }
    console.log(updateData);
    return (
        <Box sx={{ display: 'grid', placeContent: 'center' }}>
            <Grid style={{ width: '30rem', padding: '2rem' }}>
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img width={300} src={data.imageUrl} alt="blogimage" />
                    <h3>- Update Blog -</h3>
                </Box>
                <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} blogData={updateData} />
            </Grid>
        </Box >
    )
}
export default UpdateBlog