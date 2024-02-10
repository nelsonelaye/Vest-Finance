import React from "react";
import CStats from "./CStats";

const ColumnData = ({ className }) => {
  return (
    <div className={`w-2/3 sm:1/3 md:w-1/5 mx-auto ${className}`}>
      <CStats title="Market cap." value="$200B" />
      <CStats title="Volume" value="90M" />
      <CStats title="YTD" value="118%" />
      <CStats title="P/E" value="15.70" />
      <CStats title="PEG" value="0.75" />
      <CStats title="Price/Book" value="0.85" />
      <CStats title="Dividend yield" value="32.6%" />
      <CStats title="Debt/Equity" value="0.4" />
      <CStats title="Quick ratio" value="1.3" />
      <CStats title="Current ratio" value="3.8" />
      <CStats title="Return on asset" value="14%" />
      <CStats title="Return on equity" value="43%" />
    </div>
  );
};

export default ColumnData;
