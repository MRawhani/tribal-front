import ReportCard from "@/components/global/ReportCard";
import SearchIcon from "@/components/icons/SearchIcon";
import { reports } from "@/utils/fk-data";
import Image from "next/image";
import React from "react";

const SearchForm = () => {
  return (
    <form className=" rounded-full bg-neutral-50 shadow flex justify-between gap-3 ">
      <input
        type="search"
        className="rounded-s-full py-4 px-6 flex-1 bg-inherit focus:outline-none focus:bg-neutral-100"
      />
      <button className="text-neutral-300 pe-6">
        <SearchIcon />
      </button>
    </form>
  );
};

export default function Search() {
  return (
    <section className="page-search font-gothamLight text-base">
      <div className="container pb-2 pt-8 md:pt-16">
        <SearchForm />

        <div className="mt-4">
          <p className="text-xs px-3">
            Search Results for:{" "}
            <span className="text-secondary_secondary">(0 results)</span>
          </p>
        </div>

        <div className="mt-4 space-y-4">
          {reports.map((report) => {
            return <ReportCard key={report.id} report={report} />;
          })}
        </div>
      </div>
    </section>
  );
}
