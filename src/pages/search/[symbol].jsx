import React, { useEffect, useState } from "react";
import {
  Chart,
  Layout,
  SearchField,
  StockCard,
  NewsItem,
  AllStats,
} from "@/components";
import microsoft from "@/assets/images/microsoft.png";
import apple from "../../assets/images/apple.png";
import lyft from "@/assets/images/lyft.png";
import nike from "@/assets/images/nike.png";
import snow from "@/assets/images/snow.png";
import pfizer from "@/assets/images/pfizer.jpg";
import voo from "@/assets/images/s&p.png";
import { Accordion } from "@mantine/core";
import Image from "next/image";
import { IoTrendingUp } from "react-icons/io5";
import { useParams } from "next/navigation";
import IStatementTable from "@/components/Tables/IStatementTable";
import BSheetTable from "@/components/Tables/BSheetTable";
import CashflowTable from "@/components/Tables/CashflowTable";
import { newsData } from "@/data/news";
import Slider from "react-slick";
import {
  getBalanceSheet,
  getCashflowStatement,
  getIncomeStatement,
  getMetrics,
  getRatios,
  getStockModules,
  getVolume,
} from "@/services/api/stock";
import { formatCurrency, formatMetric } from "@/utils/helpers";

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
  const [metrics, setMetrics] = useState({});
  const [ratios, setRatios] = useState({});
  const [yStats, setYStats] = useState({});
  const [yFinancialData, setYFinancialData] = useState({});
  const [volume, setVolume] = useState();
  const [incomeStatement, setIncomeStatement] = useState({});
  const [cashflow, setCashflow] = useState({});
  const [balanceSheet, setBalanceSheet] = useState({});

  const params = useParams();
  const symbol = params?.symbol;

  // const { data } = useGetStats(symbol);
  // const { data } = useGetFinancialData(symbol);
  // const { data: balanceSheetData } = useGetBalanceSheet(symbol);
  // const { data } = useGetCashflowStatement(symbol);
  // const { data } = useGetIncomeStatement(symbol);
  // const { data } = useGetNews(symbol);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const key_stats = [
    {
      title: "Market Cap.",
      value: formatMetric(metrics?.marketCap) || "N/A",
    },
    {
      title: "Volume",
      value: formatMetric(volume) || "N/A",
    },
    {
      title: "P/E ratio",
      value: metrics?.peRatio?.toFixed(2) || "N/A",
    },
  ];

  const financial_documents = [
    {
      title: "Income Statement",
      component: <IStatementTable data={incomeStatement} />,
    },
    {
      title: "Balance Sheet",
      component: <BSheetTable data={balanceSheet} />,
    },
    {
      title: "Cash Flow Statement",
      component: <CashflowTable data={cashflow} />,
    },
  ];

  const handleStats = () => {
    getStockModules(symbol, "statistics").then((res) => {
      setYStats(res?.body);
    });
    getStockModules(symbol, "financial-data").then((res) => {
      setYFinancialData(res?.body);
    });
    getMetrics(symbol).then((res) => {
      if (res?.length > 0) {
        setMetrics(res[0]);
      }
    });
    getVolume(symbol).then((res) => {
      setVolume(res[0]?.volume);
    });

    getRatios(symbol).then((res) => {
      if (res?.length > 0) {
        setRatios(res[0]);
      }
    });

    getBalanceSheet(symbol).then((res) => {
      setBalanceSheet(res[0]);
    });
    getCashflowStatement(symbol).then((res) => {
      setCashflow(res[0]);
    });
    getIncomeStatement(symbol).then((res) => {
      setIncomeStatement(res[0]);
    });
  };

  useEffect(() => {
    if (symbol) {
      handleStats();
    }
  }, [symbol]);

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
                  {symbol}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="flex items-center text-lg sm:text-2xl font-semibold ">
                {/* <PiCurrencyDollarBold /> */}
                {/* <BiDollar /> */}

                <span>
                  ${formatCurrency(yFinancialData?.currentPrice?.fmt)}
                </span>
              </span>

              <div className="flex items-center text-green-100 font-medium text-sm sm:text-lg">
                <IoTrendingUp className="mr-1 rotate-[-6deg]" fontSize={20} />{" "}
                {yFinancialData?.["52WeekChange"]?.fmt}
                {/* <span className="text-[11px]">%</span> */}
              </div>
            </div>
          </div>
          <Chart />
        </section>

        <section className="w-full my-12 sm:my-20 sm:mb-6">
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

          <AllStats
            yFData={{ ...yFinancialData, ...yStats }}
            holData={{ ...ratios, ...metrics }}
            data={{ ...ratios, ...metrics }}
          />
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10 mt-6">
          <h3>Financial statements</h3>
          <Accordion>
            {financial_documents?.map(({ title, component }) => (
              <Accordion.Item key={title} value={title}>
                <Accordion.Control className="sm:py-1">
                  <h4 className="text-lg sm:text-xl font-normal">{title}</h4>
                </Accordion.Control>
                <Accordion.Panel className=""> {component}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10">
          <h3>About </h3>
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10">
          <h3>Related news</h3>
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {newsData?.slice(0, 6)?.map((e) => (
                <NewsItem key={e.guid} data={e} />
              ))}
            </Slider>
          </div>
          <div className="hidden items-start justify-between flex-wrap gap-y-6 gap-x-3 ">
            {newsData?.slice(0, 6)?.map((e) => (
              <NewsItem key={e.guid} data={e} />
            ))}
            {/* <NewsItem />
            <NewsItem />
            <NewsItem /> */}
          </div>
        </section>

        <section className="w-10/12 mx-auto my-6 sm:my-10">
          <h3>Discover </h3>

          <div className="slider-container">
            <Slider {...sliderSettings} dots={true}>
              {feature_list?.map((stock) => (
                <StockCard key={stock?.company} props={stock} />
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Search;
