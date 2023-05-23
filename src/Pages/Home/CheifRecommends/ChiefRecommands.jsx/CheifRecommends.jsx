import React from "react";
import TitleSctions from "../../../../Components/TitleSections/TitleSctions";
import img from '../../../../assets/menu/salad-bg.jpg'
const CheifRecommends = () => {
  return (
    <div>
      <div>
        <TitleSctions
          subHeading="----Should Try----"
          heading="chief recommands"
        ></TitleSctions>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-2xl text-center">
              Caeser Salad
              <div className="badge badge-secondary text-sm">NEW</div>
            </h2>
            <p className="text-sm text-slate-500">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
           <div  className="  justify-center">
           <button className="btn btn-outline shadow-2xl border-0 border-b-2 text-amber-600 ">Add to cart</button>
           </div>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-2xl text-center">
              Caeser Salad
              <div className="badge badge-secondary text-sm">NEW</div>
            </h2>
            <p className="text-sm text-slate-500">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
           <div  className="  justify-center">
           <button className="btn btn-active  shadow-2xl  text-white ">Add to cart</button>
           </div>
          </div>
        </div>
        
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-2xl text-center">
              Caeser Salad
              <div className="badge badge-secondary text-sm">NEW</div>
            </h2>
            <p className="text-sm text-slate-500">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
           <div  className="  justify-center">
           <button className="btn btn-outline shadow-2xl border-0 border-b-2 text-amber-600 ">Add to cart</button>
           </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default CheifRecommends;
