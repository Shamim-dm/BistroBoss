import React from "react";

const Popularitems = ({ items }) => {
  console.log(items);
  const { _id, image, name, recipe, price } = items;

  return (
    <div className="flex gap-3">
      <div>
        <img className="w-[100px]" src={image} alt="" />
      </div>
      <div className="grid grid-cols-2">
        <div >
          <p className="text-xl">{name}----------</p>
          <p className="text-sm text-slate-500">{recipe}</p>
        
        </div>
        <p className="text-amber-600">${price}</p>
      </div>
    </div>
  );
};

export default Popularitems;
