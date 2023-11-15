"use client";
import { useEffect, useState } from "react";
import LogoAnimatedIcon from "../animated-icons/LogoAnimatedIcon";

export function PageTransitionSection() {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2000);
  });

  return (
    <section
      className={`page-transition z-[120] bg-red-500 fixed w-screen h-screen inset-0 flex flex-col justify-center items-center ${
        showTransition ? "" : "is--hidden"
      }`}
    >
      <div className="page-transition-layers">
        <div className="container">
          <div className="right-layer"></div>
          <div className="right-layer right-layer--2"></div>
          <div className="right-layer right-layer--3"></div>
        </div>
      </div>

      <LogoAnimatedIcon />

      <div className="shapes">
        <svg
          width="390"
          height="117"
          viewBox="0 0 390 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shapes-top"
        >
          <circle cx="165" cy="-108" r="224.5" stroke="#BC9665" />
          <circle cx="-60" cy="-39" r="224.5" stroke="#FFFAEE" />
        </svg>

        <svg
          width="113"
          height="343"
          viewBox="0 0 113 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shapes-bottom"
        >
          <circle cx="-60" cy="-39" r="224.5" stroke="#FFFAEE" />
          <circle cx="165" cy="-108" r="224.5" stroke="#BC9665" />
        </svg>
      </div>
    </section>
  );
}
