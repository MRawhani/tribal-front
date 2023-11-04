import AuthorIcon from "../icons/AuthorIcon";
import LocationIcon from "../icons/LocationIcon";

export default function BookChapterCard({ item }) {
  return (
    <div className="c-book-chapter">
      <section className="main-container justify-center md:flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="col-span-3  image-wrapper">
          <div className="image-container">
            <img
              loading="lazy"
              srcSet={item.image}
              alt="Description of the image"
              className="image"
            />
          </div>
        </div>

        {/* content */}
        <div className="py-4 c-book-chapter__content">
          <div className="content-wrapper w-full">
            {/* book info */}
            <div className="flex gap-2 font-gothamMedium">
              <div className="text-secondary_secondary  flex gap-2 text-sm">
                <span>
                  &copy;
                  {item.year}
                </span>

                <span> |</span>

                <span>Pages:</span>
              </div>

              <strong className="text-base">{item.pages}</strong>
            </div>

            <h2 className="c-book-chapter__title line-clamp-2 md:whitespace-nowrap">{item.title}</h2>

            <q className="c-book-chapter__description ">{item.description}</q>

            <section className="mt-3 text-xs font-gothamMedium">
              <div className="flex gap-3 items-center">
                <AuthorIcon />

                <span className="mt-2">{item.authors}</span>
              </div>

              <div className="mt-3 flex gap-3 items-center">
                <LocationIcon />

                <span className="mt-2">{item.location}</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}