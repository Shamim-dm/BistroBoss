import React from 'react';

const OrdersItems = ({item}) => {
    const {_id, price, image, recipe, name } = item;
    return (
        <div  className="card relative bg-base-100 shadow-xl">
          
           
           <img
              src={image}
              alt="Shoes"
            />

            <p className='absolute bg-slate-900 px-3 rounded-md text-white right-4 top-3'>{price}</p>
           
           

       
          <div className="card-body text-center">
            <h2 className=" text-2xl text-center">
                {name}           
            </h2>
            <p className="text-sm text-slate-500">{recipe}</p>
           <div  className="  justify-center">
           <button className="btn btn-outline shadow-2xl border-0 border-b-2 text-amber-600 ">Add to cart</button>
           </div>
          </div>
        </div>
    );
};

export default OrdersItems;