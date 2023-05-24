import React from "react";
import { Helmet } from "react-helmet-async";
import OurMenu from "../../Sheared/OurMenuSection/OurMenu";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import CheifRecommends from "../CheifRecommends/ChiefRecommands.jsx/CheifRecommends";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import ViewAllMenu from "../ViewAllMenu/ViewAllMenu";

const Home = () => {
  return (
    <div className="">
         <Helmet>
  <title>Bistro Boss</title>
        </Helmet>
       
      <Banner></Banner>
     <div className="w-10/12 mx-auto">
     <BistroBoss></BistroBoss>
       <Category></Category>
      <OurMenu></OurMenu>
      <ViewAllMenu></ViewAllMenu>
      <CheifRecommends></CheifRecommends>

     </div>
      <Features></Features>
      <Reviews></Reviews>
      
    </div>
  );
};

export default Home;
