"use client";
import React from "react";

import Heading from "../shared/Heading";
import { homeData } from "@/utils/data";
import ReportCard from "../global/ReportCard";
import ShowMoreLink from "../shared/ShowMoreLink";

export default function PolicyPapers() {
  return (
    <div className="bg-white book-chapters py-20 md:py-32">
      <div className="container">
        <Heading title={homeData.policy_papers.title} />

        <p className="book-chapters__description mt-2 uppercase md:capitalize text-base md:text-2xl">
        Informed Solutions for Yemen&lsquo;s Future. Explore well-researched  <br /> insights to drive progress.
        </p>

        <section className="grid grid-cols-2 gap-4 mt-8 md:mt-16">
          {homeData.policy_papers.items.map((item) => (
            <div key={item.id} className="col-span-2 md:col-span-1">
              <ReportCard report={item} />
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
