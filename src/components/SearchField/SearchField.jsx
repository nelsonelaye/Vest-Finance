import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { searchStock } from "@/services/api/search";
// import { getStats } from "@/services/api/stock";
// import { useRouter } from "next/router";
// import { results } from "@/data/data";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import styles from "./searchField.module.css";
import { Loader } from "@mantine/core";

const SearchField = ({ variant, value, className, handleSelect }) => {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("ticker");
  const pathname = usePathname();
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
          setIsSearching(true);
          setSearchQuery(e.target.value);
          handleSearch(e);
        }}
        value={searchQuery}
      />

      {searchQuery.length > 1 && searchResult?.length > 0 ? (
        <div
          className={`${styles.search_result} absolute bg-white w-full flex flex-col h-auto max-h-[500px] overflow-y-auto  px-4 z-50 rounded-[15px] shadow-md`}
        >
          {searchResult?.map((r) =>
            pathname == "/compare" ? (
              <div
                key={r.symbol}
                className="  w-full px-6 py-4 border-b border-neutral-20 font-medium cursor-pointer"
                onClick={() => {
                  setSearchQuery(r.symbol);
                  handleSelect(r.symbol);
                  setSearchResult([]);
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
      ) : searchQuery.length > 1 && searchResult?.length === 0 ? (
        <div className="absolute  bg-white shadow-md w-full rounded-[15px] min-h-20 flex items-center px-6 text-sm text-gray-600 font-medium ">
          {isSearching ? <Loader fontSize={10} color="#000000" /> : "No result"}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchField;
