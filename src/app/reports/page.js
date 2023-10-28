import ReportCard from "@/components/global/ReportCard";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import React from "react";
import { reports } from "@/utils/fk-data";

export default function Reports() {
  return (
    <div className="bg-white">
      <div className="container">
        <Breadcrumb
          links={[{ title: "reports", href: "/reports" }]}
          title="reports"
          description="Uncover Yemen's Untold Realities. Explore in-depth analysis and first-hand accounts from local communities."
        />

        <section className="mt-8 md:mt-16 grid grid-cols-6 gap-x-4 gap-y-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="col-span-6 lg:col-span-3"
            >
              <ReportCard report={report} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
