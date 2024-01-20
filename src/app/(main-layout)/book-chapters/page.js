import React from "react";
import BookChapterCard from "@/components/global/BookChapterCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { fetchClientData } from "@/utils/globalStore";
import BooksPaginationContainer from "@/components/pagination/BooksPaginationContainer";

export default async function BookChapterPage() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;

  return (
    <div className="bg-white page-book-chapters">
      <div className="container pb-8">
        <Breadcrumb
          links={[{ title: "Book Chapters", href: "/book-chapters" }]}
          title="Book Chapters"
          description="Unfold history, culture, and untold tales in captivating literature."
        />

        <BooksPaginationContainer items={portfolioData.books} />

        
      </div>
    </div>
  );
}
