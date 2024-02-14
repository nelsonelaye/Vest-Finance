import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { getUniqueMonths } from "@/utils/helpers";
import { cData } from "@/data/cdata";

const Chart = ({ values, setChartInterval, chartInterval, rangeFunc }) => {
  ChartJS.register(
    LinearScale,
    PointElement,
    CategoryScale,
    LineElement,
    Filler,
    Legend,
    Title,
    Tooltip
  );

  const labels = Object.keys(cData).map((key) =>
    moment(cData[key]?.date, "DD-MM-YYYY").format("MMMM")
  );
  // const labels = values?.map((v) => moment(v?.date).format("MMMM"));
  // const labels = getUniqueMonths(values);

  const data = {
    labels,
    datasets: [
      {
        fill: "start",
        label: "Dataset 2",
        data: Object.keys(cData).map((key) => cData[key]?.close),
        // data: values.map((v) => v?.close),
        borderColor: "rgb(11, 223, 135)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgb(11, 223, 135)");
          gradient.addColorStop(1, " rgb(255, 255, 255)");
          return gradient;
        },

        lineTension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "right",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },

    elements: {
      line: {
        tension: 0,
      },
    },

    bezierCurve: false,

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },

    annotation: {
      display: false,
    },
  };

  const range = [
    // {
    //   title: "All",
    //   action: () => {
    //     rangeFunc(10, "years");
    //   },
    // },
    // {
    //   title: "5Y",
    //   action: () => {
    //     rangeFunc(5, "years");
    //   },
    // },
    // {
    //   title: "1Y",
    //   action: () => {
    //     rangeFunc(1, "years");
    //   },
    // },
    // {
    //   title: "6M",
    //   action: () => {
    //     rangeFunc(6, "months");
    //   },
    // },
    {
      title: "3M",
      action: () => {
        setChartInterval("3mo");

        rangeFunc(3, "months");
      },
    },
    {
      title: "1M",
      action: () => {
        setChartInterval("1mo");

        rangeFunc(1, "months");
      },
    },
    {
      title: "1W",
      action: () => {
        setChartInterval("1wk");

        rangeFunc(1, "weeks");
      },
    },
    {
      title: "1D",
      action: () => {
        setChartInterval("1d");

        rangeFunc(1, "days");
      },
    },
    {
      title: "1H",
      action: () => {
        setChartInterval("1h");
        rangeFunc(1, "hours");
      },
    },
  ];

  useEffect(() => {
    console.log(moment().subtract(12, "months").format("YYYY-MM-DD"));
  }, []);
  return (
    <div className="">
      <div className="hidden md:flex items-center w-fit mr-8 ml-auto mb-2 mt-4">
        {range?.map((r) => (
          <div
            key={r.title}
            className={`${
              chartInterval?.slice(0, 2).toLowerCase() == r.title.toLowerCase()
                ? "bg-black-10"
                : ""
            } px-4 py-2 text-[12px] text-gray-600  border-neutral-600 border-[1px] cursor-pointer hover:bg-black-10`}
            onClick={() => r.action()}
          >
            {r.title}
          </div>
        ))}
      </div>
      <Line options={options} data={data} className="w-full" />
    </div>
  );
};

export default Chart;
