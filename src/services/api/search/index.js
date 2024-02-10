const { yFInstance } = require("@/utils/axiosBase");
const { useQuery } = require("@tanstack/react-query");

export const searchStock = async (query) => {
  const res = await yFInstance.get("/markets/search", {
    params: {
      search: query,
    },
  });

  return res.data;
};

export const useSearchStock = (query) => {
  return useQuery({
    queryKey: ["search stock", query],
    queryFn: () => searchStock(query),
  });
};
