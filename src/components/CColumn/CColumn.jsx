import React, { useEffect, useState } from "react";
import { PercentTrend, SearchField } from "..";
// import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
// import microsoft from "@/assets/images/microsoft.png";
// import nvidia from "@/assets/images/nvidia.png";
import Link from "next/link";
import CStats from "./CStats";
import {
  getMetrics,
  getRatios,
  getStockModules,
  getVolume,
} from "@/services/api/stock";
import {
  formatCurrency,
  formatMetric,
  formatPercentage,
} from "@/utils/helpers";

const CColumn = ({ className, value }) => {
  const [symbol, setSymbol] = useState(value || "");
  const screenHeight = typeof window !== "undefined" && window.scrollY;
  const [yFData, setYFData] = useState({});
  const [holData, setHolData] = useState({});
  const [volume, setVolume] = useState();

  const handleStockSelect = (val) => {
    // if (val !== "" || val !== undefined) {
    //   getStockModules(val, "statistics").then((res) => {
    //     setYFData({ ...yFData, ...res?.body });
    //   });
    //   getStockModules(val, "financial-data").then((res) => {
    //     setYFData({ ...yFData, ...res?.body });
    //   });
    //   getMetrics(val).then((res) => {
    //     if (res?.length > 0) {
    //       setHolData({ holData, ...res[0] });
    //       // setMetrics(res[0]);
    //     }
    //   });
    //   getVolume(val).then((res) => {
    //     setVolume(res[0]?.volume);
    //   });
    //   getRatios(val).then((res) => {
    //     if (res?.length > 0) {
    //       setHolData({ holData, ...res[0] });
    //     }
    //   });
    // }
  };

  useEffect(() => {
    if (symbol) {
      handleStockSelect(symbol);
    }
  }, [symbol]);

  return (
    <>
      <section className={`w-2/3 sm:1/3 md:w-1/5 mx-auto mb-28 ${className}`}>
        <div className="mb-20">
          <SearchField
            variant="small"
            page="compare"
            value={symbol}
            className={screenHeight > 300 ? "!absolute top-1 !z-50" : ""}
            handleSelect={(val) => {
              setSymbol(val);
              handleStockSelect(val);
            }}
          />

          {/* <Image
            src={nvidia}
            width={100}
            height={100}
            alt="stock logo"
            className="mx-auto my-5 mb-10"
          /> */}

          <h6 className="text-lg text-center sm:text-2xl font-semibold my-10">
            {symbol}
          </h6>

          <div className="text-center ">
            <h2 className=" text-lg sm:text-2xl font-semibold mb-3">
              ${formatCurrency(yFData?.currentPrice?.fmt)}
            </h2>

            <PercentTrend
              value={yFData?.["52WeekChange"]?.fmt}
              className="justify-center mb-5"
            />

            <Link href={`/search/${symbol}`} className="text-blue-500 ">
              <span className="flex items-center justify-center">
                Learn more <IoIosArrowForward className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>

        <section className="">
          <CStats
            title="Market cap."
            value={formatMetric(holData?.marketCap) || "N/A"}
          />
          <CStats title="Volume" value={formatMetric(volume)} />
          <CStats
            title="YTD"
            value={yFData?.ytdReturn && yFData?.ytdReturn[0]?.fmt}
          />
          <CStats title="P/E" value={yFData?.priceToBook?.fmt} />
          <CStats title="PEG" value={yFData?.pegRatio?.fmt} />
          <CStats title="Price/Book" value={yFData?.priceToBook?.fmt} />
          <CStats
            title="Dividend yield"
            value={formatPercentage(holData?.dividendYield)}
          />

          <CStats title="Quick ratio" value={yFData?.quickRatio?.fmt} />
          <CStats title="Current ratio" value={yFData?.currentRatio?.fmt} />
          <CStats title="Debt/Equity" value={yFData?.debtToEquity?.fmt} />
          <CStats title="Return on asset" value={yFData?.returnOnAssets?.fmt} />
          <CStats
            title="Return on equity"
            value={yFData?.returnOnEquity?.fmt}
          />
          <CStats title="Earnings growth" value={yFData?.earningsGrowth?.fmt} />
        </section>

        <Link href={`/search/${symbol}`} className="text-blue-500">
          <span className="flex items-center justify-center">
            Learn more <IoIosArrowForward className="ml-1 " />
          </span>
        </Link>
      </section>
    </>
  );
};

export default CColumn;
