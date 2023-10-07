import Image from "next/image";
import React from "react";
import Title from "@/components/shared/Heading";
import { homeData } from "@/utils/data";

export default function About() {
  return (
    <div className="about pt-20">
      <div className="container not-hidden">
        <div className="about__content lg:flex items-center justify-between  ">
          <div className="about__text flex-1">
            <Image
              className=" "
              src="/assets/waves.svg"
              alt="nadwa"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "15.6rem", height: "auto" }}
            />
            <div className="mt-3 mb-4 text-sm ">
              <Title title="Who we are" standard={false} />
            </div>

            <h2 className="about__heading color-gradient">
              {homeData.about.title}
            </h2>

            <p className="about__description">
              {homeData.about.mainDescription}
            </p>

            <p className="mt-4 about__description">
              {homeData.about.secondDescription}
            </p>
          </div>

          <div className="about__img-wrapper">
            <Image
              className="about__profile "
              src="/assets/nadwa.png"
              alt="nadwa"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className="about__pattern "
              src="/assets/pattern_bo.svg"
              alt="nadwa"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="about__logo-pattern">
        <Image
          className=" "
          src="/assets/logo-pattern-right.png"
          alt="YTV"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}
