import { Breadcrumb } from "@/components/global/Breadcrumb";
import StoryPaginationContainer from "@/components/pagination/StoryPaginationContainer";
import { fetchClientData, getConfigValue } from "@/utils/globalStore";
import React, { Suspense } from "react";

export default async function Stories() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  const title =
    getConfigValue(portfolioData.configData, "stories_title")?.value ||
    "Stories";
  const caption =
    getConfigValue(portfolioData.configData, "stories_page_caption")?.value ||
    "Discover firsthand accounts and perspectives from diverse individuals shaping the nation's future.";

  // stories
  return (
    <section>
      <div className="container">
        <Breadcrumb
          links={[{ title: "stories", href: "/stories" }]}
          title={title}
          description={caption}
        />

        <Suspense fallback={<div>Loading...</div>}>
          <StoryPaginationContainer items={portfolioData.stories} />
        </Suspense>
      </div>
    </section>
  );
}
