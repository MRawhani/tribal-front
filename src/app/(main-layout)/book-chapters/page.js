"use client";
import React, { useRef } from "react";
import BookChapterCard from "@/components/global/BookChapterCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { bookChapters } from "@/utils/fk-data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

export default function PolicyPapers() {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="bg-white page-book-chapters ">
      <div className="container overflow-auto pb-2">
        <Breadcrumb
          links={[{ title: "Book Chapters", href: "/book-chapters" }]}
          title="Book Chapters"
          description="Unfold history, culture, and untold tales in captivating literature."
        />
      </div>

      <div className="px-4 lg:container mx-auto max-w-4xl">
        <section className="mt-8 md:mt-16 lg:px-10">
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
            {bookChapters.map((item) => (
              <SwiperSlide key={item.id}>
                <BookChapterCard item={item} />
              </SwiperSlide>
            ))}

            <div className="slider-btn-wrapper mt-6 md:mt-14">
              <button className="slider-btn slider-prev-btn">
                <PrevIcon />
              </button>
              <button className="slider-btn slider-next-btn">
               <NextIcon />
              </button>
            </div>
          </Swiper>
        </section>
      </div>
    </div>
  );
}
