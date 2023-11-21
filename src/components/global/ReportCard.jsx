import Image from "next/image";
import Link from "next/link";

export default function ReportCard({ report, className = "" }) {
  return (
    <div className={"c-report-card flex shadow-sm " + className}>
      <div className="w-4/12 c-report-card__img-wrapper">
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

      <div className="w-8/12 px-3 md:w-7/12 py-4 c-report-card__content-wrapper">
        <div className="c-card__content">
          <p className="c-report-card__date">{report.date}</p>

          <Link className="c-report-card__title line-clamp-2" 
          target="_blank"
          href={report?.link ?? "https://google.com"}
          
          >
            {/* href={`/reports/${report.id}`} */}
            {report.title}
          </Link>

          <div className="c-report-card__recource mt-4 md:mt-5 flex items-center">
            <div className="c-report-card__recource-icon">
              <Image
                src={`/assets/${report.recource_icon}.svg`}
                alt={`report`}
                fill
              />
            </div>
            <h6 className="c-report-card__recource-name line-clamp-1">
              {report.recource_name}
            </h6>
          </div>
        </div>
      </div>

      <div className="md:w-1/12 c-report-card__link" href="#">
        <Image
          src="/icons/arrow-primary.svg"
          alt={`link`}
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
