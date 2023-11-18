import UnpublishedResearchCard from "@/components/global/UnpublishedResearchCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { policyPapers } from "@/utils/fk-data";

export default function PolicyPapers() {
  return (
    <div className="bg-white">
      <div className="container pb-8">
        <Breadcrumb
          links={[{ title: "unpublished research", href: "/unpublished-research" }]}
          title="Unpublished Research"
          description="Unearthing Yemen's Hidden Knowledge. Discover cutting-edge insights."
        />

        <section className="mt-8 md:mt-16 grid grid-cols-12 gap-4">
          {policyPapers.map((policyPaper) => (
            <div key={policyPaper.id} className="col-span-12 sm:col-span-6 xl:col-span-4">
              <UnpublishedResearchCard item={policyPaper} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
