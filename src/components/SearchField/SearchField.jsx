import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import { getStats } from "@/services/api/stock";
// import { useRouter } from "next/router";

const SearchField = ({ variant }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("ticker") || ""
  );

  const _onEnter = (e) => {
    e.preventDefault();
    if (e.code === "Enter") {
      router.push({
        pathname: "/search",
        query: { ticker: searchQuery },
      });
      // getStats(e.target?.value);
    }
  };

  return (
    <div className="relative w-full mx-6 sm:w-[600px]  sm:mx-auto">
      <input
        type="search"
        name="ticker"
        className={`${
          variant === "primary"
            ? "py-2 px-4 rounded-lg"
            : "pt-6 pb-7 px-6 rounded-[50px]"
        } border-[2px] border-gray-300 w-full   my-5 outline-none  sm:mx-auto`}
        placeholder="E.g. AAPL"
        autoComplete="off"
        autoFocus
        onKeyUp={_onEnter}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />

      {searchQuery.length > 1 && (
        <div className="absolute  bg-white shadow-md w-full rounded-[15px] min-h-20 flex items-center px-6 text-sm text-gray-600 font-medium ">
          No result
        </div>
      )}
    </div>
  );
};

export default SearchField;
