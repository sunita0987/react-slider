// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {stepsData} from "../utils/stepsData.js";
import StepsCard from "../components/StepsCard.jsx";
const Slider = () => {
  console.log(stepsData);
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-black">
        Simple Steps To <span className="text-black">Switch</span>
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
        consectetur mi. Vulputate sapien a a bibendum
      </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {stepsData.map((step, index) => (
          <SwiperSlide key={step.id}>
            <StepsCard step={step} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
