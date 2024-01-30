import React, { useRef } from "react";
import { Layout, SearchField, StockCard } from "@/components";
import microsoft from "@/assets/images/microsoft.png";
import apple from "../../assets/images/apple.png";
import lyft from "@/assets/images/lyft.png";
import nike from "@/assets/images/nike.png";
import snow from "@/assets/images/snow.png";
import pfizer from "@/assets/images/pfizer.jpg";
import voo from "@/assets/images/s&p.png";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { rem } from "@mantine/core";

const feature_list = [
  {
    ticker: "MSFT",
    company: "Microsoft",
    logo: microsoft,
    price: 224.5,
    change: 14.2,
    trend: true,
  },
  {
    ticker: "Pfizer",
    company: "PFE",
    logo: pfizer,
    price: 45.5,
    change: 10.3,
    trend: false,
  },
  {
    ticker: "LYFT",
    company: "Lyft Inc.",
    logo: lyft,
    price: 28.1,
    change: 0.18,
    trend: false,
  },
  {
    ticker: "AAPL",
    company: "Apple Inc.",
    logo: apple,
    price: 184.92,
    change: 18.1,
    trend: true,
  },
  {
    ticker: "VOO",
    company: "S&P 500",
    logo: voo,
    price: 14.92,
    change: 78.1,
    trend: false,
  },
  {
    ticker: "NIKE",
    company: "Nike Inc.",
    logo: nike,
    price: 113.59,
    change: 1.05,
    trend: true,
  },
  {
    ticker: "SNOW",
    company: "Snow Inc.",
    logo: snow,
    price: 66.43,
    change: 2.99,
    trend: false,
  },
];

const Search = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Layout>
      <div className="w-full my-4 mx-auto flex flex-col items-center">
        <section className="hidden w-full  flex-col items-center py-20 mb-12 bg-gradient-to-tr from-white to-black">
          <h1 className="text-xl w-1/2 text-center font-semibold leading-[50px] tracking-tight text-white sm:text-4xl">
            {/* Get real-time data for stocks and ETF assets */}
            Search and analyse equities with fundamental metrics and data.
          </h1>
          <p className="hidden mt-2 text-lg leading-8 text-gray-600">
            Search and analyse equities with fundamental metrics and data.
          </p>
          <SearchField />
        </section>

        <section className="w-10/12 mx-auto mb-20">
          <h4 className="font-semibold text-xl my-4">Featured</h4>

          <Carousel
            slideSize="100%"
            align="start"
            slideGap="xl"
            controlsOffset="xs"
            withControls={true}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            nextControlIcon={
              <BsArrowRightCircleFill
                style={{ width: rem(16), height: rem(16) }}
              />
            }
            previousControlIcon={
              <BsArrowLeftCircleFill
                style={{ width: rem(16), height: rem(16) }}
              />
            }
          >
            {feature_list?.map((stock) => (
              <StockCard key={stock?.company} props={stock} />
            ))}
          </Carousel>

          {/* <div className="flex gap-2">
          <Image src={microsoft} width={70} height={70} alt="stock" />
          <div className="mr-4">
            <h6 className="text-lg font-semibold">MSFT</h6>
            <span className="text-[14px] text-gray-500 font-medium">
              Microsoft
            </span>
          </div>
          <div>
            <span className="text-xl font-semibold ">
              <span className="text-gray-500 text-sm">$</span>226.4
            </span>
            <div className="flex items-center text-green-100 font-medium text-lg">
              <IoTrendingUp className="mr-1 rotate-[-6deg]" fontSize={20} /> 13
              <span className="text-[11px]">%</span>
            </div>
          </div>
        </div> */}
        </section>

        <div className="hidden">
          <h3 className="text-[40px] font-bold text-center mb-10">
            Key Statistics
          </h3>
          <div className="w-full flex items-center justify-around mb-10">
            <div className="text-center">
              <h6 className="text-lg">Market Cap</h6>
              <span className="text-[28px] font-medium">30.2B</span>
            </div>
            <div className="text-center">
              <h6 className="text-lg">Volume</h6>
              <span className="text-[28px] font-medium">110M</span>j
            </div>
            <div className="text-center">
              <h6 className="text-lg">Price/Earning ratio</h6>
              <span className="text-[28px] font-medium">12.6</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-14 px-10">
            <div className="flex items-center justify-between">
              <span className="text-base">Price/book</span>
              <span className="text-[#374151]">71.4</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Dividend yield</span>
              <span className="text-[#374151]">71.4</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Debt/Equity</span>
              <span className="text-[#374151]">71.4</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
