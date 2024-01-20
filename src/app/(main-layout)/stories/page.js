import { Breadcrumb } from "@/components/global/Breadcrumb";
import StoryPaginationContainer from "@/components/pagination/StoryPaginationContainer";
import { fetchClientData } from "@/utils/globalStore";
import React from "react";

export default async function Stories() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  // stories
  return (
    <section>
      <div className="container">
        <Breadcrumb
          links={[{ title: "stories", href: "/stories" }]}
          title="stories"
          description="Discover firsthand accounts and perspectives from diverse individuals shaping the nation's future."
        />

        <StoryPaginationContainer items={portfolioData.stories} />
      </div>
    </section>
  );
}
