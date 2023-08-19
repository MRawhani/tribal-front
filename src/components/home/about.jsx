import Image from "next/image";
import React from "react";
import Title from "@/components/shared/Title";

export default function About() {
  return (
    <div className="about">
      <div className="container  not-hidden">
        <div className="about__content flex items-center justify-between  ">
          <div className="about__img-wrapper">
            <Image
              className="about__profile "
              src="/assets/nadwa.png"
              alt="nadwa"
              width="0"
              height="0"
              sizes="100vw"
              //style={{ width: "100%", height: "auto" }}
            />
            <Image
              className="about__pattern "
              src="/assets/pattern_bo.svg"
              alt="nadwa"
              width="0"
              height="0"
              sizes="100vw"
              //style={{ width: "100%", height: "auto" }}
            />
          </div>

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
            <div className="mt-16 mb-20">
              <Title title="Who we are" standard={true} />
            </div>
            <Image
              src="/assets/arabic-title-white.svg"
              alt="yemen tribal title"
              width="0"
              height="0"
              className="w-auto h-10 2xl:h-14 3xl:h-16"
            />
            <h1 className="about__heading color-gradient">
              About Yemen Tribal Voices
            </h1>
            <p className="about__description">
              Writing about Yemen usually focuses on political parties, but
              Nadwa's writing covers local affairs and perspectives from locals
              like youth, women, tribes, and local security. This viewpoint can
              often be overlooked by readers with specific interests.
              <br />
              <br />
              The Yemen Travel Voices project aims to document these
              perspectives and create an archive, with the potential for
              establishing an institution in the future.
            </p>
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
