import { yFInstance } from "@/utils/axiosBase";
import { useQuery } from "@tanstack/react-query";

export const getNews = async (ticker) => {
  const res = await yFInstance.get("/markets/news", {
    params: {
      tickers: ticker,
    },
  });

  return res?.data;
};

export const useGetNews = async (ticker) => {
  return useQuery({
    queryKey: ["market news", ticker],
    queryFn: () => getNews(ticker),
  });
};
