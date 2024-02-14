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
  // const [yFData, setYFData] = useState({});
  const [yStats, setYStats] = useState({});
  const [yData, setYData] = useState({});
  const [holMetrics, setHolMetrics] = useState({});
  const [holData, setHolData] = useState({});
  const [volume, setVolume] = useState();
  const [scroll, setScroll] = useState(false);

  const getScroll = () => {
    const check = typeof window !== "undefined" && window.scrollY;
    if (check >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleStockSelect = (val) => {
    if (val !== "" || val !== undefined) {
      getStockModules(val, "statistics").then((res) => {
        setYStats(res?.body);
      });

      getStockModules(val, "financial-data").then((res) => {
        setYData(res?.body);
      });
      getMetrics(val).then((res) => {
        if (res?.length > 0) {
          // setHolData({ ...holData, ...res[0] });
          setHolMetrics(res[0]);
        }
      });
      getVolume(val).then((res) => {
        setVolume(res[0]?.volume);
      });
      getRatios(val).then((res) => {
        if (res?.length > 0) {
          setHolData({ ...holData, ...res[0] });
        }
      });
    }
  };

  useEffect(() => {
    if (symbol) {
      handleStockSelect(symbol);
    }
  }, [symbol]);

  return (
    <>
      <section
        className={`w-2/3 sm:1/3 md:w-1/5 mx-auto mb-28 !z-10 ${className}`}
      >
        <div className="mb-20">
          <SearchField
            variant="small"
            page="compare"
            value={symbol}
            className={scroll ? "!sticky top-4 !z-40" : "!z-10"}
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
              ${formatCurrency(yData?.currentPrice?.fmt)}
            </h2>

            <PercentTrend
              value={yStats?.["52WeekChange"]?.fmt}
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
            value={formatMetric(holMetrics?.marketCap) || "N/A"}
          />
          <CStats title="Volume" value={formatMetric(volume)} />
          <CStats title="YTD" value={yStats?.["52WeekChange"]?.fmt} />
          <CStats title="P/E" value={yStats?.forwardPE?.fmt} />
          <CStats title="PEG" value={yStats?.pegRatio?.fmt} />
          <CStats title="Price/Book" value={yStats?.priceToBook?.fmt} />
          <CStats
            title="Dividend yield"
            value={formatPercentage(holData?.dividendYield)}
          />

          <CStats title="Quick ratio" value={yData?.quickRatio?.fmt} />
          <CStats title="Current ratio" value={yData?.currentRatio?.fmt} />
          <CStats title="Debt/Equity" value={yData?.debtToEquity?.fmt} />
          <CStats title="Return on asset" value={yData?.returnOnAssets?.fmt} />
          <CStats title="Return on equity" value={yData?.returnOnEquity?.fmt} />
          <CStats title="Earnings growth" value={yData?.earningsGrowth?.fmt} />
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
