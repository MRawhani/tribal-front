"use client";
import React, { useRef } from "react";
import BookChapterCard from "@/components/global/BookChapterCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import Heading from "../shared/Heading";
import { homeData } from "@/utils/data";

export default function BookChapters() {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="bg-white book-chapters py-20 md:py-32">
      <div className="container max-w-4xl">
        <Heading title={homeData.bookChapters.title} />

        <p className="book-chapters__description uppercase text-base md:text-2xl">
          {homeData.bookChapters.description}
        </p>
      </div>

      <div className="px-4  mx-auto  lg:container">
        <section className="mt-8 max-w-4xl mx-auto md:mt-16 lg:px-10">
          <Swiper
            key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
            slidesPerView={1}
            loop={true}
            spaceBetween={100}
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
          >
            {homeData.bookChapters.items.map((item) => (
              <SwiperSlide key={item.id}>
                <BookChapterCard item={item} />
              </SwiperSlide>
            ))}

            <div className="slider-btn-wrapper mt-6 md:mt-14">
              <button className="slider-btn slider-prev-btn">
                <PrevIcon color="#C99A64" />
              </button>
              <button className="slider-btn slider-next-btn">
                <NextIcon color="#C99A64" />
              </button>
            </div>
          </Swiper>
        </section>
      </div>
    </div>
  );
}
