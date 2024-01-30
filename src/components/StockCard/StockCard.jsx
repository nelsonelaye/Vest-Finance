import Image from "next/image";
import React from "react";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";

const StockCard = ({ props }) => {
  return (
    <div className=" mx-10 flex gap-2   p-6 rounded-[5px] 0px 8px 24px;">
      <Image
        src={props.logo}
        width={70}
        height={70}
        alt={props?.company}
        className=""
      />
      <div className="mr-4 text-nowrap">
        <h6 className="text-lg font-semibold">{props?.ticker}</h6>
        <span className="text-[14px] text-gray-500 font-medium">
          {props?.company}
        </span>
      </div>

      <div className="text-right">
        <span className="text-xl font-semibold ">
          <span className="text-gray-500 text-sm">$</span>
          {props?.price}
        </span>

        {props.trend ? (
          <div className="flex items-center text-green-100 font-medium text-lg">
            <IoTrendingUp className="mr-1 rotate-[-6deg]" fontSize={20} />{" "}
            {props?.change}
            <span className="text-[11px]">%</span>
          </div>
        ) : (
          <div className="flex items-center text-red-500 font-medium text-lg">
            <IoTrendingDown className="mr-1 rotate-[-6deg]" fontSize={20} />{" "}
            {props?.change}
            <span className="text-[11px]">%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockCard;
