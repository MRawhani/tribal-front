/* eslint-disable @next/next/no-img-element */
"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchSearchData, getImageLink } from "@/utils/globalStore";
import ArrowLinkIcon from "@/components/icons/ArrowLinkIcon";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);

    if (term) params.set("query", term);
    else params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" rounded-full bg-neutral-50 shadow flex justify-between gap-3 "
    >
      <input
        type="search"
        className="rounded-s-full py-4 px-6 flex-1 bg-inherit focus:outline-none focus:bg-neutral-100"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button className="text-neutral-300 pe-6">
        <SearchIcon />
      </button>
    </form>
  );
};

export default function Search({ searchParams }) {
  const query = searchParams?.query || "";
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({
    total: 0,
    loading: false,
  });

  useEffect(() => {
    console.log("updated");

    setMeta((state) => ({ ...state, loading: true }));

    fetchSearchData(query).then((data) => {
      const {
        books = [],
        interviews = [],
        reports = [],
        stories = [],
      } = data.portfolioData;
      const dataItems = [];

      books?.map((item) =>
        dataItems.push({
          id: item._id,
          title: item.title,
          link: item.external_link,
          photo: item.photos[0] ?? "",
          item_type: "book",
        })
      );

      interviews?.map((item) =>
        dataItems.push({
          id: item._id,
          title: item.title,
          link: item.external_link,
          photo: item.photos[0] ?? "",
          item_type: "interview",
        })
      );

      reports?.map((item) =>
        dataItems.push({
          id: item._id,
          title: item.title,
          link: item.external_link,
          photo: item.photos[0] ?? "",
          item_type: "report",
        })
      );

      stories?.map((item) =>
        dataItems.push({
          id: item._id,
          title: item.title,
          link: `/stories/${item.slug}`,
          photo: item.main_image[0] ?? "",
          item_type: "story",
        })
      );

      setItems(() => dataItems);

      setMeta((state) => ({
        ...state,
        loading: false,
        total: data.portfolioData.total,
      }));

    });
  }, [query]);

  return (
    <section className="page-search font-gothamLight text-base">
      <div className="container pb-2 pt-8 md:pt-16">
        <SearchForm />

        <div className="mt-4">
          <p className="text-xs px-3">
            Search Results count:
            <span className="text-secondary_secondary px-1">{meta.total}</span>
          </p>
        </div>

        {meta.loading && (
          <div>
            <Skeleton count={4} height={175} />
          </div>
        )}

        <div className="mt-4 gap-4 grid grid-cols-6 pb-8">
          {items.map((item) => {
            return (
              <SearchItem
                className="col-span-6 md:col-span-3 lg:col-span-2"
                key={item.id}
                item={item}
              />
            );
          })}
        </div>
        {!items.length && (
          <div>
            <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
              <div className="p-3 mx-auto text-secondary_secondary bg-seconday_50 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </div>
              <div className=" text-center">
                <h1 className="mt-2 text-lg text-gray-800 dark:text-white">
                  No vendors found
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Your search `{query}` did not match our records. Please try
                  again.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SearchItem({ item, className = "" }) {
  if (!item) return;

  return (
    <div
      className={
        "rounded-md overflow-hidden h-full border border-gray-100 flex flex-col " + className
      }
    >
      <div className="h-[300px] mb-4">
        <img
          src={getImageLink(item?.photo)}
          alt={`search item`}
          style={{ height: "100%", width: "100%" }}
          crossOrigin="anonymous"
          className="object-cover"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="">
          <h2 className="c-unpublished-research__title  line-clamp-2">
            {item?.title}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <span className="inline-block text-xs bg-seconday_50 text-secondary_secondary capitalize px-4 py-px rounded-full">
            {item?.item_type}
          </span>

          <a
            className="c-unpublished-research__link flex justify-between items-center gap-4"
            href={item?.link}
            target="_blank"
          >
            <span>Read More</span>

            <ArrowLinkIcon
              width="12"
              height="12"
              className="arrow-icon"
              color="#BC9665"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
