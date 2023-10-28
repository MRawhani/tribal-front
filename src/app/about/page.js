import React from "react";
import About from "@/components/global/About";
import { Breadcrumb } from "@/components/global/Breadcrumb";

export default function AboutPage() {
  return (
    <div>
      <div className="container pb-8 md:pb-40">
        <Breadcrumb
          links={[{ title: "about us", href: "/about" }]}
          title="about us"
        />
      </div>

      <About />
    </div>
  );
}
