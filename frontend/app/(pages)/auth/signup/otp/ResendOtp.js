"use client";
import useGenerateOTP from "@/hooks/useGenerateOTP";
import { useSignupStore } from "@/libs/zustand/signupStore";
import { toast } from "react-toastify";

const ResendOtp = () => {
  const generateOtpMutation = useGenerateOTP();
  const { email } = useSignupStore();
  const handleOtp = () => {
    generateOtpMutation.mutate(
      {
        email: email,
        register: true,
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
    <p className="mt-4 text-base flex gap-x-2  font-medium">
      I didnt receive a code!
      <button className="underline text-gray-400" onClick={handleOtp}>
        Resend Code
      </button>
    </p>
  );
};

export default ResendOtp;
