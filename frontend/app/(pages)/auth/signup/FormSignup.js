"use client";
import Button from "@/Components/Button";
import useGenerateOTP from "@/hooks/useGenerateOTP";

import { signupSchema } from "@/libs/zod_schema";
import { setSignup } from "@/libs/zustand/signupStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormSignup = () => {
  const router = useRouter();
  const generateOtpMutation = useGenerateOTP();

  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  //generate otp mutation

  const handleSignup = (data) => {
    setSignup(data);
    generateOtpMutation.mutate(
      {
        email: data.email,
        register: true,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          router.push("/auth/signup/otp");
          reset();
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
      className="w-full mt-8 flex flex-col items-center"
      onSubmit={handleSubmit(handleSignup)}
    >
      <div className="w-full grid grid-cols-1 gap-2">
        {/* name */}
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full rounded-md border  border-white  shadow-sm text-sm bg-transparent py-3 px-2 focus:border focus:border-accentColor focus:outline-0"
          />
          {errors.name?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.name?.message}
            </p>
          )}
        </div>
        {/* phone number */}
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="ex: 01*** *** ***"
            {...register("phoneNumber")}
            className="w-full rounded-md border  border-white px-2 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
          />
          {errors.phoneNumber?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.phoneNumber?.message}
            </p>
          )}
        </div>
        {/* email */}
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md border  border-white px-2 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
          />
          {errors.email?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.email?.message}
            </p>
          )}
        </div>
      </div>
      <Button className="w-[80%] h-[3.5rem] mt-6">
        <Button.Border1 className="bg-yellow-600 z-[2]" />
        <Button.Border2 className="bg-yellow-600 z-[1]" />
        <Button.Title className="font-bold text-base">
          {generateOtpMutation.isPending ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <span>Sign up</span>
          )}
        </Button.Title>
      </Button>
    </form>
  );
};

export default FormSignup;
