import { useQuery } from "@tanstack/react-query";

const { yFInstance } = require("@/utils/axiosBase");

export const getStats = async (ticker) => {
  const res = await yFInstance.get("/markets/stock/modules", {
    params: {
      ticker: ticker,
      module: "statistics",
    },
  });

  return res?.data;
};

export const getFinancialData = async (ticker) => {
  const res = await yFInstance.get("/markets/stock/modules", {
    params: {
      ticker: ticker,
      module: "financial-data",
    },
  });

  return res?.data;
};

export const useGetFinancialData = (ticker) => {
  return useQuery({
    queryKey: ["stock financial data"],
    queryFn: () => getFinancialData(ticker),
  });
};
