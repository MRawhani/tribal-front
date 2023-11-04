"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//
import Heading from "@/components/shared/Heading";

import { articles as articles_list } from "@/utils/fk-data";
import ArticleCard from "../global/ArticleCard";
import ShowMoreLink from "../shared/ShowMoreLink";

export default function Articles() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="articles articles__section pt-20 pb-4">
      <div className="">
        <div className="container articles__content">
          <Heading title="Articles" className="mb-4" />

          <div className="lg:flex justify-between items-end  mb-8">
            <h2 className="articles__section-title">
              Discover Yemen&apos;s Richness. Explore history, culture, and
              stories in thought-provoking articles.
            </h2>
          </div>
        </div>

        <div className="container ps-4 articles__content">
          <Swiper
            key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
            slidesPerView={1.1}
            spaceBetween={16}
            modules={[Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onInit={(swiper) => {
              setTimeout(() => {
                swiper.update();
              }, 300);
            }}
            pagination={true}
            observer={true}
            observeParents={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            className="mySwiper"
          >
            {articles_list.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full flex justify-center">
            <ShowMoreLink link="/articles" text="Show All Articles" />
          </div>
        </div>
      </div>
    </div>
  );
}
