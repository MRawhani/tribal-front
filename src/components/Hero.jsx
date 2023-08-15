import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="container">

    <div className="hero flex flex-col items-center justify-center">
      <div className="hero__content flex flex-col items-center justify-center">
        <div className="hero__text flex flex-col items-center justify-center">
          <span>Greeting, Guests</span>
          <h1>Yemen Tribal Voices</h1>
          {/* <h2>Hoope of Yemenies</h2> */}
          <div className="relative ">
          <Image
            src="/icons/arabic-title.svg" 
            alt="mouse-arrow"
            width="0"
            height="0"
            className="w-auto h-10 2xl:h-16"
          />
          </div>
          <p>
            Discover the resounding echoes of
            <br />
             <strong>Yemeni tribes</strong> at their finest on
            our platform.
          </p>
        </div>
        <div className="hero__arrow flex  items-center justify-center">
          <div className="relative ">
          <Image
            src="/icons/mouse-arrow.svg" 
            alt="mouse-arrow"
            width="0"
            height="0"
            className="w-auto h-14 2xl:h-20"
          />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
