"use client";
import Button from "@/Components/Button";
import { axiosPublic } from "@/libs/axios/config";
import { otpSchema } from "@/libs/zod_schema";
import { setAccessToken } from "@/libs/zustand/authStore";
import { useSignupStore } from "@/libs/zustand/signupStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormOtp = () => {
  const router = useRouter();
  const { name, email, phoneNumber } = useSignupStore(); //zustand store
  const queryClient=useQueryClient()

  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });

  //otp verification mutation
  const verifyOtpMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("auth/verifyOTP", {
        otp: data.otp,
        email: data.email,
      });
      return response.data;
    },
    onSuccess: (data) => {
      signupMutation.mutate(
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          isVerified: data.isVerified,
        },
        {
          onSuccess: (data) => {
            setAccessToken(data.accessToken);
            toast.success(data.message);
            router.push("/");
          },
          onError: (data) => {
            toast.error(data.response.data.message);
          },
        }
      );
    },
  });

  //signup mutation
  const signupMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post(
        "auth/register",
        {
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          image:
            "https://images.unsplash.com/photo-1455761070998-b340f7060cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
          isVerified: data.isVerified,
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      reset();
      return queryClient.invalidateQueries(["auth","check"]);
    },
  });

  //form submit
  const handleOTP = async (data) => {
    const otp = Object.keys(data).reduce(
      (accumulator, key) => accumulator + data[key].toUpperCase(),
      ""
    );
    verifyOtpMutation.mutate(
      {
        otp: otp,
        email: email,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
        },
        onError: (data) => {
          toast.error(data.response.data.message);
        },
      }
    );
  };
  return (
    <form
      autoComplete="off"
      className="w-full  flex flex-col items-center gap-y-4 mt-8"
      onSubmit={handleSubmit(handleOTP)}
    >
      <h5 className="text-sm font-semibold text-textColor">
        Enter your otp code here
      </h5>
      <div className="flex gap-2 flex-wrap  justify-center">
        <input
          type="text"
          maxLength="1"
          {...register("otp1")}
          className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
        />
        <input
          type="text"
          maxLength="1"
          {...register("otp2")}
          className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
        />
        <input
          type="text"
          maxLength="1"
          {...register("otp3")}
          className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
        />
        <input
          type="text"
          maxLength="1"
          {...register("otp4")}
          className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
        />
        <input
          type="text"
          maxLength="1"
          {...register("otp5")}
          className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
        />
        <input
          type="text"
          maxLength="1"
          {...register("otp6")}
          className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
        />
      </div>
      {errors.otp1 ||
      errors.otp2 ||
      errors.otp3 ||
      errors.otp4 ||
      errors.otp5 ||
      errors.otp6 ? (
        <p className="text-xs font-semibold text-red-700">*can not be empty</p>
      ) : null}
      <Button className="w-[80%] h-[3.5rem] mt-8">
        <Button.Border1 className="bg-[#fffcc7] border-black z-[1]" />
        <Button.Border2 className="bg-[#fffcc7] border-black z-[2]" />
        <Button.Title className="font-bold text-base text-black">
          {verifyOtpMutation.isPending || signupMutation.isPending ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <span>Verify</span>
          )}
        </Button.Title>
      </Button>
    </form>
  );
};

export default FormOtp;
