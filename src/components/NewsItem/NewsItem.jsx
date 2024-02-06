import Image from "next/image";
import React, { useEffect, useState } from "react";
import bitcoin from "@/assets/images/bitcoin.jpg";
import { getPreview } from "@/services/api/livePreview";
import { Skeleton } from "@mantine/core";

const NewsItem = ({ data }) => {
  const [image, setImage] = useState("");
  // useEffect(() => {
  //   getPreview(data?.link).then((res) => {
  //     setImage(res?.image);
  //   });
  // }, []);
  return (
    <div className=" max-w-[320px]  flex flex-col gap-2">
      <Skeleton visible={image === ""} className="mb-2" animate>
        <img
          src={image !== "" ? image : bitcoin}
          width={150}
          height={150}
          alt="finanial news"
          className="h-[200px] min-w-[200px] object-cover rounded-[8px] w-full mb-2"
        />
      </Skeleton>

      <span className="text-sm text-neutral-100 ">{data?.source}</span>
      <h4 className="text-lg font-medium">
        {data?.title
          ? data.title.substring(0, 60)
          : " Apple Inc. stock falls Monday, underperforms market"}
        {"..."}
      </h4>
      <p className="hidden text-neutral-100 font-light">
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
