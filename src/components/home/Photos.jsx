"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/components/shared/Heading";
import { homeData } from "@/utils/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ShowMoreLink from "../shared/ShowMoreLink";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";
import PhotoDetailsModal from "../shared/PhotoDetailsModal";

const PhotosList = ({ reverseDirection = false, openPhotoModal }) => {
  const [swiperInit, setSwiperInit] = useState(null);

  function handleMouseEnter() {
    swiperInit?.autoplay?.stop();
  }
  function handleMouseLeave() {
    swiperInit?.autoplay?.start();
  }
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
          setSwiperInit(swiper);
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
        <SwiperSlide
          key={photo.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ "--bg-image-src": `url(${photo.image})` }}
        >
          <div
            onClick={() => openPhotoModal(photo)}
            className="cursor-pointer block h-48 overflow-hidden swiper-slide-item photo-modal-item"
          >
            <Image
              src={photo.image}
              alt={photo.title}
              fill={true}
              className="object-center object-cover"
            />

            <ArrowLinkIcon
              width="13"
              height="13"
              className="arrow-icon"
              color="#fff"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function Photos() {
  const [showModal, setShowModal] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  function openPhotoModal(photo) {
    setShowModal(true);
    setPhotoData(photo);
  }

  return (
    <div>
      <div id="photo-modal-wrapper">
        <PhotoDetailsModal
          key={showModal}
          showModal={showModal}
          photoData={photoData}
        />
      </div>

      <div className="photos py-20 2xl:py-32">
        <div className="container mb-8 md:mb-12">
          <Heading title={homeData.photos.title} />

          <p className="photos__description mt-2 uppercase md:capitalize">
          Yemen&lsquo;s Cultural Richness in Photos: Tribes, Customs, <br /> Traditions.
          </p>
        </div>

        <PhotosList openPhotoModal={openPhotoModal} />

        <div className="mt-7">
          <PhotosList openPhotoModal={openPhotoModal} reverseDirection={true} />
        </div>

        <div className="container mt-8">
          <div className="w-full flex justify-center">
            <ShowMoreLink link="/photos" text="Show All Photos" />
          </div>
        </div>
      </div>
    </div>
  );
}
