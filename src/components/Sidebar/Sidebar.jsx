import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { SearchField } from "..";

const Sidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* <!-- Background backdrop, show/hide based on slide-over state  --> */}
      <div className="fixed inset-0 z-50"></div>
      <div className=" fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className=" ml-[-30px]">
            <span className="sr-only">Vest Finance</span>

            <Image src={logo} width={200} height={30} alt="vest finance" />
          </Link>

          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            <span className="sr-only">Close menu</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <SearchField
                variant="primary"
                className=" mb-4"
                description="start by searching stock symbols to get analysis"
                closeSidebar={() => {
                  setIsSidebarOpen(false);
                }}
              />
              <Link
                href="/compare"
                onClick={() => {
                  setIsSidebarOpen(false);
                }}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
              >
                Compare
              </Link>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-neutral-50 hover:bg-gray-50"
              >
                Advisory
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-neutral-50 hover:bg-gray-50"
              >
                Learn
              </a>
            </div>
            <div className="py-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfle0ZnG3SEvUmnmpEq8AZB7um43xwtluFSfWI3KYQona5FSA/viewform"
                target="_blank"
                className="-mx-3  block rounded-lg px-3 py-2.5 text-base font-medium underline leading-7 text-gray-900 hover:bg-gray-50"
              >
                <span>Feedback</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
