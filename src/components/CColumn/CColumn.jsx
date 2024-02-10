import React from "react";
import { PercentTrend, SearchField } from "..";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import microsoft from "@/assets/images/microsoft.png";
import nvidia from "@/assets/images/nvidia.png";
import Link from "next/link";

const CColumn = ({ className }) => {
  const screenHeight = typeof window !== "undefined" && window.scrollY;

  return (
    <section className={`w-2/3 sm:1/3 md:w-1/5 mx-auto ${className}`}>
      <div className="mb-10">
        <SearchField
          variant="small"
          value="Microsoft"
          className={screenHeight > 300 ? "!sticky top-1 z-50" : ""}
        />

        <Image
          src={nvidia}
          width={100}
          height={100}
          alt="stock logo"
          className="mx-auto my-5 mb-10"
        />

        <div className="text-center ">
          <h2 className=" text-lg sm:text-2xl font-semibold mb-3">$367.03</h2>

          <PercentTrend
            value={20.5}
            trend="down"
            className="justify-center mb-5"
          />

          <Link href="#" className="text-blue-500">
            <span className="flex items-center justify-center">
              Learn more <IoIosArrowForward className="ml-1 " />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CColumn;
