import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import BlogContext from '../context/BlogContext';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';
import PirvateRouter from './PirvateRouter';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <BlogContext>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile' element={<PirvateRouter />}>
                        <Route path='' element={<Profile />} />
                    </Route>
                    <Route path='/new' element={<PirvateRouter />}>
                        <Route path='' element={<NewBlog />} />
                    </Route>
                    <Route path='/details' element={<PirvateRouter />}>
                        <Route path='' element={<Details />} />
                    </Route>
                    <Route path='/updateblog' element={<PirvateRouter />}>
                        <Route path='' element={<UpdateBlog />} />
                    </Route>
                </Routes>
            </BlogContext>
        </BrowserRouter>
    )
}

export default AppRouter