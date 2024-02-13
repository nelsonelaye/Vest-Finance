import { useQuery } from "@tanstack/react-query";
import { holisticInstance, yFInstance, yHInstance } from "@/utils/axiosBase";
import moment from "moment";

export const getStockModules = async (ticker, module) => {
  const res = await yFInstance.get("/markets/stock/modules", {
    params: {
      ticker: ticker,
      module: module,
    },
  });

  return res?.data;
};

export const getMetrics = async (symbol) => {
  const res = await holisticInstance.get("/keymetrics", {
    params: {
      symbol: symbol,
      period: "annual",
    },
  });

  return res?.data;
};

export const getRatios = async (symbol) => {
  const res = await holisticInstance.get("/ratios", {
    params: {
      symbol: symbol,
      period: "annual",
    },
  });

  return res?.data;
};

export const getVolume = async (symbol) => {
  const res = await holisticInstance.get("/realtime/stock", {
    params: {
      symbols: symbol,
    },
  });

  return res?.data;
};

export const getBalanceSheet = async (symbol) => {
  const res = await holisticInstance.get("/balancesheets", {
    params: {
      symbol: symbol,
      period: "annual",
    },
  });

  return res?.data;
};

export const getCashflowStatement = async (symbol) => {
  const res = await holisticInstance.get("/cashflow", {
    params: {
      symbol: symbol,
      period: "annual",
    },
  });

  return res?.data;
};
export const getIncomeStatement = async (symbol) => {
  const res = await holisticInstance.get("/income", {
    params: {
      symbol: symbol,
      period: "annual",
    },
  });

  return res?.data;
};
export const getStockHistory = async (symbol, interval) => {
  const res = await yFInstance.get("/markets/stock/history", {
    params: {
      symbol: symbol,
      interval: interval,
    },
  });

  return res?.data;
};
export const getPriceHistory = async (symbol) => {
  const res = await yHInstance.get("/yhfhistorical", {
    params: {
      ticker: symbol,
      sdate: moment().subtract(1, "years").format("YYYY-MM-DD"),
      edate: moment(new Date()).format("YYYY-MM-DD"),
    },
  });

  return res?.data;
};

////////////////////////////// API HOOKS ///////////////////////////////////////////

export const useGetStats = (ticker) => {
  return useQuery({
    queryKey: ["statistics", ticker],
    queryFn: () => getStockModules(ticker, "statistics"),
  });
};

export const useGetFinancialData = (ticker) => {
  return useQuery({
    queryKey: ["financial data", ticker],
    queryFn: () => getStockModules(ticker, "financial-data"),
  });
};

export const useGetIncomeStatement = (ticker) => {
  return useQuery({
    queryKey: ["income statement", ticker],
    queryFn: () => getStockModules(ticker, "income-statement"),
  });
};

export const useGetBalanceSheet = (ticker) => {
  return useQuery({
    queryKey: ["balance sheet", ticker],
    queryFn: () => getStockModules(ticker, "balance-sheet"),
  });
};
export const useGetCashflowStatement = (ticker) => {
  return useQuery({
    queryKey: ["cashflow statement", ticker],
    queryFn: () => getStockModules(ticker, "cashflow-statement"),
  });
};
