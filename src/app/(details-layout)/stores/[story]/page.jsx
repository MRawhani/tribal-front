"use client";

import { Breadcrumb } from "@/components/global/Breadcrumb";
import { photoDetails, homeData } from "@/utils/fk-data";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const OtherPhotos = () => {
  const swiperRef = useRef();
  const swiperKey = Date.now();

  return (
    <div>
      <Swiper
        key={process.env.NODE_ENV === "development" ? swiperKey : undefined}
        slidesPerView="auto"
        spaceBetween={100}
        loop={true}
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
                className="rounded"
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

const ShareToSocialMediaLinks = () => {
  const currentPageUrl = window.location.href;
  return (
    <div className="mt-11">
      <h3 className="text-lg capitalize">Share to social media</h3>

      <div className="flex gap-2 mt-2">
        {/* linkedin */}
        <div>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentPageUrl}`}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded transition-all hover:bg-secondary_secondary duration-300"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4705 2.92201H3.53055C3.34013 2.91937 3.15105 2.95426 2.97411 3.0247C2.79718 3.09513 2.63585 3.19974 2.49934 3.33253C2.36284 3.46532 2.25383 3.6237 2.17854 3.79862C2.10325 3.97355 2.06316 4.16159 2.06055 4.35201V21.492C2.06316 21.6824 2.10325 21.8705 2.17854 22.0454C2.25383 22.2203 2.36284 22.3787 2.49934 22.5115C2.63585 22.6443 2.79718 22.7489 2.97411 22.8193C3.15105 22.8898 3.34013 22.9247 3.53055 22.922H20.4705C20.661 22.9247 20.85 22.8898 21.027 22.8193C21.2039 22.7489 21.3652 22.6443 21.5017 22.5115C21.6383 22.3787 21.7473 22.2203 21.8226 22.0454C21.8978 21.8705 21.9379 21.6824 21.9405 21.492V4.35201C21.9379 4.16159 21.8978 3.97355 21.8226 3.79862C21.7473 3.6237 21.6383 3.46532 21.5017 3.33253C21.3652 3.19974 21.2039 3.09513 21.027 3.0247C20.85 2.95426 20.661 2.91937 20.4705 2.92201ZM8.09055 19.662H5.09055V10.662H8.09055V19.662ZM6.59055 9.40201C6.17681 9.40201 5.78002 9.23766 5.48746 8.9451C5.1949 8.65254 5.03055 8.25575 5.03055 7.84201C5.03055 7.42828 5.1949 7.03149 5.48746 6.73893C5.78002 6.44637 6.17681 6.28201 6.59055 6.28201C6.81024 6.2571 7.03272 6.27887 7.24342 6.3459C7.45412 6.41293 7.64829 6.5237 7.8132 6.67098C7.97812 6.81825 8.11007 6.99869 8.20042 7.2005C8.29076 7.4023 8.33746 7.62091 8.33746 7.84201C8.33746 8.06312 8.29076 8.28173 8.20042 8.48353C8.11007 8.68534 7.97812 8.86578 7.8132 9.01305C7.64829 9.16033 7.45412 9.2711 7.24342 9.33813C7.03272 9.40516 6.81024 9.42693 6.59055 9.40201ZM18.9105 19.662H15.9105V14.832C15.9105 13.622 15.4805 12.832 14.3905 12.832C14.0532 12.8345 13.7247 12.9403 13.4494 13.1352C13.174 13.3301 12.965 13.6047 12.8505 13.922C12.7723 14.1571 12.7384 14.4046 12.7505 14.652V19.652H9.75055C9.75055 19.652 9.75055 11.472 9.75055 10.652H12.7505V11.922C13.0231 11.4491 13.4195 11.0595 13.897 10.7952C14.3745 10.5309 14.9151 10.4019 15.4605 10.422C17.4605 10.422 18.9105 11.712 18.9105 14.482V19.662Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* fb */}
        <div>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentPageUrl}`}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded transition-all hover:bg-secondary_secondary duration-300"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9 2.92188H3.1C2.80826 2.92188 2.52847 3.03777 2.32218 3.24406C2.11589 3.45035 2 3.73014 2 4.02187V21.8219C2 21.9663 2.02845 22.1094 2.08373 22.2428C2.13901 22.3763 2.22004 22.4975 2.32218 22.5997C2.42433 22.7018 2.54559 22.7829 2.67905 22.8381C2.81251 22.8934 2.95555 22.9219 3.1 22.9219H12.68V15.1719H10.08V12.1719H12.68V9.92188C12.6261 9.39363 12.6885 8.86 12.8627 8.35841C13.0369 7.85682 13.3188 7.39942 13.6885 7.01829C14.0582 6.63715 14.5068 6.34152 15.0028 6.15211C15.4989 5.96271 16.0304 5.88413 16.56 5.92188C17.3383 5.91709 18.1163 5.95715 18.89 6.04187V8.74188H17.3C16.04 8.74188 15.8 9.34188 15.8 10.2119V12.1419H18.8L18.41 15.1419H15.8V22.9219H20.9C21.0445 22.9219 21.1875 22.8934 21.321 22.8381C21.4544 22.7829 21.5757 22.7018 21.6778 22.5997C21.78 22.4975 21.861 22.3763 21.9163 22.2428C21.9715 22.1094 22 21.9663 22 21.8219V4.02187C22 3.87742 21.9715 3.73438 21.9163 3.60092C21.861 3.46747 21.78 3.3462 21.6778 3.24406C21.5757 3.14191 21.4544 3.06089 21.321 3.00561C21.1875 2.95033 21.0445 2.92187 20.9 2.92188Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* instagram */}
        <div>
          <a
            href={`https://www.instagram.com/?url${currentPageUrl}`}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded transition-all hover:bg-secondary_secondary duration-300"
          >
            <svg
              width="24"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-8"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </div>

        {/* X */}
        <div>
          <a
            href={`https://twitter.com/intent/tweet?text=${currentPageUrl}`}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded transition-all hover:bg-secondary_secondary duration-300"
          >
            <svg width="24" height="25" viewBox="0 0 24 24">
              <g>
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function PhotoDetails() {
  const urlParams = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const photoData = homeData.photos.items.find(
      (item) => item.id === +urlParams?.photo
    );

    if (!photoData) return;

    setData(photoData);
  }, [urlParams]);

  return (
    <div className="page-photo-details">
      <div
        className="hero-section"
        style={{ "--hero-bg-src": `url(${data?.image}` }}
      ></div>

      <div className="container -mt-20">
        <Breadcrumb
          links={[
            { title: "stores", href: "/stores" },
            {
              title: photoDetails.title,
              href: `/stores/${urlParams.photo}`,
            },
          ]}
          title="Stories"
          subTitle={photoDetails.title}
          date={photoDetails.date}
          location={photoDetails.location}
        />
      </div>

      <section className="container mt-16 grid grid-cols-12 gap-6">
        {/* info */}
        <div className="col-span-12 md:col-span-4 font-gothamMedium text-base flex flex-col gap-3">
          <ShareToSocialMediaLinks />
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
  );
}
