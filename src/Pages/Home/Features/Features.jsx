import React from 'react';
import TitleSctions from '../../../Components/TitleSections/TitleSctions';
import img from '../../../assets/home/featured.jpg'
import css from './Features.css'

const Features = () => {
    return (
        <div className='mt-7  bg-fixed py-11 feature-section text-white '>
            <div>
                <TitleSctions
                subHeading="Check it out"
                heading="from our menu"
                ></TitleSctions>
            </div>
            <div className='md:flex justify-center gap-10 w-8/12 mx-auto pt-7 py-11'>
                <img className='w-72 h-52 ' src={img} alt="" />
                <div className=''>
                    <h4>March 20, 2023</h4>
                    <h4>WHERE CAN I GET SOME?</h4>
                    <p className='text-sm'>We cant be exactly sure what chef Slowiks welcome dish is meant to represent because, unlike the other courses, he isnt here yet to explain the reasoning for it. Margot exclaims that she prefers the oysters on their own, but Tyler doesnt agree, giving an unneeded explanation for why the oyster needs the mignonette and the lemon to give a mouthfeel.</p>
                    <button className="btn text-white font-bold btn-outline border-0 border-b-2  ">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Features;