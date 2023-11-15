"use client";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import PhotosSection from "@/components/photos/PhotosSection";
import React, { useEffect, useState } from "react";

export default function Photos() {
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    const handleEvent = () => {
      console.log("close", keyCount, new Date().getTime());

      setKeyCount(new Date().getTime());
    };

    window.addEventListener("router-link", handleEvent);
    window.addEventListener("popstate", handleEvent);

    return () => {
      window.removeEventListener("router-link", handleEvent);
      window.removeEventListener("popstate", handleEvent);
    };
  }, [keyCount]);

  return (
    <div className="container page-photos-details">
      <Breadcrumb
        links={[{ title: "photos", href: "/photos" }]}
        title="Photos"
        description="Yemen's Cultural Richness in Photos: Tribes, Customs, Traditions."
      />

      <PhotosSection key={keyCount} />
    </div>
  );
}
