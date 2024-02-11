"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//
import Heading from "@/components/shared/Heading";

import { articles as articles_list } from "@/utils/fk-data";
import ArticleCard from "../global/ArticleCard";
import ShowMoreLink from "../shared/ShowMoreLink";
import PrevIcon from "../icons/PrevIcon";
import NextIcon from "../icons/NextIcon";
import { getConfigValue } from "@/utils/globalStore";

export default function Articles({ portfolioData }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef();
  const swiperKey = Date.now();
  const title = getConfigValue(portfolioData.configData, 'reports_title')?.value || 'Reports'
  const caption = getConfigValue(portfolioData.configData, 'reports_home_caption')?.value || "Discover Yemen's Richness. Explore history, culture, and stories in thought-provoking articles."

  return (
    <div className="articles articles__section pt-20 pb-4">
      <div className="">
        <div className="container articles__content">
          <Heading title={title} className="mb-4" />

          <div className="flex justify-between gap-20 items-center  mb-8 md:mb-12">
            <div className="lg:flex justify-between items-end ">
              <h2 className="articles__section-title font-ncs">
               {caption}
                <br className="hidden xl:block" />
              </h2>
            </div>

            {/* swiper button */}
            <div className="!hidden xl:!flex slider-btn-wrapper">
              <button className="slider-btn slider-btn--fill articles-slider-prev-btn">
                <PrevIcon />
              </button>
              <button className="slider-btn slider-btn--fill articles-slider-next-btn">
                <NextIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="container ps-4 articles__content">
          <Swiper
            key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
            slidesPerView={1.1}
            spaceBetween={16}
            modules={[Pagination, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onInit={(swiper) => {
              setTimeout(() => {
                swiper.update();
              }, 300);
            }}
            pagination={false}
            navigation={{
              prevEl: ".articles-slider-prev-btn",
              nextEl: ".articles-slider-next-btn",
            }}
            observer={true}
            observeParents={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                pagination: false,
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            className="mySwiper"
          >
            {portfolioData.reports.map((item) => (
              <SwiperSlide key={item._id}>
                <ArticleCard article={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full flex justify-center xl:justify-end">
            <ShowMoreLink link="/reports" text="Show all reports" />
          </div>
        </div>
      </div>
    </div>
  );
}
