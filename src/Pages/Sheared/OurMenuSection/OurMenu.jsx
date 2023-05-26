import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";
import TitleSctions from "../../../Components/TitleSections/TitleSctions";
import useMenu from "../../../Hooks/UseMenu";
import Popularitems from "./Popularitems";

const OurMenu = () => {
  const [datas, loading] = useMenu()
  const popularData = datas.filter(pd => pd.category == "popular")



  return (
    <div className="my-8">
      <TitleSctions
        subHeading="From Our Menu"
        heading="Popular Items"
      ></TitleSctions>

      <div className="grid md:grid-cols-2 items-center  gap-4">
        {
       popularData.map(items => <Popularitems items={items} key={items._id} ></Popularitems> )
        }
      </div>
    </div>
  );
};

export default OurMenu;
