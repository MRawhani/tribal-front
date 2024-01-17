"use client";
import Hero from "@/components/home/Hero";
import About from "@/components/global/About";
import QuickLinks from "@/components/home/QuickLinks";
import Articles from "@/components/home/Articles";
import Reports from "@/components/home/Reports";
import Photos from "@/components/home/Photos";
import BookChapters from "@/components/home/BookChapters";
import UnpublishedResearch from "@/components/home/UnpublishedResearch";
import PolicyPapers from "@/components/home/PolicyPapers";
import Interviews from "@/components/home/Interviews";
import Stories from "@/components/home/Stories";
import { useEffect, useState } from "react";
import { homeData } from "@/utils/data";

export default function Home() {
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    const handleEvent = () => {
      console.log("close", keyCount);

      setKeyCount(keyCount + 1);
    };

    window.addEventListener("router-link", handleEvent);
    window.addEventListener("popstate", handleEvent);

    return () => {
      window.removeEventListener("router-link", handleEvent);
      window.removeEventListener("popstate", handleEvent);
    };
  }, [keyCount]);

  return (
    <main className="-mb-8  md:-mb-16">
      {/* <Hero /> */}
      <About aboutData={homeData.aboutHomePage}/>
      <QuickLinks />
      <Articles />
      <Reports />
      <Interviews />
      <Stories />
    </main>
  );
}
