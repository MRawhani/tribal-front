import Image from "next/image";
import React from "react";
import Title from "@/components/shared/Heading";
import { homeData } from "@/utils/data";
import LogoAnimatedIcon from "../animated-icons/LogoAnimatedIcon";
import AboutWavesAnimatedIcon from "../animated-icons/AboutWavesAnimatedIcon";

export default function About() {
  return (
    <div className="about pt-20 lg:pt-0">
      <div className="container not-hidden">
        <div className="about__content flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-between  ">
          <div className="lg:order-2 about__text md:w-full">
            <AboutWavesAnimatedIcon />

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

          <div className="lg:order-1 about__img-wrapper md:max-h-[800px]">
            <Image
              className="about__profile "
              src="/assets/nadwa.png"
              alt="nadwa"
              width={500}
              height={700}
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
      <div className="logo-pattern">
        <LogoAnimatedIcon color="#FFFAEE" left={true} />
      </div>
    </div>
  );
}
