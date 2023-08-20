"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//comopnenets
import Heading from "../shared/Heading";

import { articles as articles_list } from "@/utils/fk-data";
export default function Articles() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiper = useSwiper();
  const swiperRef = useRef();
  const swiperKey = Date.now();
  const SliderHeader = () => (
    <div className="flex justify-between items-end  mb-20">
      <h1 className="articles__section-title">
        Discover Yemen&apos;s Richness. Explore history, culture, and stories in
        thought-provoking articles.
      </h1>
      <div className="flex items-center ml-48">
        {/* onClick={() => swiperRef.current?.slidePrev()} */}
        <button className="articles__nav-btn prev  mr-10" ref={prevRef}>
          <Image src="/icons/arrow-left.svg" alt="prev" width="7" height="12" />
        </button>
        <button className="articles__nav-btn next" ref={nextRef}>
          <Image
            src="/icons/arrow-right.svg"
            alt="next"
            width="7"
            height="12"
          />
        </button>
      </div>
    </div>
  );
  return (
    <div className="articles articles__section">
      <div className="container">
        <div className="articles__content">
          <Heading title="Aricles" className="mb-4" />
          <SliderHeader />

          <Swiper
            key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: ".articles__nav-btn.prev",
              nextEl: ".articles__nav-btn.next",
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onInit={(swiper) => {
              setTimeout(() => {
                swiper.update();
              }, 300);
            }}
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
              <SwiperSlide key={article.id} className="!h-auto">
                <div className="article-card h-full  ">
                  <div className="article-card__img">
                    <Image
                      src={`/assets/${article.img}.png`}
                      alt={`article`}
                      width="0"
                      height="0"
                      sizes="100vw"
                      objectFit="cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="article-card__content">
                    <h2 className="article-card__title">{article.title}</h2>
                    <p className="article-card__date">{article.date}</p>
                    <div className="article-card__recource flex items-center">
                      <div className="article-card__recource-icon">
                        <Image
                          src={`/assets/${article.recource_icon}.svg`}
                          alt={`article`}
                          layout='fill'
                          objectFit='contain'
                           
                        />
                      </div>
                      <h6 className="article-card__recource-name">
                        {article.recource_name}
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
