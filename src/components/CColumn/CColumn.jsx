import React from "react";
import { PercentTrend, SearchField } from "..";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import microsoft from "@/assets/images/microsoft.png";
import Link from "next/link";

const CColumn = ({ className }) => {
  return (
    <section className={`w-2/3 sm:1/3 md:w-1/5 mx-auto ${className}`}>
      <div className="mb-10">
        <SearchField variant="small" value="Microsoft" />

        <Image
          src={microsoft}
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

export const ColumnData = ({ className }) => {
  return (
    <div className={`w-2/3 sm:1/3 md:w-1/5 mx-auto ${className}`}>
      <div className="text-center my-10 ">
        <span className="text-lg text-black-50 mb-2">Market cap.</span>
        <p className="text-xl font-medium">$200B</p>
      </div>
      <div className="text-center my-10">
        <span className="text-lg text-black-50 mb-2">Volume</span>
        <p className="text-xl font-medium">90M</p>
      </div>
      <div className="text-center my-10">
        <span className="text-lg text-black-50 mb-2">P/E</span>
        <p className="text-xl font-medium">15.70</p>
      </div>
      <div className="text-center my-10">
        <span className="text-lg text-black-50 mb-2">Price/Book</span>
        <p className="text-xl font-medium">0.85</p>
      </div>
      <div className="text-center my-10">
        <span className="text-lg text-black-50 mb-2">Dividend yield</span>
        <p className="text-xl font-medium">32.6%</p>
      </div>
      <div className="text-center my-10">
        <span className="text-lg text-black-50 mb-2">Debt/Equity</span>
        <p className="text-xl font-medium">0.4</p>
      </div>
    </div>
  );
};
