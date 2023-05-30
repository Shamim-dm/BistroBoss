import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProviders";
import useCart from "../../../UseCart/useCart";

const OrdersItems = ({ item }) => {
  const { _id, price, image, recipe, name } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const [, refetch] = useCart()

  const handleAddToCart = (items) => {
    console.log(item);
    if (user && user.email) {
      const cartItems = {menuId:_id, price, image, name, recipe, email: user.email}
      fetch('http://localhost:5000/all-carts',{
        method: 'POST',
        headers:{
        'content-type': 'application/json'
      },
        body: JSON.stringify(cartItems)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "Add to Cart",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you want to login?",
        text: "At first you have to login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };




  return (
    <div className="card relative bg-base-100 shadow-xl">
      <img src={image} alt="Shoes" />

      <p className="absolute bg-slate-900 px-3 rounded-md text-white right-4 top-3">
        {price}
      </p>

      <div className="card-body text-center">
        <h2 className=" text-2xl text-center">{name}</h2>
        <p className="text-sm text-slate-500">{recipe}</p>
        <div className="  justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline shadow-2xl border-0 border-b-2 text-amber-600 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersItems;
