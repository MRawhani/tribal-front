import InterviewCard from "@/components/global/InterviewCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { interviews } from "@/utils/fk-data";

export default function Interviews() {
  return (
    <div className="bg-white">
      <div className="container">
        <Breadcrumb
          links={[{ title: "interviews", href: "/interviews" }]}
          title="Interviews"
          description="Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights."
        />

        <section className="mt-8 md:mt-16 grid grid-cols-6 gap-x-4 gap-y-6">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="col-span-6 sm:col-span-3 lg:col-span-2"
            >
              <InterviewCard
                interview={interview}
                className="interview-card--is-second-bg"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
