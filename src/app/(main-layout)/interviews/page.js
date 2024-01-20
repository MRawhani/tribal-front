import InterviewCard from "@/components/global/InterviewCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { fetchClientData } from "@/utils/globalStore";
import InterviewsPaginationContainer from "@/components/pagination/InterviewsPaginationContainer";

export default async function Interviews() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;

  return (
    <div className="bg-white interview-page">
      <div className="container">
        <Breadcrumb
          links={[{ title: "interviews", href: "/interviews" }]}
          title="Interviews"
          description="Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights."
        />

        <InterviewsPaginationContainer items={portfolioData.interviews} />

      
      </div>
    </div>
  );
}
