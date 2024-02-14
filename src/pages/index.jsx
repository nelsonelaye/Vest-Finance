import React from "react";
import Link from "next/link";
import { useSearchContext } from "@/context/SearchContext";
import { Layout } from "@/components";

export default function Home() {
  const { setIsSearch } = useSearchContext();

  return (
    <div className="scene_element scene_element--fadeinleft">
      <Layout>
        <div className="bg-white  px-6 md:pt-14 lg:px-8 ">
          <div className="w-full text-center md:text-left sm:4/5 md:w-3/5 lg:3/5 py-28 pb-48 ">
            <h1 className=" text-4xl font-bold md:leading-[70px] tracking-tight text-gray-900 md:text-6xl">
              Spot <span className="text-green-100 ">opportunities</span> for
              smarter <span className="">investment</span> decisons.
            </h1>
            <p className=" mt-3 text-base md:text-lg leading-8 text-black-50">
              {/* Analyse stock data. Find important metrics. Make better
                investment decisons. */}
              Simplified equity analysis for retail investors.
            </p>
            <div className="flex flex-col gap-3 mt-10 md:flex-row items-center  md:gap-6">
              <Link
                href="/search/AAPL"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <button
                  type="button"
                  className="rounded-md bg-green-100 px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-green-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-60"
                  onClick={() => {}}
                >
                  Get started
                </button>
              </Link>

              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
