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
import StoryCard from "../global/StoryCard";

export default function Stories() {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="bg-white stories py-20 md:py-32">
      <div className="container md:flex justify-between">
        <div>
          <Heading title={homeData.stories.title} />

          <p className="stories__description mt-3 uppercase md:capitalize font-ncs text-base md:text-2xl">
            Discover firsthand accounts and perspectives from <br /> diverse
            individuals shaping the nation&apos;s future.{" "}
          </p>
        </div>

        {/* swiper button */}
        <div className="hidden md:block slider-btn-wrapper mt-6 md:mt-14">
          <button className="slider-btn slider-prev-btn">
            <PrevIcon color="white" />
          </button>
          <button className="slider-btn slider-next-btn">
            <NextIcon color="white" />
          </button>
        </div>
      </div>

      <div className="stories__content container">
        <section className="mt-8 md:mt-16">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={16}
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
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          >
            {homeData.stories.items.map((item) => (
              <SwiperSlide key={item.id}>
                <StoryCard story={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
