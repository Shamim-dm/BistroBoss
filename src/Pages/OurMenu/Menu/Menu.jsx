import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Sheared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={img}></Cover>
    </div>
  );
};

export default Menu;