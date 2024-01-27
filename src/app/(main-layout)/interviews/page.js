import InterviewCard from "@/components/global/InterviewCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React, { Suspense } from "react";
import { fetchClientData, getConfigValue } from "@/utils/globalStore";
import InterviewsPaginationContainer from "@/components/pagination/InterviewsPaginationContainer";

export default async function Interviews() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  const title =
    getConfigValue(portfolioData.configData, "interviews_title")?.value ||
    "Interviews";
  const caption =
    getConfigValue(portfolioData.configData, "interviews_page_caption")
      ?.value ||
    "Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights.";

  return (
    <div className="bg-white interview-page">
      <div className="container">
        <Breadcrumb
          links={[{ title: "interviews", href: "/interviews" }]}
          title={title}
          description={caption}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <InterviewsPaginationContainer items={portfolioData.interviews} />
        </Suspense>
      </div>
    </div>
  );
}
