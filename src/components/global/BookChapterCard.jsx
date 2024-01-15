import AuthorIcon from "../icons/AuthorIcon";
import LocationIcon from "../icons/LocationIcon";
import Link from "next/link";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";

export default function BookChapterCard({ item, className = "" }) {
  return (
    <div
      className={
        "c-page-book-chapter w-full h-full border border-gray-100 !p-4 overflow-hidden rounded-xl" +
        className
      }
    >
      <div className="col-span-3 image-wrapper">
        <div className="image-container h-72 -mx-4 -mt-4">
          <img
            loading="lazy"
            srcSet={item.image}
            alt="Description of the image"
            className="image h-full object-cover w-full"
          />
        </div>
      </div>

      <div className="py-4 c-unpublished-research__content">
        <h2 className="c-book-chapter__title mt-2 line-clamp-2">
          {item.title}
        </h2>

        <q className="c-book-chapter__description mt-2">{item.description}</q>
      </div>

      <section className="mt-3 text-xs font-gothamMedium">
        <div className="flex gap-3 items-center author-icon">
          <AuthorIcon />

          <span>{item.authors}</span>
        </div>

        <div className="mt-3 flex gap-3 items-center location-icon">
          <LocationIcon />

          <span>{item.location}</span>
        </div>
      </section>

      <div className="flex justify-end mt-4">
        <Link
          className="c-page-book-chapter__link  flex justify-between items-center gap-4"
          href={item?.link ?? "https://google.com"}
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
