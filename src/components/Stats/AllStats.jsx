import { stats as statsData, financials } from "@/data/data";
import React from "react";
import Stats from "./Stats";

const AllStats = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-3 divide-x-2 gap-x-4 ">
      <Stats title="Price/Book" value={statsData?.priceToBook?.fmt} />
      <Stats title="Forward EPS" value={statsData?.forwardEps?.fmt} />
      <Stats title="Trailiing EPS" value={statsData?.forwardEps?.fmt} />
      <Stats title="Price to Earnings" value={statsData?.forwardPE?.fmt} />
      <Stats title="PEG" value={statsData?.pegRatio?.fmt} />

      <Stats title="Debt/Equity" value={financials?.debtToEquity?.fmt} />
      <Stats title="EBITDA" value={financials?.ebitda?.fmt} />
      <Stats title="Return on assest" value={financials?.returnOnAssets?.fmt} />
      <Stats title="Dividend yield" value="--" />
      <Stats title="Return on Equity" value={financials?.returnOnEquity?.fmt} />
      <Stats title="Quick ratio" value={financials?.quickRatio?.fmt} />
      <Stats title="Current ratio" value={financials?.currentRatio?.fmt} />

      <Stats
        title="Previous dividend"
        value={statsData?.lastDividendValue?.fmt}
      />
      <Stats title="Total revenue" value={financials?.totalRevenue?.fmt} />
      <Stats
        title="Revenue per share"
        value={financials?.revenuePerShare?.fmt}
      />
      <Stats title="Earnings growth" value={financials?.earningsGrowth?.fmt} />
      <Stats title="Revenue growth" value={financials?.revenueGrowth?.fmt} />
      <Stats title="Total cash" value={financials?.totalCash?.fmt} />
      <Stats title="Total debt" value={financials?.totalDebt?.fmt} />
    </div>
  );
};

export default AllStats;
