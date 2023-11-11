"use client";

import { Breadcrumb } from "@/components/global/Breadcrumb";
import { photoDetails } from "@/utils/fk-data";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import { homeData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { signal } from "@preact/signals-react";
import { effect } from "@preact/signals-react";

const OtherPhotos = () => {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div>
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
        {homeData.photos.items.map((item) => (
          <SwiperSlide key={item.title}>
            <Link href={`/photos/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={430}
                height={315}
              />
            </Link>
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
};

export const showPhotoModal = signal(false);

effect(() => {
  const historyHandler = () => {
    if (showPhotoModal.value) {
      showPhotoModal.value = false;
    }
    console.log("modal closed");
  };

  if (showPhotoModal.value) {
    document.body.style.overflow = "hidden";
    document.addEventListener("history:change", historyHandler);
  } else {
    document.body.style.overflow = "auto";
    document.removeEventListener("history:change", historyHandler);
  }
});

export default function PhotoDetailsModal({
  // showModal = false,
  photoData,
  closeModal = () => {},
}) {
  const router = useRouter();

  useEffect(() => {
    let openPhotoModal = function (event) {
      let modalElementsWrapper = document.querySelector("#photo-modal-wrapper");

      if (!modalElementsWrapper) return;

      let $this = event.currentTarget;
      let position = $this.getBoundingClientRect();
      let size = {
        width: window.getComputedStyle($this).width,
        height: window.getComputedStyle($this).height,
      };

      modalElementsWrapper.style.setProperty(
        "--bg-src",
        getComputedStyle($this).getPropertyValue("--bg-src")
      );

      modalElementsWrapper.style.top = position.top + "px";
      modalElementsWrapper.style.left = position.left + "px";
      modalElementsWrapper.style.minHeight = size.height;
      modalElementsWrapper.style.width = size.width;
      modalElementsWrapper.style.margin = $this.style.margin;

      setTimeout(function () {
        let classes = $this.classList.value.split(" ");

        for (let i = 0; i < classes.length; i++) {
          modalElementsWrapper.classList.add(classes[i]);
        }

        modalElementsWrapper.classList.add("growing");
        modalElementsWrapper.style.minHeight = "100vh";
        modalElementsWrapper.style.width = "100vw";
        modalElementsWrapper.style.top = "0";
        modalElementsWrapper.style.left = "0";
        modalElementsWrapper.style.margin = "0";
      }, 1);

      setTimeout(function () {
        modalElementsWrapper.classList.remove("growing");
        modalElementsWrapper.classList.add("full-screen");
      }, 1000);
    };

    document
      .querySelectorAll(".photo-modal-item")
      .forEach((el) => el.addEventListener("click", openPhotoModal));
  }, [router, photoData]);

  useEffect(() => {
    if (photoData?.id && showPhotoModal.value) {
      window.history.pushState(
        null,
        "photo details page",
        `/photos/${photoData?.id}`
      );

      const event = new Event("history:change");

      window.history.pushState = new Proxy(window.history.pushState, {
        apply: (target, thisArg, argArray) => {
          // trigger here what you need

          document.dispatchEvent(event);

          return target.apply(thisArg, argArray);
        },
      });
    }

    document.body.style.overflowY = showPhotoModal.value ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [photoData]);

  if (!showPhotoModal.value) return;

  return (
    <div>
      <Navbar className="details-layout-navbar" isHomePage={false} />

      <div className="page-photo-details">
        <div
          className="hero-section"
          style={{ "--hero-bg-src": `url(${photoData?.image}` }}
        ></div>

        <div className="container -mt-20">
          <Breadcrumb
            links={[
              { title: "photos", href: "/photos" },
              {
                title: photoDetails.title,
                href: `/photos/${3}`,
              },
            ]}
            title="Photos"
            subTitle={photoDetails.title}
            date={photoDetails.date}
          />
        </div>

        <section className="container mt-16 grid grid-cols-12 gap-6">
          {/* info */}
          <div className="col-span-12 md:col-span-4 font-gothamMedium text-base flex flex-col gap-3">
            {[
              { title: "Location: ", value: photoDetails.location },
              { title: "Date: ", value: photoDetails.date },
            ].map((item) => {
              return (
                <div key={item.title}>
                  <span className="text-secondary_secondary">{item.title}</span>
                  <span className="text-neutral-900">{item.value}</span>
                </div>
              );
            })}
          </div>

          {/* content */}
          <div
            className="col-span-12 md:col-span-8 font-gothamLight text-lg"
            dangerouslySetInnerHTML={{ __html: photoDetails.content }}
          />
        </section>

        {/* other photos */}
        <div className="mt-16 md:mt-28">
          <OtherPhotos />
        </div>
      </div>

      <Footer />
    </div>
  );
}
