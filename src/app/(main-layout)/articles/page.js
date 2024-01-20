import ArticleCard from "@/components/global/ArticleCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { articles } from "@/utils/fk-data";
import { fetchClientData } from "@/utils/globalStore";
import ReportsPaginationContainer from "@/components/pagination/ReportsPaginationContainer";

export default async function Articles() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;

  return (
    <div className="bg-white reports-page">
      <div className="container">
        <Breadcrumb
          links={[{ title: "reports", href: "/articles" }]}
          title="reports"
          description="Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights."
        />

        <ReportsPaginationContainer items={portfolioData.reports} />
      </div>
    </div>
  );
}
