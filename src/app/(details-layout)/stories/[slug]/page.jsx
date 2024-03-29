/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { ShareToSocialMediaLinks } from "@/components/ShareToSocialMediaLinks";
import StoryOtherPhotos from "@/components/StoryOtherPhotos";
import { photoDetails } from "@/utils/fk-data";
import { fetchStoryData, getImageLink } from "@/utils/globalStore";
import Image from "next/image";
import React from "react";

export default async function PhotoDetails({ params }) {
  const data = (await fetchStoryData(params.slug)).item ?? {};


  return (
    <div className="page-photo-details">
      <div className="hero-section">
        <Image
          src={getImageLink(data?.main_image[0])}
          crossOrigin="anonymous"
          alt="background image"
          loading="lazy"
          layout="fill"
        />
      </div>

      <div className="container -mt-20">
        <Breadcrumb
          links={[
            { title: "stores", href: "/stories" },
            {
              title: data?.title,
              href: `/stories/${params.slug}`,
            },
          ]}
          title="Stories"
          subTitle={data?.title}
          date={data?.date}
          location={data?.location}
        />
      </div>

      <section className="container mt-16 grid grid-cols-12 gap-6">
        {/* info */}
        <div className="col-span-12 md:col-span-4 font-gothamMedium text-base flex flex-col gap-3">
          <ShareToSocialMediaLinks />
        </div>

        {/* content */}
        <div
          className="col-span-12 md:col-span-8 font-gothamLight story-content"
          dangerouslySetInnerHTML={{ __html: data?.body ?? "" }}
        />
      </section>

      {/* other photos */}
      <div className="mt-16 md:mt-28">
        <StoryOtherPhotos otherImages={data?.other_images ?? []} />
      </div>
    </div>
  );
}
