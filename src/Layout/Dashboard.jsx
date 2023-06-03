import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBeer, FaCalculator, FaContao, FaGratipay, FaHome, FaMendeley, FaRev, FaShopify, FaShoppingCart } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import useCart from "../UseCart/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart]= useCart()

    // todo: load data from server to have daynamic isAdmin based
  //  const  isAdmin = true;
  const [isAdmin] = useAdmin();
  return (

  
   <div>
      <Helmet>
    <title>Bistro Boss | Dashboard</title>
          </Helmet>
           
           <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button absolute top-0 right-5   lg:hidden"
        >
        <img className="w-5 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />

        </label>
        
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu text-black uppercase bg-[#D1A054] p-4 w-80  ">
          {isAdmin ?
          <>
             <li >
          <NavLink to='/'> <FaHome /> Addmin Home</NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/add-item'><FaCalculator></FaCalculator> Add an Items</NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/history'><FaGratipay></FaGratipay> Manage Items</NavLink>
          </li>       
          <li >
          <NavLink to='/dashboard/review'> <FaRev></FaRev> Manage Booking </NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/all-users'><FaShopify></FaShopify> All Users</NavLink>
          </li>
          </> :
          <>
             <li >
          <NavLink to='/'> <FaHome /> User Home</NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/reservation'><FaCalculator></FaCalculator> Reservation</NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/history'><FaGratipay></FaGratipay> Payment History</NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/my-cart'><FaShoppingCart></FaShoppingCart> MyCart
          <span className="badge badge-secondary">+{cart?.length || 0 }</span>
          </NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/review'> <FaRev></FaRev> Add Review</NavLink>
          </li>
          <li >
          <NavLink to='/dashboard/booking'><FaShopify></FaShopify> My Booking</NavLink>
          </li>
          </>

          }
          
         


          <li>
            <hr />
          <NavLink to='/'> <FaHome /> Home</NavLink>
          </li>
          <li >
          <NavLink to='/'><FaMendeley></FaMendeley> menu</NavLink>
          </li>
          <li >
          <NavLink to='/'><FaShopify></FaShopify> Shop</NavLink>
          </li>
          <li >
          <NavLink to='/'><FaContao></FaContao> Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default Dashboard;
