import React from "react";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

const PercentTrend = ({ value, className }) => {
  return (
    <div
      className={`flex items-center ${
        value && value[0] === "-" ? " text-red-500" : " text-green-100"
      } ${className} font-bold text-sm sm:text-xl`}
    >
      {value && value[0] === "-" ? (
        <IoTrendingDown className="mr-1 rotate-[30deg]" fontSize={20} />
      ) : (
        <IoTrendingUp className="mr-1 rotate-[-6deg]" fontSize={20} />
      )}

      {value}
      {/* <span className="">%</span> */}
    </div>
  );
};

export default PercentTrend;
