import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate.js";

const useCarts = () => {
  const axiosPrivate = useAxiosPrivate();
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await axiosPrivate.get("cart", {
        withCredentials: true,
      });
      return response.data;
    },
  });
};

export default useCarts;
