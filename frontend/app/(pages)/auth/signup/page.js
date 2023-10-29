import Button from "@/Components/Button";
import signUpImage from "@/public/assets/signup.jpg";
import { EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <article className="w-full h-full mt-4  text-accentColor2 border-t flex flex-col items-center lg:justify-center   md:pt-[7rem] md:pb-8 px-8 lg:px-[2rem] xl:px-[4rem] md:grid md:grid-cols-2 ">
      <section className="bg-black hidden md:block w-full h-full lg:h-[80%]">
        <div className="w-full h-full  relative">
          <Image
            src={signUpImage}
            fill
            placeholder="blur"
            alt="signin"
            className="w-full h-full  object-cover"
          />
        </div>
      </section>
      <section className=" w-full sm:w-[75%] md:w-full   flex flex-col items-center py-12 md:px-8 lg:px-[4rem] xl:px-[8rem]">
        <h2 className="text-3xl font-medium">My Account</h2>
        <form className="w-full mt-8 flex flex-col items-center ">
          <div className="grid grid-cols-2 gap-2">
            {/* name */}
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-semibold">Name</label>
              <input
                type="text"
                className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
              />
            </div>
            {/* phone number */}
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-semibold">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
              />
            </div>
            {/* address */}
            <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
              <label className="text-sm font-semibold">Address</label>
              <textarea
                rows="2"
                className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
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
            {/* confirm password */}
            <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
              <label className="text-sm font-semibold">Confirm Password</label>
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

            {/* image */}
            <div className="flex flex-col gap-y-2 col-span-2">
              <label className="text-sm font-semibold">Profile image</label>
              <input
                type="file"
                className="file-input file-input-bordered bg-transparent text-sm "
              />
            </div>
          </div>
          <Button className="w-[80%] h-[3.5rem] mt-6">
            <Button.Border1 className="bg-yellow-600 z-[2]" />
            <Button.Border2 className="bg-yellow-600 z-[1]" />
            <Button.Title className="font-bold text-base">Sign Up</Button.Title>
          </Button>
        </form>

        <p className="mt-4 textbase font-medium">
          Already have an account?
          <Link href="/" className="underline">
            Sign in
          </Link>
        </p>
      </section>
    </article>
  );
};

export default Signup;
