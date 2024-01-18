import ArticleCard from "@/components/global/ArticleCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { articles } from "@/utils/fk-data";
import { fetchClientData } from "@/utils/globalStore";

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

        <section className="mt-8 md:mt-16 grid grid-cols-6 gap-4">
          {portfolioData.reports.map((article) => (
            <div
              key={article.id}
              className="col-span-6 sm:col-span-3 lg:col-span-2"
            >
              <ArticleCard
                article={article}
                className="article-card--is-second-bg"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
