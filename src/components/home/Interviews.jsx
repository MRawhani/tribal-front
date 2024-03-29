"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import Heading from "../shared/Heading";
import InterviewCard from "../global/InterviewCard";
import { interviews } from "@/utils/fk-data";
import ShowMoreLink from "../shared/ShowMoreLink";
import { getConfigValue } from "@/utils/globalStore";

export default function Interviews({portfolioData}) {
  const swiperRef = useRef();
  const swiperKey = Date.now();
  const title = getConfigValue(portfolioData.configData, 'interviews_title')?.value || 'Interviews';
  const caption = getConfigValue(portfolioData.configData, 'interviews_home_caption')?.value || "Discover firsthand accounts and perspectives from  diverse individuals shaping the nation's future."

  return (
    <div className="bg-white interviews py-20 md:py-32">
      <div className="container"> 
        <Heading title={title} />
      </div>

      <div className="container md:flex justify-between items-center gap-10">
        <p className="interviews__description  font-ncs mt-3 uppercase md:capitalize text-base md:text-2xl">
          {caption}
        </p>

        {/* swiper button */}
        <div className="!hidden md:!flex slider-btn-wrapper">
          <button className="slider-btn interview-slider-prev-btn">
            <PrevIcon  color="white"/>
          </button>
          <button className="slider-btn interview-slider-next-btn">
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
              prevEl: ".interview-slider-prev-btn",
              nextEl: ".interview-slider-next-btn",
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
            {portfolioData.interviews.map((item) => (
              <SwiperSlide key={item._id}>
                <InterviewCard interview={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="flex justify-center mt-20 ">
          <ShowMoreLink link="/interviews" text="Show All Interviews" />
        </div>
      </div>
    </div>
  );
}
