import { homeData } from "@/utils/data";
import React from "react";

export default function Hero() {
  return (
    <div className="hero ">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{homeData.heroSection.title}</h1>

          <p className="hero__description">
            {homeData.heroSection.description}
          </p>
        </div>
      </div>
      <div className="hero__arrow"></div>
    </div>
  );
}
