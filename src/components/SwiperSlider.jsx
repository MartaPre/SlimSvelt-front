
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

// // import "./styles.css";


// import SwiperCore, {
//   Pagination
// } from 'swiper/core';

// SwiperCore.use([Pagination]);

// export default function SwiperSlider() {
    
//   return (
//     <>
//         <Swiper slidesPerView={3} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
//             <SwiperSlide><img  className="swipe-image-container"/></SwiperSlide>
//             <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//             <SwiperSlide>Slide 4</SwiperSlide>
//             <SwiperSlide>Slide 5</SwiperSlide>            
//         </Swiper>        
//     </>
//   )
// }


import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


import "./Swiper.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function SwiperSlider(props) {
  return (
    <>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{"rotate": 50,"stretch": 0,"depth": 100,"modifier": 1,"slideShadows": true}} pagination={true} className="mySwiper">
        {
          props.images.map((image, index) => 
            <SwiperSlide onClick={() => props.select(props.text[index])}><h2><span className="swiper-text">{props.text[index]}</span></h2><img alt={props.text[index]} src={image} /></SwiperSlide>
          )
        }
    </Swiper>
    </>
  )
}