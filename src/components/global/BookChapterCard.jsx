/* eslint-disable @next/next/no-img-element */
import AuthorIcon from "../icons/AuthorIcon";
import LocationIcon from "../icons/LocationIcon";
import Link from "next/link";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";
import { getImageLink } from "@/utils/globalStore";
import { ResourceSection } from "./ResourceSection";

export default function BookChapterCard({ item, className = "" }) {
  return (
    <div
      className={
        "c-page-book-chapter w-full h-full border border-gray-100 p-4 overflow-hidden c-resource-section-icon--md" +
        className
      }
    >
      {/* <div className="col-span-3 image-wrapper">
        <div className="image-container h-72 -mx-4 -mt-4">
          <img
            loading="lazy"
            src={getImageLink(item.photos[0])}
            alt="Description of the image"
            className="image h-full object-cover w-full"
            crossOrigin="anonymous"
          />
        </div>
      </div> */}

      <div className="div">
        <div className="c-unpublished-research__content py-0">
          <div className="text-xs text-secondary_secondary">
            <span>&copy;{item.publish_year}</span>

            <span className="px-2">|</span>

            <span>
              Pages:
              <span className="text-primary_950 ps-1">{item.page_end}</span>
            </span>
          </div>

          <h2 className="c-book-chapter__title mt-2 line-clamp-2">
            {item.title}
          </h2>

          <q className="c-book-chapter__description mt-0">{item.chapter}</q>
        </div>

        <ResourceSection
          image={item.platform.photos[0]}
          name={item.platform.name}
          className="mt-2"
        />
      </div>

      {/* <section className="mt-3 text-xs font-gothamMedium">
        <div className="flex gap-3 items-center author-icon">
          <AuthorIcon />

          <span>{item.book_author}</span>
        </div>

        {item.journal && (
          <div className="mt-3 flex gap-3 items-center location-icon">
            <LocationIcon />
            <span>{item.journal}</span>
          </div>
        )}
      </section> */}

      <div className="flex justify-end mt-4">
        <Link
          className="c-page-book-chapter__link  flex justify-between items-center gap-4"
          href={item?.external_link}
          target="_blank"
        >
          <span>Read More</span>

          <ArrowLinkIcon
            width="12"
            height="12"
            className="arrow-icon"
            color="#BC9665"
          />
        </Link>
      </div>
    </div>
  );
}
