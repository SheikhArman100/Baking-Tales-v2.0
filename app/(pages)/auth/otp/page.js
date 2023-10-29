import Button from "@/Components/Button";
import otpImage from "@/public/assets/otp.jpg";
import Image from "next/image";

const Otp = () => {
  return (
    <article className="w-full h-screen mt-4  text-accentColor2 border-t flex flex-col items-center   md:pt-[7rem] md:pb-8 px-8 lg:px-[2rem] xl:px-[4rem] md:grid md:grid-cols-2 ">
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
        <form className="w-full  flex flex-col items-center gap-y-4 mt-8">
          <h5 className="text-sm font-semibold text-textColor">
            Enter your otp code here
          </h5>
          <div className="flex gap-2 flex-wrap  justify-center">
            <input
              type="text"
              maxLength="1"
              className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
            />
            <input
              type="text"
              maxLength="1"
              className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
            />
            <input
              type="text"
              maxLength="1"
              className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
            />
            <input
              type="text"
              maxLength="1"
              className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
            />
            <input
              type="text"
              maxLength="1"
              className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
            />
            <input
              type="text"
              maxLength="1"
              className="bg-transparent h-12 aspect-square rounded-full text-center text-3xl font-semibold uppercase border border-accentColor focus:outline-0 focus:border-2 focus:border-accentColor"
            />
          </div>
          <Button className="w-[80%] h-[3.5rem] mt-8">
            <Button.Border1 className="bg-yellow-600 z-[2]" />
            <Button.Border2 className="bg-yellow-600 z-[1]" />
            <Button.Title className="font-bold text-base">Verify</Button.Title>
          </Button>
        </form>

        <p className="mt-4 text-base flex gap-x-2  font-medium">
          I didnt receive a code!
          <button className="underline text-gray-400">Resend Code</button>
        </p>
      </section>
    </article>
  );
};

export default Otp;
