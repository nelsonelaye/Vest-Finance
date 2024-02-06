import { useQuery } from "@tanstack/react-query";
import { livePreviewInstance } from "@/utils/axiosBase";

export const getPreview = async (link) => {
  const res = await livePreviewInstance.get("", {
    params: {
      q: link,
    },
  });

  return res?.data;
};

export const useGetLivePreview = (link) => {
  return useQuery({
    queryKey: ["preview", link],
    queryFn: () => getPreview(link),
  });
};
