import React from "react";
import About from "@/components/global/About";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { fetchClientData } from "@/utils/globalStore";

export default async function AboutPage() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  return (
    <div className="page-about pb-48 md:pb-40 lg:pb-8">
      <div className="container pb-8 ">
        <Breadcrumb
          links={[{ title: "about me", href: "/about" }]}
          title="about me"
        />
      </div>

      <About portfolioData={portfolioData} page={true}/>
    </div>
  );
}
