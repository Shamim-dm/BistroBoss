import React from "react";

const Popularitems = ({ items }) => {
  // console.log(items);
  const { _id, image, name, recipe, price } = items;

  return (
    <div className="flex gap-5">
      <img className="w-20 " src={image} alt="" />

      <div>
        <p className="text-xl">{name}----------</p>
        <p className="text-xs text-slate-500">{recipe}</p>
      </div>
      <p className="text-amber-600">${price}</p>
    </div>
  );
};

export default Popularitems;
