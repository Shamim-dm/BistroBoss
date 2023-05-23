import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";
import TitleSctions from "../../../Components/TitleSections/TitleSctions";
import Popularitems from "./Popularitems";

const OurMenu = () => {
  const [datas, setDatas] = useState([]);
  console.log(datas);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((pd) => pd.category == "popular");
        setDatas(popularData);
      });
  }, []);

  return (
    <div className="my-8">
      <TitleSctions
        subHeading="From Our Menu"
        heading="Popular Items"
      ></TitleSctions>

      <div className="grid md:grid-cols-2 items-center  gap-4">
        {
       datas.map(items => <Popularitems items={items} key={items._id} ></Popularitems> )
        }
      </div>
    </div>
  );
};

export default OurMenu;
