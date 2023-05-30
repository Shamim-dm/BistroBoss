import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../Pages/Home/Banner/Banner';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Sheared/Footer/Footer';
import Navbar from '../Pages/Sheared/Navbar/Navbar';


const Main = () => {
    const location = useLocation()
    const islogin = location.pathname.includes('login') || location.pathname.includes('signup') 
    console.log(location)
    return (
        <div className='w-11/12 mx-auto'>
           { islogin ||  <Navbar></Navbar>  }                      
            <Outlet></Outlet>
            { islogin || <Footer></Footer>}
            </div>
           
    );
};

export default Main;