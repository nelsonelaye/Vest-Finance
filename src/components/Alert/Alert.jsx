import React from "react";

const Alert = () => {
  return (
    <div className="flex  items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-gray-50 px-16 py-14">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-200 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4"></div>
          </div>
        </div>
        <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
          Service update
        </h3>
        <p className="w-[230px] text-center font-normal text-gray-600"></p>
      </div>
    </div>
  );
};

export default Alert;
