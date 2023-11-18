import React from "react";
import Heading from "../shared/Heading";
import { articles as reports_list } from "@/utils/fk-data";
import Image from "next/image";
import ShowMoreLink from "../shared/ShowMoreLink";

const ReportLists = () => {
  return reports_list.slice(0, 4).map((report) => (
    <div key={report.id} className="report-card">
      <section className="flex gap-4 items-center justify-between">
        <div>
          <div className="report-card__date">{report.date}</div>

          <h2 className="report-card__title">{report.title}</h2>

          <div className="report-card__image">
            <Image
              src={`/assets/${report.img}.png`}
              alt={`report`}
              width={254}
              height={168}
            />
          </div>

          <div className="report-card__recource flex items-center">
            <div className="report-card__recource-icon">
              <Image
                src={`/assets/${report.recource_icon}.svg`}
                alt={`report`}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <h6 className="report-card__recource-name">
              {report.recource_name}
            </h6>
          </div>
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
    </div>
  ));
};

export default function Reports() {
  return (
    <div className="reports reports__section">
      <div className="container">
        <Heading title="Reports" className="mb-2" />
        <h2 className="reports__section-title uppercase md:capitalize">
          Uncover Yemen&apos;s Untold Realities. Explore in-depth <br /> analysis and
          first-hand accounts from local communities.
        </h2>

        <div className="reports__content mt-8 md:mt-12">
          <div className="m-0">
            <div className="lg:ms-20 2xl:ms-28">
              <hr />
              <ReportLists />
              <hr />
            </div>
          </div>
        </div>
        <div className="mt-8  w-full flex justify-center md:justify-end">
          <ShowMoreLink link="/reports" text="Show All Reports" />
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
