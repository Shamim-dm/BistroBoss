import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import TitleSctions from '../../../Components/TitleSections/TitleSctions';

const Category = () => {
    return (
       <section>
        <TitleSctions
        subHeading={"---From 11:00 am to 10:00 pm---"}
        heading={'order online'}
        >

        </TitleSctions>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='' src={img1} alt="" />
            <h2 className='md:text-3xl text-center uppercase text-white -mt-16'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img className='' src={img2} alt="" />
        <h2 className=' md:text-3xl text-center uppercase text-white -mt-16'>pizzA</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img className='' src={img3} alt="" />
        <h2 className='md:text-3xl text-center uppercase text-white -mt-16'>SOUPS</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img className='' src={img4} alt="" />
        <h2 className='md:text-3xl text-center uppercase text-white -mt-16'>DESART</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img className='' src={img5} alt="" />
        <h2 className='md:text-3xl text-center uppercase text-white -mt-16'>Salad</h2>
        </SwiperSlide>
       
      </Swiper>
       </section>
    );
};

export default Category;