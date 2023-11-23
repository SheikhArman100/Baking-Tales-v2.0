"use client";
import Button from "@/Components/Button";
import useGenerateOTP from "@/hooks/useGenerateOTP";
import { signinSchema } from "@/libs/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignInForm = () => {
  const generateOtpMutation = useGenerateOTP();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const handleSignin = (formData) => {
    generateOtpMutation.mutate(
      {
        email: formData.email,
        register: false,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          router.push(`/auth/signin/otp?email=${formData.email}`);
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
      onSubmit={handleSubmit(handleSignin)}
      className="w-full  flex flex-col items-center gap-y-4 mt-8"
    >
      <div className="w-full flex flex-col gap-y-2">
        <label className="text-sm font-semibold">Email</label>
        <div className="relative">
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md border  border-white px-2 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
          />

          <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 ">
            <AtSign size={16} />
          </span>
        </div>
        {errors.email?.message && (
          <p className="text-xs font-semibold text-red-700">
            *{errors.email?.message}
          </p>
        )}
      </div>

      <Button className="w-[80%] h-[3.5rem] mt-6">
        <Button.Border1 className="bg-yellow-600 z-[2]" />
        <Button.Border2 className="bg-yellow-600 z-[1]" />
        <Button.Title className="font-bold text-base">
          {generateOtpMutation.isPending ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <span>Sign in</span>
          )}
        </Button.Title>
      </Button>
    </form>
  );
};

export default SignInForm;
