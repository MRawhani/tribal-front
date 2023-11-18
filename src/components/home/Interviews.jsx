"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import Heading from "../shared/Heading";
import { homeData } from "@/utils/data";
import InterviewCard from "../global/InterviewCard";

export default function Interviews() {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="bg-white interviews py-20 md:py-32">
      <div className="container">
        <Heading title={homeData.interviews.title} />
      </div>

      <div className="container md:flex justify-between items-center gap-10">
        <p className="interviews__description  font-ncs mt-3 uppercase md:capitalize text-base md:text-2xl">
          Discover firsthand accounts and perspectives from <br /> diverse
          individuals shaping the nation&apos;s future.{" "}
        </p>

        {/* swiper button */}
        <div className="!hidden md:!flex slider-btn-wrapper">
          <button className="slider-btn slider-prev-btn">
            <PrevIcon  color="white"/>
          </button>
          <button className="slider-btn slider-next-btn">
            <NextIcon color="white" />
          </button>
        </div>
      </div>

      <div className="interviews__content container">
        <section className="mt-8 md:mt-11">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={12}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onInit={(swiper) => {
              setTimeout(() => {
                swiper.update();
              }, 300);
            }}
            navigation={{
              prevEl: ".slider-prev-btn",
              nextEl: ".slider-next-btn",
            }}
            observer={true}
            observeParents={true}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 2.4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.4,
              },
            }}
          >
            {homeData.interviews.items.map((item) => (
              <SwiperSlide key={item.id}>
                <InterviewCard interview={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
