import {
    createBrowserRouter,
  } from "react-router-dom";
import AddItem from "../Dashboard/Additem/AddItem";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import MyCart from "../Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Orders from "../Pages/Orders/Orders/Orders";
import Menu from "../Pages/OurMenu/Menu/Menu";
import PrivateRouter from "../Provider/PrivateRouter";
import AdminRoute from "./AdminRoute";



export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
            {
              path: '/',
              element:<Home></Home>
            },
            {
              path: '/menu',
              element: <Menu></Menu>
            },
            {
              path: 'orders/:category',
              element: <Orders></Orders>
            },
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'signup',
              element: <SignUp></SignUp>
            },

      ]
    },
    {
      path:'Dashboard',
      element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children:[

        {
          path: 'my-cart',
          element: <MyCart></MyCart>
        },
        {
          path: 'all-users',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'add-item',
          element:<AdminRoute> <AddItem></AddItem></AdminRoute>
        }

      ]
    }
  ]);


 