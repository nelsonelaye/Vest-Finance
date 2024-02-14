import React from "react";

const Stats = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 md:p-8">
      <span className="text-base">{title}</span>
      <span className="text-[#374151]">{value}</span>
    </div>
  );
};

export default Stats;
