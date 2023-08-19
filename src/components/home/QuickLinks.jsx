import React from "react";
import { short_links } from "@/utils/nav-links";
import Image from "next/image";
export default function QuickLinks() {
  return (
    <div className="Shortcuts pt-80 pb-48">
      <div className="container">
        <h1 className="Shortcuts__heading">
          Our writings cover local affairs and perspectives
          <br />
          from youth, women, tribes, and local security.
        </h1>
        <div className=" row flex-wrap 3xl:gutter-big  items-stretch">
          {short_links.map((link) =>
            link.blank ? (
              <div key={link.id} className={`col  col-4 col-3-xl mb-10`}>
                <div
                  className={`Shortcuts__card  Shortcuts__card--blank
                  `}
                ></div>
              </div>
            ) : (
              <div key={link.id} className={`col col-4 col-3-xl mb-10`}>
                <div className={`Shortcuts__card `}>
                  <div className="flex items-center justify-between mb-24">
                    <div></div>
                    <div className="Shortcuts__icon">
                      <Image
                        src={`/icons/${link.icon}.svg`}
                        alt={`${link.name}`}
                        width="20"
                        height="18"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="Shortcuts__title">{link.name}</h5>

                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="#383546"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9199 0.62C12.8185 0.375651 12.6243 0.181475 12.3799 0.0799999C12.2597 0.028759 12.1306 0.00157999 11.9999 0H1.99994C1.73472 0 1.48037 0.105357 1.29283 0.292893C1.1053 0.48043 0.999939 0.734784 0.999939 1C0.999939 1.26522 1.1053 1.51957 1.29283 1.70711C1.48037 1.89464 1.73472 2 1.99994 2H9.58994L1.28994 10.29C1.19621 10.383 1.12182 10.4936 1.07105 10.6154C1.02028 10.7373 0.994141 10.868 0.994141 11C0.994141 11.132 1.02028 11.2627 1.07105 11.3846C1.12182 11.5064 1.19621 11.617 1.28994 11.71C1.3829 11.8037 1.4935 11.8781 1.61536 11.9289C1.73722 11.9797 1.86793 12.0058 1.99994 12.0058C2.13195 12.0058 2.26266 11.9797 2.38452 11.9289C2.50638 11.8781 2.61698 11.8037 2.70994 11.71L10.9999 3.41V11C10.9999 11.2652 11.1053 11.5196 11.2928 11.7071C11.4804 11.8946 11.7347 12 11.9999 12C12.2652 12 12.5195 11.8946 12.707 11.7071C12.8946 11.5196 12.9999 11.2652 12.9999 11V1C12.9984 0.869323 12.9712 0.740222 12.9199 0.62Z"
                        fill="current"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h6 className="Shortcuts__count">
                      {link.count} {link.name}
                    </h6>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
