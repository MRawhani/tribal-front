import React, { Suspense } from "react";
import BookChapterCard from "@/components/global/BookChapterCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { fetchClientData, getConfigValue } from "@/utils/globalStore";
import BooksPaginationContainer from "@/components/pagination/BooksPaginationContainer";

export default async function BookChapterPage() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  const title =
    getConfigValue(portfolioData.configData, "books_title")?.value ||
    "Book Chapters";
  const caption =
    getConfigValue(portfolioData.configData, "books_page_caption")?.value ||
    "Unfold history, culture, and untold tales in captivating literature.";

  return (
    <div className="bg-white page-book-chapters">
      <div className="container pb-8">
        <Breadcrumb
          links={[{ title: "Book Chapters", href: "/book-chapters" }]}
          title={title}
          description={caption}
        />

        <Suspense fallback={<div>Loading...</div>}>
          <BooksPaginationContainer items={portfolioData.books} />
        </Suspense>
      </div>
    </div>
  );
}
