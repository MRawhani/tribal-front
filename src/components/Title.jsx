import React from "react";

export default function Title({ title, standard }) {
  return (
    <div className="title flex items-center ">
      {standard ? (
        <>
          <div className="title__line"></div>
          <h1 className="title__text">{title}</h1>
        </>
      ) : (
        <>
          <h1 className="title__text">{title}</h1>
          <div className="title__line"></div>
        </>
      )}
    </div>
  );
}
