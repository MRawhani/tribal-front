"use client";

import { usePagination } from "ahooks";
import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BookChapterCard from "../global/BookChapterCard";

export default function PaginationContainer({ items = [] }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const loadData = (params) => {
    return new Promise((resolve) => {
      const urlSearchParams = new URLSearchParams(searchParams);
      if (params.current) urlSearchParams.set("page", params.current);
      replace(`${pathname}?${urlSearchParams.toString()}`);

      const fromItemIndex =
        params.current === 1 ? 0 : (params.current - 1) * params.pageSize;
      const toItemIndex = params.current * params.pageSize;

      console.log(params, { fromItemIndex, toItemIndex });

      resolve({
        total: items.length,
        list: items.slice(fromItemIndex, toItemIndex),
      });
    });
  };

  const { data, loading, pagination } = usePagination(loadData, {
    defaultCurrent: searchParams.get("page") ?? 1,
  });

  if (loading) return <div>Loading.....</div>;

  if (data)
    return (
      <div>
        {/* ============= item  =============*/}
        <section className="mt-8 md:mt-16 grid grid-cols-12 gap-4">
          {data.list.map((bookItem) => (
            <div
              key={bookItem._id}
              className="col-span-12 sm:col-span-6 xl:col-span-4"
            >
              <BookChapterCard item={bookItem} />
            </div>
          ))}
        </section>
        {/* ============= item ============= */}

        <div className="flex justify-center mt-8">
          <Pagination
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={data?.total}
            onChange={pagination.onChange}
            style={{ marginTop: 16, textAlign: "right" }}
          />
        </div>
      </div>
    );
}
