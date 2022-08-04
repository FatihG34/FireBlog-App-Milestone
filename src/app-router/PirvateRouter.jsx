import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { AuthUserContext } from '../context/AuthContext';

const PirvateRouter = () => {
    const { currentUser } = useContext(AuthUserContext)
    return currentUser ? <Outlet /> : <Navigate to='/login' replace />
}

export default PirvateRouter