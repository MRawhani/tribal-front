"use client";
import React from "react";
import UnpublishedResearchCard from "@/components/global/UnpublishedResearchCard";

import Heading from "../shared/Heading";
import { homeData } from "@/utils/data";
import ShowMoreLink from "../shared/ShowMoreLink";

export default function UnpublishedResearch() {
  return (
    <div className="bg-seconday_50 unpublished-research py-20 md:py-32">
      <div className="px-4 lg:container mx-auto max-w-4xl">
        <Heading title={homeData.unpublished_research.title} />

        <p className="font-ncs uppercase text-base md:text-2xl">
          {homeData.unpublished_research.description}
        </p>

        <section className="grid grid-cols-3 gap-4 mt-8 md:mt-16 lg:px-10">
          {homeData.unpublished_research.items.map((item) => (
            <div key={item.id} className="col-span-3 md:col-span-1">
              <UnpublishedResearchCard item={item} />
            </div>
          ))}
        </section>

        <div className="flex justify-center mt-6">
          <ShowMoreLink text="Show All Research" link="/unpublished-research" />
        </div>
      </div>
    </div>
  );
}
