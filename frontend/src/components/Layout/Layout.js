import React from 'react';
import Header from "./Header/Header";
import {Route, Routes, useLocation} from "react-router-dom";
import Main from "../pages/Main/Main";
import Courses from "../pages/Courses/Courses";
import Company from "../pages/Company/Company";
import Footer from "./Footer/Footer";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Program from '../pages/Program/Program';
import NotFound from "../pages/NotFound/NotFound";


const Layout = () => {
    const location = useLocation();

    return (
        <>
            {
                location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/order' ? <Header/> : ''
            }

            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/company' element={<Company/>}/>
                <Route path='/program' element={<Program/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>

            {
                   location.pathname === "/login"
                || location.pathname === "/register"
                || location.pathname === "/order"
                || location.pathname === "/admin"
                 ? '' : <Footer/>
            }
        </>
    );
};

export default Layout;