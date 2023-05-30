import React, { useState } from 'react';
import TitleSctions from '../../../Components/TitleSections/TitleSctions';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Reviews = () => {
    const [reviews , setReviews] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    } ,[])
    return (
        <div className='my-11 w-9/12 mx-auto'>
            <TitleSctions
            subHeading="----What our clint say----"
            heading="testimonals"
            ></TitleSctions>

            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               {
                reviews.map(review =>  <SwiperSlide key={review._id} className='px-11 text-center' >
                        <Rating 
                        className='mx-auto mb-1'
                    style={{ maxWidth: 100 }}
                    value={review.rating}
                    readOnly
                    />

                    <p className='text-sm'>{review.details}</p>
                    <h2 className='text-amber-800 uppercase font-bold mt-2'>{review.name}</h2>
                </SwiperSlide> )
               } 
       
     
      </Swiper>
            </div>
        </div>
    );
};

export default Reviews;