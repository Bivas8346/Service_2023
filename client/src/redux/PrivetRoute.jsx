import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivetRoute = () => {
    const isAuthToken = window.localStorage.getItem("token");

    return isAuthToken ? <Outlet /> : <Navigate to="/Log" />;
}

export default PrivetRoute