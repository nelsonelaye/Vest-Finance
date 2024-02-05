import React, { useRef } from "react";
import { Chart, Layout, SearchField, StockCard, NewsItem } from "@/components";
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
import { Accordion, rem } from "@mantine/core";
import Image from "next/image";
import { IoTrendingUp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import Stats from "@/components/Stats/Stats";

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

  const key_stats = [
    {
      title: "Market Cap.",
      value: "30.2B",
    },
    {
      title: "Volume",
      value: "110M",
    },
    {
      title: "P/E ratio",
      value: "12.6",
    },
  ];

  const financial_documents = [
    {
      title: "Income Statement",
    },
    {
      title: "Balance Sheet",
    },
    {
      title: "Cash Flow Statement",
    },
  ];

  return (
    <Layout>
      <div className="w-11/12 sm:w-10/12 my-4 mt-10 mx-auto flex flex-col items-center">
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

        <section className="w-full">
          <div className="w-full flex justify-between mb-5 px-6">
            <div className="flex items-center">
              <Image
                src={apple}
                width={50}
                height={50}
                alt="apple"
                className="w-[40px] sm:w-[50px] rounded-full mr-3"
              />
              <div>
                <h6 className="text-lg sm:text-2xl font-semibold">
                  {" "}
                  Apple Inc.
                </h6>
                <span className="text-sm sm:text-[14px] text-gray-500 font-medium">
                  AAPL
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="flex items-center text-lg sm:text-2xl font-semibold ">
                {/* <PiCurrencyDollarBold /> */}
                {/* <BiDollar /> */}

                <span>
                  $
                  {(15070)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </span>

              <div className="flex items-center text-green-100 font-medium text-sm sm:text-lg">
                <IoTrendingUp className="mr-1 rotate-[-6deg]" fontSize={20} />{" "}
                {24.8}
                <span className="text-[11px]">%</span>
              </div>
            </div>
          </div>
          <Chart />
        </section>

        <section className="w-full my-12 sm:my-20">
          <h3 className="text-[40px] font-semibold text-center mb-20">
            Key Statistics
          </h3>
          <div className="w-full flex items-center justify-around mb-20">
            {key_stats?.map((stat) => (
              <div key={stat?.title} className="text-center">
                <h6 className="text-[28px] font-semibold">{stat?.value}</h6>
                <span className="text-base text-neutral-80">{stat?.title}</span>
              </div>
            ))}
          </div>

          <div className="w-10/12 mx-auto grid grid-cols-3 divide-x-2 ">
            <Stats title="Price/book" value="71.4" />
            <Stats title="Earnings per share" value="71.4" />
            <Stats title="Price to Earnings" value="71.4" />
            <Stats title="PEG" value=".82" />
            <Stats title="Dividend yield" value="71.4" />
            <Stats title="Debt/Equity" value="71.4" />
            <Stats title="Price/book" value="71.4" />
            <Stats title="Return on assest" value="71.4" />
            <Stats title="Dividend yield" value="71.4" />
            <Stats title="Return on Equity" value="14.6%" />
            <Stats title="Current ratio" value="3.1" />
            <Stats title="Debt/Equity" value="71.4" />
          </div>
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10">
          <h3>Financial statements</h3>
          <Accordion>
            {financial_documents?.map((doc) => (
              <Accordion.Item key={doc.title} value={doc.title}>
                <Accordion.Control className="sm:py-1">
                  <h4 className="text-lg sm:text-xl font-normal">
                    {doc.title}
                  </h4>
                </Accordion.Control>
                <Accordion.Panel className=""> {doc?.title}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10">
          <h3>Recent news</h3>
          <div className="flex items-center justify-between">
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10">
          <h3>Recommended stocks</h3>
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
        </section>
      </div>
    </Layout>
  );
};

export default Search;
