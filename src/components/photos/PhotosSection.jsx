"use client";
import PhotoDetailsModal from "@/components/shared/PhotoDetailsModal";
import { homeData } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";

export default function Photos() {
  const [showModal, setShowModal] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  const gridClasses = ([
    "h-stretch",
    "big-stretch",
    "v-stretch",
    "v-stretch",
    "big-stretch",
    "h-stretch",
    "v-stretch",
    "big-stretch",
    "v-stretch",
    "v-stretch",
    "h-stretch",
  ]);

  function openPhotoModal(photo) {
    setShowModal(true);
    setPhotoData(photo);
  }

  return (
    <div>
      <div id="photo-modal-wrapper">
        <PhotoDetailsModal showModal={showModal} photoData={photoData} />
      </div>

      <section className="photos-wrapper mt-16 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
        {homeData.photos.items.map((photo, index) => (
          <div
            key={photo.title}
            className={`photo-modal-item rounded-xl overflow-hidden ${gridClasses[index]}`}
            onClick={() => openPhotoModal(photo)}
          >
            <Image
              src={photo.image}
              alt={photo.title}
              width={358}
              height={213}
              className="object-cover object-center w-full h-full"
            />

            <ArrowLinkIcon
              width="13"
              height="13"
              className="arrow-icon"
              color="#fff"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
