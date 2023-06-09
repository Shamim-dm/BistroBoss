import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../UseCart/useCart';


const Navbar = () => {
  const {user, logOut,} = useContext(AuthContext)
  const [cart] = useCart()
  console.log(cart)
 const handleLogout = ()=>{
  logOut()
  .then(()=>{})
  .catch(error=> console.log(error))
  

 }

    return (
        <div className=''>
            <div className=" w-11/12 mx-auto navbar fixed z-10 bg-black opacity-60  text-white">
  <div className="navbar-start ">
    <div className="dropdown bg-black">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu text-black opacity-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <li><Link to='/'> Home</Link> </li>     
      <li><Link to="/menu">Menu</Link></li> 
      <li><Link to='/orders/salad'>Orders</Link></li>
     <Link to='/Dashboard/my-cart'>
     <button className="btn p-0 gap-2">
       <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">+{cart?.length || 0 }</div>
      </button>
     </Link>
      
      
      {user 
      ? 
     
      <> <span>{user.displayName}</span>
     <button onClick={handleLogout } className="btn btn-active btn-ghost">Logout</button></> 
      :
       <><li><Link to='/login'>Login</Link></li></>

      }

      </ul>
    </div>
    <a className="btn  btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal  px-1">
    <li><Link to='/'> Home</Link> </li>   
     <li><Link to="/menu">Menu</Link></li> 
     <li><Link to='/orders/salad'>Orders</Link></li>
    <Link to='/Dashboard/my-cart'>
    <button className="btn p-0 gap-2">
     <FaShoppingCart></FaShoppingCart>
     <div className="badge badge-secondary">+{cart?.length || 0 }</div>
      </button>
    </Link>
     {user 
      ? 
      <><span>{user.displayName}</span>
       <button onClick={handleLogout } className="btn btn-active btn-ghost">Logout</button></> 
      :
       <><li><Link to='/login'>Login</Link></li></>

      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign in</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;