import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const PirvateRouter = () => {
    return currentUser ? <Outlet /> : <Navigate to='/login' replace />
}

export default PirvateRouter