"use client";
import { useAuthStore } from "@/libs/zustand/authStore.js";
import useUpdateAT from "./useUpdateAT.js";
import { useEffect } from "react";
import { axiosPrivate } from "@/libs/axios/config.js";

const useAxiosPrivate = () => {
  const update = useUpdateAT();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (
          (!prevRequest?.sent && error?.response?.status === 403) ||
          error?.response?.status === 401
        ) {
          prevRequest.sent = true;
          const newAccessToken = await update();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, update]);

  return axiosPrivate;
};

export default useAxiosPrivate;
