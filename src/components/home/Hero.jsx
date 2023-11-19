"use client";
import { homeData } from "@/utils/data";
import React, { useEffect } from "react";
import LogoAnimatedIcon from "../animated-icons/LogoAnimatedIcon";

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const heroElement = document.querySelector("#hero");
    observer.observe(heroElement);
  });
  return (
    <div className="hero " id="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{homeData.heroSection.title}</h1>

          <p className="hero__description">
            {homeData.heroSection.description}
          </p>
        </div>
      </div>
      <div className="hero__arrow"></div>

      <div className="logo-pattern">
        <LogoAnimatedIcon left={true} />
      </div>
    </div>
  );
}
