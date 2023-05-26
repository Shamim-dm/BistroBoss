import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Sheared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import TitleSctions from "../../../Components/TitleSections/TitleSctions";
import useMenu from "../../../Hooks/UseMenu";
import MenuCategory from "../../Sheared/MenuCategory/MenuCategory";

import desserts from '../../../assets/menu/dessert-bg.jpeg'
import pizzas from '../../../assets/menu/pizza-bg.jpg'
import saladss from '../../../assets/menu/salad-bg.jpg'
import soupss from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
const [datas] = useMenu()
const offered = datas.filter( item=> item.category == 'offered' )

const dessert = datas.filter( item=> item.category == 'dessert' )
const pizza = datas.filter( item=> item.category == 'pizza' )
const salads = datas.filter( item=> item.category == 'salad' )
const soups = datas.filter( item=> item.category == 'soup' )
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={img}
      title={'Our Menu'}
      ></Cover>
    <TitleSctions subHeading="---Dont Miss---" heading="todays offer" ></TitleSctions>
    <MenuCategory  items={offered}></MenuCategory>
   
    <MenuCategory title="dessert"  img={desserts} items={dessert}></MenuCategory>
   
    <MenuCategory title="pizza" img={pizzas} items={pizza}></MenuCategory>

    <MenuCategory title="soup" img={soupss} items={soups}></MenuCategory>

    </div>
  );
};

export default Menu;
