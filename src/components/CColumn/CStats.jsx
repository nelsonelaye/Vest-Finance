import React from "react";

const CStats = ({ title, value }) => {
  return (
    <div className="text-center my-10 ">
      <span className="text-sm sm:text-base text-black-50 mb-2">{title}</span>
      <p className="text-xl sm:text-2xl font-medium">{value}</p>
    </div>
  );
};

export default CStats;
