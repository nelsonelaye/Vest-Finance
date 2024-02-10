import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { searchStock } from "@/services/api/search";
// import { getStats } from "@/services/api/stock";
// import { useRouter } from "next/router";
import { results } from "@/data/data";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

const SearchField = ({ variant, value }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("ticker") || ""
  );
  const [searchResult, setSearchResult] = useState(results);

  const handleSearch = useDebouncedCallback((e) => {
    e.preventDefault();
    if (e.code === "Enter") {
      // searchStock(searchQuery).then((res) => {
      //   console.log(res);
      // });
      // router.push({
      //   pathname: "/search",
      //   query: { symbol: searchQuery },
      // });
      // getStats(e.target?.value);
    }
  }, 3000);

  return (
    <div
      className={`relative w-full   ${
        variant === "small" ? "mx-auto" : "sm:w-[600px]"
      } sm:mx-auto`}
    >
      <input
        type="search"
        name="ticker"
        className={`${
          variant === "small"
            ? "py-2 px-4 rounded-md"
            : variant === "primary"
            ? "py-2 px-4 rounded-lg"
            : "pt-6 pb-7 px-6 rounded-[50px]"
        } border-[2px] border-gray-300 w-full   my-5 outline-none  sm:mx-auto`}
        placeholder="E.g. AAPL"
        autoComplete="off"
        autoFocus
        onKeyUp={handleSearch}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={value || searchQuery}
      />

      {/* {searchQuery.length > 1 && (
        <div className="absolute  bg-white shadow-md w-full rounded-[15px] min-h-20 flex items-center px-6 text-sm text-gray-600 font-medium ">
          No result
        </div>
      )} */}

      {searchQuery.length > 1 ? (
        <div className="absolute bg-white w-full flex flex-col h-auto max-h-[500px] overflow-y-auto  px-4 z-50 rounded-[15px] shadow-md">
          {results?.map((r) => (
            <Link key={r.symbol} href={`/search/${r.symbol}`}>
              <div
                key={r.symbol}
                className="  w-full px-6 py-4 border-b border-neutral-20 font-medium cursor-pointer"
              >
                <p className="text-sm mb-1">{r.name}</p>
                <p className="text-[12px] text-gray-600 ">{r.symbol}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="absolute hidden bg-white shadow-md w-full rounded-[15px] min-h-20 flex items-center px-6 text-sm text-gray-600 font-medium ">
          No result
        </div>
      )}
    </div>
  );
};

export default SearchField;
