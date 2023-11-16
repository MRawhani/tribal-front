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
        <div className="py-4 c-book-chapter__content w-full">
          <div className="content-wrapper-border">
            <div className="content-wrapper w-full">
              <div className="content">
                {/* book info */}
                <div className="flex gap-2 font-gothamMedium">
                  <div className="text-secondary_secondary  flex items-center gap-2 text-sm">
                    <span>
                      &copy;
                      {item.year}
                    </span>

                    <span> |</span>

                    <span>Pages:</span>
                  </div>

                  <span className="text-base">{item.pages}</span>
                </div>

                <h2 className="c-book-chapter__title line-clamp-2 md:whitespace-nowrap">
                  {item.title}
                </h2>

                <q className="c-book-chapter__description ">
                  {item.description}
                </q>

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
