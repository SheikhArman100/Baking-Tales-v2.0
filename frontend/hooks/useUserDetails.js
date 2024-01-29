import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate.js";

const useUserDetails = () => {
  const axiosPrivate = useAxiosPrivate();
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosPrivate.get("user", {
        withCredentials: true,
      });

      return response.data;
    },
  });
};

export default useUserDetails;
