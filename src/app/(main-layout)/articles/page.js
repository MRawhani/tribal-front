import ArticleCard from "@/components/global/ArticleCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { articles } from "@/utils/fk-data";

export default function Articles() {
  return (
    <div className="bg-white">
      <div className="container">
        <Breadcrumb
          links={[{ title: "articles", href: "/articles" }]}
          title="articles"
          description="Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights."
        />

        <section className="mt-8 md:mt-16 grid grid-cols-6 gap-4">
          {articles.map((article) => (
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
