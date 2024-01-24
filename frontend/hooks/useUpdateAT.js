"use client";

import { axiosPublic } from "@/libs/axios/config.js";
import { setAccessToken } from "@/libs/zustand/authStore.js";


const useUpdateAT = () => {
  const update = async () => {
    const response = await axiosPublic.get("auth/updateAT", {
      withCredentials: true,
    });
    setAccessToken(response.data.accessToken);
    return response.data.accessToken;
  };
  return update;
};

export default useUpdateAT;
