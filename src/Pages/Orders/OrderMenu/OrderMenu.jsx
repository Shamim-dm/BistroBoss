import React from 'react';
import OrdersItems from '../OrdersItems/OrdersItems';

const OrderMenu = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <OrdersItems item={item} key={item._id}></OrdersItems>
        ))}
      </div>
    );
};

export default OrderMenu;