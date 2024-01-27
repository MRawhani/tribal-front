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
import ShowMoreLink from "../shared/ShowMoreLink";
import { getConfigValue } from "@/utils/globalStore";

export default function Stories({portfolioData}) {
  const swiperRef = useRef();
  const swiperKey = Date.now();
  const title = getConfigValue(portfolioData.configData, 'stories_title')?.value || 'Stories';
  const caption = getConfigValue(portfolioData.configData, 'stories_home_caption')?.value || "Discover firsthand accounts and perspectives from diverse individuals shaping the nation's future."

  return (
    <div className="bg-white stories py-20 md:py-32">
      <div className="container md:flex justify-between">
        <div>
          <Heading title={title} />

          <p className="stories__description mt-3 uppercase md:capitalize font-ncs text-base md:text-2xl">
            {caption}
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
            {portfolioData.stories.map((item) => (
              <SwiperSlide key={item._id}>
                <StoryCard story={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="flex justify-center mt-20 ">
          <ShowMoreLink link="/stories" text="Show All Stories" />
        </div>
      </div>
    </div>
  );
}
