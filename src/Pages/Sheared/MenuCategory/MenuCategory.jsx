import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../Cover/Cover';
import MenuItems from '../MenuItems.jsx/MenuItems';


const MenuCategory = ({items, title, img}) => {
  
    return (
        <div className="my-8">
           {
            title && 
            <Cover img={img}
            title={title}
            ></Cover>
           }
     
        <div className="grid md:grid-cols-2 w-10/12 mx-auto items-center my-11  gap-8">
          {
         items.map(items => <MenuItems items={items} key={items._id} ></MenuItems> )
          }
        </div>
        <Link to={`/orders/${title}`}>  <button className="btn font-bold btn-outline border-0 border-b-2  ">Order Now</button></Link>
      </div>
        
    );
};

export default MenuCategory;