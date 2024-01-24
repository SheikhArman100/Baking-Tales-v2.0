"use client";
import { axiosPublic } from "@/libs/axios/config.js";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation.js";

const StatusChecker = ({ children }) => {
  const router = useRouter();
  const { isPending, error, data } = useQuery({
    queryKey: ["auth","check"],
    queryFn: async () => {
      const response = await axiosPublic.get("auth/status", {
        withCredentials: true,
      });

      return response.data;
    },
    
  });
  if (isPending) {
    return (
      <div className="h-screen w-full bg-customBlack flex items-center justify-center">
        <span className="loading loading-spinner text-warning" />
      </div>
    );
  }
  if (error) {
    router.push("/auth/signin");
  }
  return <>{data && children}</>;
};

export default StatusChecker;
