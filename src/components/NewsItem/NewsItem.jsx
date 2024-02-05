import Image from "next/image";
import React from "react";
import bitcoin from "@/assets/images/bitcoin.jpg";

const NewsItem = () => {
  return (
    <div className="max-w-[300px] flex flex-col gap-2">
      <Image
        src={bitcoin}
        with={150}
        height={150}
        alt="finanial news"
        className="rounded-[10px] w-full mb-2"
      />
      <h4 className="text-lg font-medium">
        Apple Inc. stock falls Monday, underperforms market
      </h4>
      <p className="text-neutral-100 font-light">
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ".substring(
          0,
          80
        )}
        {"..."}
      </p>
    </div>
  );
};

export default NewsItem;
