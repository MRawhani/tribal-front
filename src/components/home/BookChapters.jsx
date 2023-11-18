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
import { homeData } from "@/utils/fk-data";

export default function BookChapters() {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="bg-white book-chapters py-20 md:py-32">
      <div className="container max-w-4xl">
        <Heading title={homeData.bookChapters.title} />

        <p className="book-chapters__description mt-2 uppercase md:capitalize text-base md:text-2xl">
          Unfold history, culture, and untold tales in captivating <br />{" "}
          literature.
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

      <svg
        width="390"
        height="117"
        viewBox="0 0 390 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shapes-top"
      >
        <circle cx="165" cy="-108" r="224.5" stroke="#BC9665" />
        <circle cx="-60" cy="-39" r="224.5" stroke="#FFFAEE" />
      </svg>

      <svg
        width="113"
        height="343"
        viewBox="0 0 113 343"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shapes-bottom"
      >
        <circle cx="-60" cy="-39" r="224.5" stroke="#FFFAEE" />
        <circle cx="165" cy="-108" r="224.5" stroke="#BC9665" />
      </svg>
    </div>
  );
}
