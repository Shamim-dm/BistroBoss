import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Home/Banner/Banner';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Sheared/Footer/Footer';
import Navbar from '../Pages/Sheared/Navbar/Navbar';


const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>  
                       
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
           
    );
};

export default Main;