"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/shared/Heading";
import ShowMoreButton from "@/components/shared/ShowMoreButton";
import { homeData } from "@/utils/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ShowMoreLink from "../shared/ShowMoreLink";

const PhotosList = ({ reverseDirection = false }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1.5}
      spaceBetween={16}
      centeredSlides={true}
      speed={1600}
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: reverseDirection,
      }}
      loop={true}
      onInit={(swiper) => {
        setTimeout(() => {
          swiper.update();
        }, 300);
      }}
      observer={true}
      observeParents={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {homeData.photos.items.map((photo, index) => (
        <SwiperSlide key={photo.title}>
          <div className="w-[510px] h-48 overflow-hidden">
            <Image
              src={photo.image}
              alt={photo.title}
              fill={true}
              className="object-center object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function Photos() {
  return (
    <div className="photos py-20 2xl:py-32">
      <div className="container mb-14">
        <Heading title={homeData.photos.title} />

        <p className="photos__description uppercase">
          {homeData.photos.description}
        </p>
      </div>

      <PhotosList />
      
      <div className="mt-7">
        <PhotosList reverseDirection={true} />
      </div>

      <div className="container mt-8">
        <div className="w-full flex justify-center">
          <ShowMoreLink link="/photos" text="Show All Photos" />
        </div>
      </div>
    </div>
  );
}
