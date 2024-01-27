"use client";

import React from "react";
import Heading from "../shared/Heading";
import { bookChapters } from "@/utils/fk-data";
import Image from "next/image";
import ShowMoreLink from "../shared/ShowMoreLink";
import AuthorIcon from "../icons/AuthorIcon";
import LocationIcon from "../icons/LocationIcon";
import { getConfigValue, getImageLink } from "@/utils/globalStore";
import { ResourceSection } from "../global/ResourceSection";

const BookChapterList = ({ books }) => {
  return books.slice(0, 4).map((report) => (
    <a
      key={report._id}
      href={report?.external_link}
      target="_blank"
      className="block report-card c-resource-section-name--white c-resource-section-icon--md"
    >
      <section className="flex gap-4 py-4 items-center justify-between">
        <div>
          <div className="report-card__date">
            <span>&copy;{report.publish_year}</span>
          </div>

          <h2 className="report-card__title">{report.title}</h2>

          <q className="my-0 report-card__desc">{report?.chapter}</q>

          <div className="report-card__image">
            <img
              src={getImageLink(report.photos[0])}
              alt={`book`}
              width={254}
              height={168}
              className="rounded"
              crossOrigin="anonymous"
            />
          </div>

          <ResourceSection
            image={report.platform.photos[0]}
            name={report.platform.name}
            className="mt-4"
          />

          {/* <section className="mt-3 text-xs text-gray-300 font-gothamMedium">
            <div className="flex gap-3 items-center author-icon">
              <AuthorIcon color="#fff" />

              <span>{report.book_author}</span>
            </div>

            {report.journal && (
              <div className="mt-3 flex gap-3 items-center location-icon">
                <LocationIcon color="#fff" />

                <span>{report.journal}</span>
              </div>
            )}
          </section> */}
        </div>

        <div className="report-card__link-icon centered-content orange-gradient-onHover">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="url(#paint0_linear_553_17217)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9199 0.62C12.8185 0.375651 12.6243 0.181475 12.3799 0.0799999C12.2597 0.028759 12.1306 0.00157999 11.9999 0H1.99994C1.73472 0 1.48037 0.105357 1.29283 0.292893C1.1053 0.48043 0.999939 0.734784 0.999939 1C0.999939 1.26522 1.1053 1.51957 1.29283 1.70711C1.48037 1.89464 1.73472 2 1.99994 2H9.58994L1.28994 10.29C1.19621 10.383 1.12182 10.4936 1.07105 10.6154C1.02028 10.7373 0.994141 10.868 0.994141 11C0.994141 11.132 1.02028 11.2627 1.07105 11.3846C1.12182 11.5064 1.19621 11.617 1.28994 11.71C1.3829 11.8037 1.4935 11.8781 1.61536 11.9289C1.73722 11.9797 1.86793 12.0058 1.99994 12.0058C2.13195 12.0058 2.26266 11.9797 2.38452 11.9289C2.50638 11.8781 2.61698 11.8037 2.70994 11.71L10.9999 3.41V11C10.9999 11.2652 11.1053 11.5196 11.2928 11.7071C11.4804 11.8946 11.7347 12 11.9999 12C12.2652 12 12.5195 11.8946 12.707 11.7071C12.8946 11.5196 12.9999 11.2652 12.9999 11V1C12.9984 0.869323 12.9712 0.740222 12.9199 0.62Z"
              fill="current"
            />
            <defs>
              <linearGradient
                id="paint0_linear_553_17217"
                x1="0.994141"
                y1="6.00266"
                x2="13.0001"
                y2="6.00266"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C29C6C" />
                <stop offset="1" stopColor="#8C7A52" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </a>
  ));
};

export default function BookChapter({ portfolioData }) {
  const title = getConfigValue(portfolioData.configData, 'books_title')?.value || 'Book Chapters'
  const caption = getConfigValue(portfolioData.configData, 'books_home_caption')?.value || 'Uncover Yemen&apos;s Untold Realities. Explore in-depth analysis and first-hand accounts from local communities.  '

  return (
    <div className="reports reports__section">
      <div className="container">
        <Heading title={title} className="mb-2" />
        <h2 className="reports__section-title uppercase md:capitalize">
          {caption}
        </h2>

        <div className="reports__content mt-8 md:mt-12">
          <div className="m-0">
            <div className="lg:ms-20 2xl:ms-28">
              <hr />
              <BookChapterList books={portfolioData.books ?? []} />
              <hr />
            </div>
          </div>
        </div>
        <div className="mt-8 relative z-10  w-full flex justify-center md:justify-end">
          <ShowMoreLink link="/book-chapters" text="Show All book chapters" />
        </div>
      </div>
      {/* <div className="reports__logo-pattern">
        <Image
          className=" "
          src="/assets/logo-pattern-left.png"
          alt="YTV"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div> */}
    </div>
  );
}
