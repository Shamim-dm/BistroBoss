import React from "react";
import OurMenu from "../../Sheared/OurMenuSection/OurMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CheifRecommends from "../CheifRecommends/ChiefRecommands.jsx/CheifRecommends";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
     <div className="w-10/12 mx-auto">
       <Category></Category>
      <OurMenu></OurMenu>
      <CheifRecommends></CheifRecommends>

     </div>
      <Features></Features>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
