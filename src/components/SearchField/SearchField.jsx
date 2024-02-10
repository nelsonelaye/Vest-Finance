import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { searchStock } from "@/services/api/search";
// import { getStats } from "@/services/api/stock";
// import { useRouter } from "next/router";
import { results } from "@/data/data";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import styles from "./searchField.module.css";

const SearchField = ({ variant, value, className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const symbol = searchParams.get("ticker");
  const [searchQuery, setSearchQuery] = useState(symbol || "");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = useDebouncedCallback((e) => {
    e.preventDefault();
    searchStock(searchQuery).then((res) => {
      setSearchResult(res?.body);
    });
  }, 1000);

  useEffect(() => {
    setSearchQuery(symbol || "");

    setSearchResult([]);
  }, []);

  return (
    <div
      className={`relative w-full   ${
        variant === "small" ? "mx-auto" : "sm:w-[600px]"
      } sm:mx-auto ${className}`}
    >
      <input
        type="text"
        name="ticker"
        className={`${
          variant === "small"
            ? "py-2 px-4 rounded-md"
            : variant === "primary"
            ? "py-2 px-4 rounded-lg"
            : "pt-6 pb-7 px-6 rounded-[50px]"
        } my-0 border-[2px] border-gray-300 w-full   outline-none  sm:mx-auto`}
        placeholder="E.g. AAPL"
        autoComplete="off"
        onKeyUp={handleSearch}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e);
        }}
        defaultValue={searchQuery || value}
      />

      {searchQuery.length > 1 && searchResult?.length > 0 ? (
        <div
          className={`${styles.search_result} absolute bg-white w-full flex flex-col h-auto max-h-[500px] overflow-y-auto  px-4 z-50 rounded-[15px] shadow-md`}
        >
          {searchResult?.map((r) => (
            <Link key={r.symbol} href={`/search/${r.symbol}`}>
              <div
                key={r.symbol}
                className="  w-full px-6 py-4 border-b border-neutral-20 font-medium cursor-pointer"
              >
                <p className="text-sm mb-1">{r.name}</p>
                <p className="text-[12px] text-black-50 font-medium ">
                  {r.symbol}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : searchQuery.length > 1 && searchResult?.length === 0 ? (
        <div className="absolute  bg-white shadow-md w-full rounded-[15px] min-h-20 flex items-center px-6 text-sm text-gray-600 font-medium ">
          No result
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchField;
