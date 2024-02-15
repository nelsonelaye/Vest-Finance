import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchStock } from "@/services/api/search";
// import { getStats } from "@/services/api/stock";
// import { useRouter } from "next/router";
// import { results } from "@/data/data";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import styles from "./searchField.module.css";
import { Loader } from "@mantine/core";
import "animate.css";

const SearchField = ({
  variant,
  value,
  className,
  handleSelect,
  page,
  closeSidebar,
}) => {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("ticker");
  const [searchQuery, setSearchQuery] = useState(symbol || value || "");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useDebouncedCallback((e) => {
    e.preventDefault();
    searchStock(searchQuery).then((res) => {
      setSearchResult(res?.body);
      setIsSearching(false);
    });
  }, 1000);

  useEffect(() => {
    setSearchQuery(symbol || "");

    setSearchResult([]);
  }, []);

  return (
    <div
      className={` relative w-full   ${
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
          setIsSearching(true);
          setSearchQuery(e.target.value);
          handleSearch(e);
        }}
        value={searchQuery}
      />

      {isSearching ? (
        <div
          className={`${styles.search_result} absolute bg-white w-full flex flex-col justify-center h-auto  py-2 px-4 z-50 min-h-14 rounded-[15px] shadow-md mt-4`}
        >
          <Loader color="#000" />
        </div>
      ) : searchQuery.length > 1 && searchResult?.length > 0 ? (
        <div
          className={`${styles.search_result} absolute bg-white w-full flex flex-col h-auto max-h-[500px] overflow-y-auto  px-4 z-50 min-h-14 rounded-[15px] shadow-md`}
        >
          {searchResult?.map((r) =>
            page == "compare" ? (
              <div
                key={r.symbol}
                className="  w-full px-6 py-4 border-b bg-white z-50 border-neutral-20 font-medium cursor-pointer"
                onClick={() => {
                  setSearchQuery(r.symbol);
                  handleSelect(r.symbol);
                  setSearchResult([]);
                  closeSidebar();
                }}
              >
                <p className="text-sm mb-1">{r.name}</p>
                <p className="text-[12px] text-black-50 font-medium ">
                  {r.symbol}
                </p>
              </div>
            ) : (
              <Link key={r.symbol} href={`/search/${r.symbol}`}>
                <div
                  key={r.symbol}
                  className="  w-full px-6 py-4 border-b border-neutral-20 font-medium cursor-pointer"
                  onClick={() => {
                    setSearchResult([]);
                    closeSidebar();
                  }}
                >
                  <p className="text-sm mb-1">{r.name}</p>
                  <p className="text-[12px] text-black-50 font-medium ">
                    {r.symbol}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      ) : searchQuery.length > 1 && searchResult == undefined ? (
        <div
          className={`${styles.search_result} absolute bg-white w-full flex flex-col justify-center  h-auto   px-4  py-2 z-50 min-h-14 rounded-[15px] shadow-md`}
        >
          Try a different value
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchField;
