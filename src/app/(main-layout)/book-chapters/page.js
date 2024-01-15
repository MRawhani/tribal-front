"use client";
import React, { useRef } from "react";
import BookChapterCard from "@/components/global/BookChapterCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { bookChapters } from "@/utils/fk-data";

export default function BookChapterPage() {
  return (
    <div className="bg-white page-book-chapters">
      <div className="container pb-8">
        <Breadcrumb
          links={[{ title: "Book Chapters", href: "/book-chapters" }]}
          title="Book Chapters"
          description="Unfold history, culture, and untold tales in captivating literature."
        />

        <section className="mt-8 md:mt-16 grid grid-cols-12 gap-4">
          {bookChapters.map((bookItem) => (
            <div
              key={bookItem.id}
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
