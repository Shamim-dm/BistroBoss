import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../Hooks/UseMenu";
import Cover from "../../Sheared/Cover/Cover";
import OrderMenu from "../OrderMenu/OrderMenu";
import OrdersItems from "../OrdersItems/OrdersItems";

const Orders = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [datas] = useMenu();
  const [orderIndex, setOrderIndex] = useState(initialIndex);
  
  console.log(category)

  
  const dessert = datas.filter((item) => item.category == "dessert");
  const pizza = datas.filter((item) => item.category == "pizza");
  const salads = datas.filter((item) => item.category == "salad");
  const soups = datas.filter((item) => item.category == "soup");
  const drinks = datas.filter((item) => item.category == "drinks");
  return (
    <div>
      <Cover img={img} title="Order Food"></Cover>

      <div className="mt-8">
      <Tabs
        defaultIndex={orderIndex}
        onSelect={(index) => setOrderIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        
        <TabPanel>  <OrderMenu items={salads}></OrderMenu></TabPanel>
        <TabPanel>  <OrderMenu items={pizza}></OrderMenu></TabPanel>
        <TabPanel>  <OrderMenu items={soups}></OrderMenu></TabPanel>
        <TabPanel>  <OrderMenu items={dessert}></OrderMenu></TabPanel>
        <TabPanel>  <OrderMenu items={drinks}></OrderMenu></TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Orders;
