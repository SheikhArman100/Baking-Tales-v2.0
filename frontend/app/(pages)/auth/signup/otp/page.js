import otpImage from "@/public/assets/otp.jpg";
import Image from "next/image";
import FormOtp from "./FormOtp";
import ResendOtp from "./ResendOtp";

const Otp = () => {
  return (
    <article className="w-full h-screen mt-4  text-accentColor2 border-t flex flex-col items-center justify-center  md:pt-[7rem] md:pb-8 px-8 lg:px-[2rem] xl:px-[4rem] md:grid md:grid-cols-2 ">
      <section className="bg-black hidden md:block w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src={otpImage}
            fill
            placeholder="blur"
            alt="signin"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className=" w-full sm:w-[75%] md:w-full   flex flex-col items-center py-12 md:px-8 lg:px-[4rem] xl:px-[8rem]">
        <h2 className="text-3xl font-semibold">Account Verification</h2>
        <p className="text-center max-w-[15rem] mt-4 text-sm">
          We sent you a code in email to verify tour account
        </p>
        <FormOtp />

        <ResendOtp />
      </section>
    </article>
  );
};

export default Otp;
