import React from "react";
import Stats from "./Stats";

import { formatPercentage } from "@/utils/helpers";
const AllStats = ({ yFData, holData }) => {
  return (
    <div className="w-full md:w-10/12 mx-auto md:grid grid-cols-3 md:divide-x-2 md:gap-x-4 ">
      <Stats title="Price/Book" value={yFData?.priceToBook?.fmt} />
      <Stats title="Forward EPS" value={yFData?.forwardEps?.fmt} />
      <Stats title="Trailiing EPS" value={yFData?.trailingEps?.fmt} />
      <Stats title="Forward P/E" value={yFData?.forwardPE?.fmt} />
      <Stats title="PEG" value={yFData?.pegRatio?.fmt} />
      <Stats title="Total debt" value={yFData?.totalDebt?.fmt} />
      <Stats title="Debt/Equity" value={yFData?.debtToEquity?.fmt} />
      {/* <Stats title="Debt to assest" value={yFData?.deb} /> */}

      <Stats title="EBITDA" value={yFData?.ebitda?.fmt} />
      {/*something here*/}
      <Stats title="Return on assest" value={yFData?.returnOnAssets?.fmt} />
      <Stats title="Return on Equity" value={yFData?.returnOnEquity?.fmt} />
      <Stats title="Quick ratio" value={yFData?.quickRatio?.fmt} />
      <Stats title="Current ratio" value={yFData?.currentRatio?.fmt} />

      <Stats title="Previous dividend" value={yFData?.lastDividendValue?.fmt} />
      <Stats
        title="Dividend yield"
        value={formatPercentage(holData?.dividendYield)}
      />

      <Stats title="Total revenue" value={yFData?.totalRevenue?.fmt} />
      <Stats title="Revenue per share" value={yFData?.revenuePerShare?.fmt} />
      <Stats
        title="Earnings yield"
        value={formatPercentage(holData?.earningsYield)}
      />
      <Stats title="Earnings growth" value={yFData?.earningsGrowth?.fmt} />
    </div>
  );
};

export default AllStats;
