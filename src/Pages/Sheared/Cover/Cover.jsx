import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({img, title}) => {
    return (

      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
  >
       <div className="hero h-[600px]" >
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" p-11 bg-slate-800 bg-opacity-50 ">
      <h1 className="mb-5 text-5xl  uppercase">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
      
  </Parallax>

       
    );
};

export default Cover;