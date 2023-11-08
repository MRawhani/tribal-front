import Image from "next/image";
import Link from "next/link";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";

export default function ReportCard({ item, className = "" }) {
  return (
    <div className={"c-unpublished-research shadow-sm " + className}>
      <div className="py-4 c-unpublished-research__content">
        {/* recourse */}
        <div className="c-unpublished-research__recource mb-5 flex items-center">
          <div className="c-unpublished-research__recource-icon">
            <Image
              src={`/assets/${item.recource_icon}.svg`}
              alt={`report`}
              fill
            />
          </div>

          <h6 className="c-unpublished-research__recource-name mt-3 line-clamp-1">
            {item.recource_name}
          </h6>
        </div>

        <p className="c-unpublished-research__date">{item.date}</p>

        <h2 className="c-unpublished-research__title line-clamp-2">
          {item.title}
        </h2>
      </div>

      <div className="flex justify-end">
        <Link
          className="c-unpublished-research__link flex justify-between items-center gap-4"
          href={`/reports/${item.id}`}
        >
          <span>Read More</span>

          <ArrowLinkIcon width="12" height="12" className="arrow-icon" color="#BC9665" />
        </Link>
      </div>
    </div>
  );
}
