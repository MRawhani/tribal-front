import Image from "next/image";
import Link from "next/link";

export default function ReportCard({ report, className = "" }) {
  return (
    <div
      className={
        "c-report-card grid grid-cols-12 gap-x-3 shadow-sm " + className
      }
    >
      <div className="col-span-4">
        <div className="c-report-card__img">
          <Image
            src={`/assets/${report.img}.png`}
            alt={`report`}
            width={300}
            height={300}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>

      <div className="col-span-8 pe-3 md:pe-0 md:col-span-7 py-4 c-report-card__content">
        <p className="c-report-card__date">{report.date}</p>

        <Link
          className="c-report-card__title line-clamp-2"
          href={`/reports/${report.id}`}
        >
          {report.title}
        </Link>

        <div className="c-report-card__recource flex items-center">
          <div className="c-report-card__recource-icon">
            <Image
              src={`/assets/${report.recource_icon}.svg`}
              alt={`report`}
              fill
            />
          </div>
          <h6 className="c-report-card__recource-name mt-3 line-clamp-1">
            {report.recource_name}
          </h6>
        </div>
      </div>

      <Link
        className="col-span-2 md:col-span-1 c-report-card__link"
        href={`/reports/${report.id}`}
      >
        <Image
          src="/icons/arrow-primary.svg"
          alt={`link`}
          width={16}
          height={16}
        />
      </Link>
    </div>
  );
}
