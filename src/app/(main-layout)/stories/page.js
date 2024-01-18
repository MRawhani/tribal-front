import { Breadcrumb } from "@/components/global/Breadcrumb";
import StoryCard from "@/components/global/StoryCard";
import { stories } from "@/utils/fk-data";
import { fetchClientData } from "@/utils/globalStore";
import React from "react";

export default async function Stories() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  // stories
  return (
    <div className="container">
      <Breadcrumb
        links={[{ title: "stories", href: "/stories" }]}
        title="stories"
        description="Discover firsthand accounts and perspectives from diverse individuals shaping the nation's future."
      />

      <section className="mt-8 md:mt-16 grid grid-cols-6 gap-3">
        {portfolioData.stories.map((story) => (
          <div
            key={story._id}
            className="col-span-6 sm:col-span-3 lg:col-span-2"
          >
            <StoryCard story={story} />
          </div>
        ))}
      </section>
    </div>
  );
}
