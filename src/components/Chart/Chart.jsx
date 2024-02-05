import React from "react";
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

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

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
        // tension: 0.8,
      },
    },

    scales: {
      x: {
        grid: {
          //   display: false,
        },
      },
      y: {
        grid: {
          //   display: false,
        },
      },
    },

    annotation: {
      display: false,
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //   "linear-gradient(180deg, rgb(11, 223, 135) 10%, rgb(255, 255, 255) 80%)",
  const data = {
    labels,
    datasets: [
      {
        fill: "start",
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "rgb(11, 223, 135)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgb(11, 223, 135)");
          gradient.addColorStop(1, " rgb(255, 255, 255)");
          return gradient;
        },

        borderJoinStyle: "bevel",
        lineTension: 0.1,
      },
    ],
  };

  const range = [
    {
      title: "All",
    },
    {
      title: "5Y",
    },
    {
      title: "1Y",
    },
    {
      title: "6M",
    },
    {
      title: "3M",
    },
    {
      title: "1M",
    },
  ];
  return (
    <div className="">
      <div className="flex items-center w-fit mr-8 ml-auto mb-2 mt-4">
        {range?.map((r) => (
          <div
            key={r.title}
            className="px-4 py-2 text-[12px] text-gray-600 border-neutral-600 border-[1px] cursor-pointer"
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
