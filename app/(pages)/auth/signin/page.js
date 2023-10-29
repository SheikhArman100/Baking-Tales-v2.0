import Button from "@/Components/Button";
import signinImage from "@/public/assets/signin.jpg";
import { AtSign, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Signin = () => {
  return (
    <article className="w-full h-screen mt-4  text-accentColor2 border-t flex flex-col items-center   md:pt-[7rem] md:pb-8 px-8 lg:px-[2rem] xl:px-[4rem] md:grid md:grid-cols-2 ">
      <section className="bg-black hidden md:block w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src={signinImage}
            fill
            placeholder="blur"
            alt="signin"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className=" w-full sm:w-[75%] md:w-full   flex flex-col items-center py-12 md:px-8 lg:px-[4rem] xl:px-[8rem]">
        <h2 className="text-3xl font-medium">My Account</h2>
        <form className="w-full  flex flex-col items-center gap-y-4 mt-8">
          <div className="w-full flex flex-col gap-y-2">
            <label className="text-sm font-semibold">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
              />

              <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 ">
                <AtSign size={16} />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label className="text-sm font-semibold">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0 "
              />

              <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 ">
                <button>
                  <EyeOff size={16} />
                </button>
              </span>
            </div>
          </div>
          <Button className="w-[80%] h-[3.5rem] mt-6">
            <Button.Border1 className="bg-yellow-600 z-[2]" />
            <Button.Border2 className="bg-yellow-600 z-[1]" />
            <Button.Title className="font-bold text-base">Sign in</Button.Title>
          </Button>
        </form>

        <p className="mt-4 textbase font-medium">
          Dont have an account?{" "}
          <Link href="/" className="underline">
            Sign up
          </Link>
        </p>
      </section>
    </article>
  );
};

export default Signin;
