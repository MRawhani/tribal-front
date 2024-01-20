/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import Link from "next/link";
import Image from "next/image";
import { getImageLink } from "@/utils/globalStore";

export default function OtherPhotos({ otherImages }) {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div>
      {/* <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {otherImages.map((item, index) => (
          <img
            key={getImageLink(item) + index}
            src={getImageLink(item)}
            alt={item}
            width={430}
            height={315}
            className="rounded"
            crossOrigin="anonymous"
            data-src={getImageLink(item)}
          />
        ))}
      </LightGallery> */}
      <Swiper
        key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
        slidesPerView="auto"
        spaceBetween={100}
        centeredSlides={true}
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: ".slider-prev-btn",
          nextEl: ".slider-next-btn",
        }}

        className="mySwiper"
      >
        {otherImages.map((item, index) => (
          <SwiperSlide
            data-src={getImageLink(item)}
            key={getImageLink(item) + index}
          >
            <img
              src={getImageLink(item)}
              alt={item}
              width={430}
              height={315}
              className="rounded"
              crossOrigin="anonymous"
              data-src={getImageLink(item)}
            />
          </SwiperSlide>
        ))}

        <div className="slider-btn-wrapper slider-center-btn mt-6 md:mt-14">
          <button className="slider-btn slider-btn--fill slider-prev-btn">
            <PrevIcon />
          </button>
          <button className="slider-btn slider-btn--fill slider-next-btn">
            <NextIcon />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
