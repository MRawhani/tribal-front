import React from "react";

export default function Heading({ title,className, standard=true }) {
  return (
    <div className={`heading flex items-center ${className}`}>
      {!standard ? (
        <>
          <div className="heading__line heading__line--white "></div>
          <h2 className="heading__text heading__text--white">{title}</h2>
        </>
      ) : (
        <>
          <h2 className="heading__text">{title}</h2>
          <div className="heading__line"></div>
        </>
      )}
    </div>
  );
}
