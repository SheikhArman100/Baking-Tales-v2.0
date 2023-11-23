import { axiosPublic } from "@/libs/axios/config";
import { useMutation } from "@tanstack/react-query";

const useGenerateOTP = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("auth/generateOTP", {
        email: data.email,
        phoneNumber: data.phoneNumber,
        register: data.register || false,
      });
      return response.data;
    },
  });
};

export default useGenerateOTP;
