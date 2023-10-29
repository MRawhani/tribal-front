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

export default function PolicyPapers() {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div className="bg-white page-book-chapters ">
      <div className="container">
        <Breadcrumb
          links={[{ title: "Book Chapters", href: "/book-chapters" }]}
          title="Book Chapters"
          description="Unfold history, culture, and untold tales in captivating literature."
        />

        <section className="mt-8 md:mt-16 lg:px-10">
          <Swiper
            key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
            slidesPerView={1}
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
          >
            {bookChapters.map((item) => (
              <SwiperSlide key={item.id}>
                <BookChapterCard item={item} />
              </SwiperSlide>
            ))}

            <div className="slider-btn-wrapper mt-6">
              <button className="slider-btn slider-prev-btn">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1472 17.3647L7.9707 11.1882L14.1472 5.01172"
                    stroke="url(#paint0_linear_639_437067)"
                    strokeWidth="1.76471"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_639_437067"
                      x1="7.9707"
                      y1="11.1879"
                      x2="14.1472"
                      y2="11.1879"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" />˝
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button className="slider-btn slider-next-btn">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.85352 5.01172L15.03 11.1882L8.85352 17.3647"
                    stroke="url(#paint0_linear_639_437069)"
                    strokeWidth="1.76471"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_639_437069"
                      x1="8.85352"
                      y1="11.1879"
                      x2="15.03"
                      y2="11.1879"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </Swiper>
        </section>
      </div>
    </div>
  );
}
