import ArticleCard from "@/components/global/ArticleCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { articles } from "@/utils/fk-data";
import { fetchClientData, getConfigValue } from "@/utils/globalStore";
import ReportsPaginationContainer from "@/components/pagination/ReportsPaginationContainer";

export default async function Articles() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  const title = getConfigValue(portfolioData.configData, 'reports_title')?.value || 'Reports';
  const caption = getConfigValue(portfolioData.configData, 'reports_page_caption')?.value || "Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights."

  return (
    <div className="bg-white reports-page">
      <div className="container">
        <Breadcrumb
          links={[{ title: "reports", href: "/reports" }]}
          title={title}
          description={caption}
        />

        <ReportsPaginationContainer items={portfolioData.reports} />
      </div>
    </div>
  );
}
