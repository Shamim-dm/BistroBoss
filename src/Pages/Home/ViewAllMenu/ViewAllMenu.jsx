import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllMenu = () => {
    return (
        <div className='my-11'>
            <div className='text-center'>
            <Link to='/menu'><button className="btn btn-outline  border-0 border-b-2 mb-11 ">view full menu</button></Link>
            </div>

           <div className='bg-black text-white py-11 text-center'>
           <p className='text-3xl py-5 font-bold'>Call Us: +8801785634825</p>
           </div>
        </div>
    );
};

export default ViewAllMenu;















