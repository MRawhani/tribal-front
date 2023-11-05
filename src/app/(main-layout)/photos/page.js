import { Breadcrumb } from "@/components/global/Breadcrumb";
import Hero from "@/components/home/Hero";
import { homeData } from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function Photos() {
  return (
    <div className="container">
      <Breadcrumb
        links={[{ title: "photos", href: "/photos" }]}
        title="Photos"
        description="Yemen's Cultural Richness in Photos: Tribes, Customs, Traditions."
      />

      <section className="mt-16 grid grid-cols-3 gap-3">
        {homeData.photos.items.map((photo) => (
          <div
            key={photo.title}
            className="col-span-3 md:col-span-1 rounded-xl overflow-hidden"
          >
            <Image
              src={photo.image}
              alt={photo.title}
              width={358}
              height={213}
              className="object-cover object-center w-full h-full"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
