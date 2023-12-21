import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style/CarouselEffect.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function CarouselEffect() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-1.PNG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-2.JPG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-3.JPG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-4.PNG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-6.PNG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-7.PNG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-8.PNG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-9.PNG" />
        </SwiperSlide>
        <SwiperSlide className="myswiper-slide">
          <img src="assets/carouselHobby/foto-10.PNG" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
