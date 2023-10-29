import Image from "next/image";
import Link from "next/link";

export default function BookChapterCard({ item, className = "" }) {
  return (
    <div
      className={
        "c-book-chapter grid grid-cols-12 gap-x-3 shadow-sm " + className
      }
    >
      {/* cover image */}
      <div className="col-span-4">
        <div className="c-book-chapter__img">
          <Image
            src={item.image}
            alt={`report`}
            width={300}
            height={300}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>

      {/* content */}
      <div className="col-span-8 py-4 c-book-chapter__content">
        <div>
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

          <h2 className="c-book-chapter__title line-clamp-2">{item.title}</h2>

          <q className="c-book-chapter__description ">
            {item.description}
          </q>

          <section className="mt-3 text-xs font-gothamMedium">
            <div className="flex gap-3 items-center">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="5.625"
                  cy="4.48535"
                  r="2.5"
                  stroke="#BC9665"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.875 13.2354V11.9854C1.875 10.6046 2.99429 9.48535 4.375 9.48535H6.875C8.25571 9.48535 9.375 10.6046 9.375 11.9854V13.2354"
                  stroke="#BC9665"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 2.06641C11.1062 2.34964 11.8799 3.3464 11.8799 4.48828C11.8799 5.63016 11.1062 6.62692 10 6.91016"
                  stroke="#BC9665"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.125 13.2354V11.9854C13.1185 10.8507 12.3486 9.86275 11.25 9.5791"
                  stroke="#BC9665"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {item.authors}
            </div>

            <div className="mt-3 flex gap-3 items-center">
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 0.110352C4.9087 0.110352 3.38258 0.742493 2.25736 1.86771C1.13214 2.99293 0.5 4.51905 0.5 6.11035C0.5 10.1604 5.7875 14.7354 6.0125 14.9304C6.14835 15.0465 6.32124 15.1104 6.5 15.1104C6.67876 15.1104 6.85165 15.0465 6.9875 14.9304C7.25 14.7354 12.5 10.1604 12.5 6.11035C12.5 4.51905 11.8679 2.99293 10.7426 1.86771C9.61742 0.742493 8.0913 0.110352 6.5 0.110352ZM6.5 13.3479C4.9025 11.8479 2 8.61535 2 6.11035C2 4.91688 2.47411 3.77228 3.31802 2.92837C4.16193 2.08446 5.30653 1.61035 6.5 1.61035C7.69347 1.61035 8.83807 2.08446 9.68198 2.92837C10.5259 3.77228 11 4.91688 11 6.11035C11 8.61535 8.0975 11.8554 6.5 13.3479ZM6.5 3.11035C5.90666 3.11035 5.32664 3.2863 4.83329 3.61594C4.33994 3.94559 3.95542 4.41412 3.72836 4.9623C3.5013 5.51048 3.44189 6.11368 3.55764 6.69562C3.6734 7.27757 3.95912 7.81211 4.37868 8.23167C4.79824 8.65123 5.33279 8.93695 5.91473 9.05271C6.49667 9.16846 7.09987 9.10905 7.64805 8.88199C8.19623 8.65493 8.66476 8.27041 8.99441 7.77706C9.32405 7.28371 9.5 6.7037 9.5 6.11035C9.5 5.3147 9.18393 4.55164 8.62132 3.98903C8.05871 3.42642 7.29565 3.11035 6.5 3.11035ZM6.5 7.61035C6.20333 7.61035 5.91332 7.52238 5.66665 7.35756C5.41997 7.19273 5.22771 6.95847 5.11418 6.68438C5.00065 6.41029 4.97094 6.10869 5.02882 5.81772C5.0867 5.52674 5.22956 5.25947 5.43934 5.04969C5.64912 4.83991 5.91639 4.69705 6.20736 4.63917C6.49834 4.5813 6.79994 4.611 7.07403 4.72453C7.34811 4.83806 7.58238 5.03032 7.7472 5.277C7.91203 5.52367 8 5.81368 8 6.11035C8 6.50818 7.84196 6.88971 7.56066 7.17101C7.27936 7.45232 6.89782 7.61035 6.5 7.61035Z"
                  fill="#BC9665"
                />
              </svg>

              {item.location}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
