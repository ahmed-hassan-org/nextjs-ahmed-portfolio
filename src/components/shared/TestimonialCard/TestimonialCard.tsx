import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "./TestimonialItem";

const TestimonialCard = () => {
  return (
    <section
      className="expericne-section-wrapper container relative grid grid-cols-4 mt-24 mb-16"
      id="testimonialId"
    >
      <div className="col-span-4 flex flex-row justify-center items-center ">
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-200 px-3 py-2 text-center align-baseline text-[0.75em] font-bold leading-none text-gray-600">
          Testimonial
        </span>
      </div>
      <div className="col-span-4 px-4 py-8">
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialItem imageId={1} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem imageId={2} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem imageId={3} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem imageId={4} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem imageId={5} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem imageId={6} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCard;
