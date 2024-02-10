import { useQuery } from "@tanstack/react-query";
import { apiInstance, holisticInstance, yFInstance } from "@/utils/axiosBase";

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
