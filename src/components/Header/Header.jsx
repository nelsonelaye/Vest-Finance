"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import { usePathname } from "next/navigation";
import { SearchField } from "../";
import { useSearchContext } from "@/context/SearchContext";

const Header = () => {
  const pathname = usePathname();
  const { isSearch, setIsSearch } = useSearchContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="z-50">
      <nav
        className="flex items-center justify-between p-6 py-0 lg:px-8"
        aria-label="Global"
      >
        <div className="flex z-10 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Vest Finance</span>

            <Image src={logo} width={200} height={30} alt="vest finance" />
          </Link>
        </div>

        {isSearch && <SearchField variant="primary" />}

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-8">
          <Link
            href="/search"
            className={`${
              pathname == "/search" ? "!text-green-100" : ""
            } text-sm font-semibold leading-6 text-gray-900`}
          >
            Find stock{" "}
            <span aria-hidden="true" className="">
              &rarr;
            </span>
          </Link>
          <span
            className="text-sm font-semibold cursor-pointer leading-6 text-gray-900"
            onClick={() => {
              setIsSearch(!isSearch);
            }}
          >
            {isSearch ? "Cancel" : "Search"}
          </span>
          <span className="text-sm font-semibold cursor-default leading-6 text-gray-400">
            Compare
          </span>
          <span className="text-sm font-semibold cursor-default leading-6 text-gray-400">
            Learn
          </span>
        </div>
      </nav>

      {/* <!--- Mobile menu, show/hide based on menu open state. --> */}
      {isSidebarOpen && <Sidebar />}
    </header>
  );
};

export default Header;
