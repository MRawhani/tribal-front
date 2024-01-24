"use client";
import Image from "next/image";
import React from "react";
import Title from "@/components/shared/Heading";
import { homeData } from "@/utils/data";
import LogoAnimatedIcon from "../animated-icons/LogoAnimatedIcon";
import AboutWavesAnimatedIcon from "../animated-icons/AboutWavesAnimatedIcon";
import Link from "next/link";

function ImageBackgroundShape({ className }) {
  return (
    <svg
      className={className}
      width="301"
      height="692"
      viewBox="0 0 301 692"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_806_57223)">
        <mask
          id="path-1-outside-1_806_57223"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="301"
          height="692"
          fill="black"
        >
          <rect fill="white" width="301" height="692" />
          <path d="M0 58.2581C0 26.083 26.083 0 58.2581 0V0C192.321 0 301 108.679 301 242.742V652C301 669.673 286.673 684 269 684H32C14.3269 684 0 669.673 0 652V58.2581Z" />
        </mask>
        <path
          d="M0 58.2581C0 26.083 26.083 0 58.2581 0V0C192.321 0 301 108.679 301 242.742V652C301 669.673 286.673 684 269 684H32C14.3269 684 0 669.673 0 652V58.2581Z"
          fill="url(#paint0_linear_806_57223)"
        />
        <g opacity="0.1">
          <line
            x1="62.0615"
            y1="8.12274e-09"
            x2="62.0615"
            y2="352.46"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="109.146"
            y1="8.12274e-09"
            x2="109.146"
            y2="352.46"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="156.227"
            y1="8.12274e-09"
            x2="156.227"
            y2="352.46"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="203.312"
            y1="8.12274e-09"
            x2="203.312"
            y2="352.46"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="250.396"
            y1="8.12274e-09"
            x2="250.396"
            y2="352.46"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="297.477"
            y1="8.12274e-09"
            x2="297.477"
            y2="352.46"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="35.2297"
            x2="26.8311"
            y2="35.2297"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="82.3132"
            x2="26.8311"
            y2="82.3132"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="129.397"
            x2="26.8311"
            y2="129.397"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="176.481"
            x2="26.8311"
            y2="176.481"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="223.564"
            x2="26.8311"
            y2="223.564"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="270.648"
            x2="26.8311"
            y2="270.648"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
          <line
            x1="426.831"
            y1="317.732"
            x2="26.8311"
            y2="317.732"
            stroke="#FEFAEF"
            strokeWidth="0.5"
          />
        </g>
      </g>
      <path
        d="M0 0H301H0ZM301 652C301 674.091 283.091 692 261 692H40C17.9086 692 0 674.091 0 652C0 665.255 14.3269 676 32 676H269C286.673 676 301 665.255 301 652ZM0 684V0V684ZM301 0V684V0Z"
        fill="url(#paint1_linear_806_57223)"
        mask="url(#path-1-outside-1_806_57223)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_806_57223"
          x1="0"
          y1="341.986"
          x2="301.003"
          y2="341.986"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C29C6C" />
          <stop offset="1" stopColor="#8C7A52" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_806_57223"
          x1="0"
          y1="341.986"
          x2="301.003"
          y2="341.986"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C29C6C" />
          <stop offset="1" stopColor="#8C7A52" />
        </linearGradient>
        <clipPath id="clip0_806_57223">
          <path
            d="M0 58.2581C0 26.083 26.083 0 58.2581 0V0C192.321 0 301 108.679 301 242.742V652C301 669.673 286.673 684 269 684H32C14.3269 684 0 669.673 0 652V58.2581Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function Pattern({ className }) {
  return (
    <svg className={className} width="404" height="314" viewBox="0 0 404 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="364.853" cy="225.717" r="224.5" stroke="#FEFAEF"/>
<circle cx="139.853" cy="294.717" r="224.5" stroke="url(#paint0_linear_277_387890)"/>
<defs>
<linearGradient id="paint0_linear_277_387890" x1="-85.1475" y1="294.708" x2="364.857" y2="294.708" gradientUnits="userSpaceOnUse">
<stop stopColor="#4E4AFF"/>
<stop offset="1" stopColor="#08044A"/>
</linearGradient>
</defs>
</svg>

  );
}
export default function About({page, aboutData = homeData.aboutPage }) {
  return (
    <div className="about pt-20 lg:pt-0">
      <div className="container not-hidden">
        <div className={`${page? 'py-20' : 'about__content'}  flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-between `}>
          <div className="lg:order-2 about__text md:w-full ml-6">
            <AboutWavesAnimatedIcon />

            <div className="mt-3 mb-4 text-sm ">
              <Title title="Who I am?" standard={false} />
            </div>

            <p
              className="about__description"
              dangerouslySetInnerHTML={{ __html: aboutData?.mainDescription }}
            ></p>

            <p
              className="mt-4 about__description"
              dangerouslySetInnerHTML={{ __html: aboutData?.secondDescription }}
            ></p>

            <div className="my-4">
              {/* call to action */}
              <Link href="/contact-me" className="btn btn-primary">
                Contact me
              </Link>
            </div>
          </div>

          <div className="lg:order-1 about__img-wrapper md:max-h-[800px] ">
            <ImageBackgroundShape className="absolute" />
            <Image
              className="about__profile object-cover -translate-x-3"
              src={`/assets/${page?'nadwa.png' : 'nadwa2.png'}`}
              alt="nadwa"
              width={500}
              height={700}
            />
            <Pattern className="about__pattern max-w-full" />
           
            {/* <img
              className="about__pattern "
              src="/assets/pattern_bo.svg"
              alt="nadwa"
            
            /> */}
          </div>
        </div>
      </div>
      <div className="logo-pattern">
        <LogoAnimatedIcon color="#FFFAEE" left={true} />
      </div>
    </div>
  );
}
