import ReportCard from "@/components/global/ReportCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { policyPapers } from "@/utils/fk-data";

export default function PolicyPapers() {
  return (
    <div className="bg-white">
      <div className="container">
        <Breadcrumb
          links={[{ title: "Policy Papers", href: "/policy-papers" }]}
          title="Policy Papers"
          description="Informed Solutions for Yemen's Future. Explore well-researched insights to drive progress."
        />

        <section className="mt-8 md:mt-16 grid grid-cols-6 gap-x-4 gap-y-6">
          {policyPapers.map((policyPaper) => (
            <div key={policyPaper.id} className="col-span-6 lg:col-span-3">
              <ReportCard report={policyPaper} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
