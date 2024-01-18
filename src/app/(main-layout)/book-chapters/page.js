import React from "react";
import BookChapterCard from "@/components/global/BookChapterCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { fetchClientData } from "@/utils/globalStore";

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

        <section className="mt-8 md:mt-16 grid grid-cols-12 gap-4">
          {portfolioData.books.map((bookItem) => (
            <div
              key={bookItem._id}
              className="col-span-12 sm:col-span-6 xl:col-span-4"
            >
              <BookChapterCard item={bookItem} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
