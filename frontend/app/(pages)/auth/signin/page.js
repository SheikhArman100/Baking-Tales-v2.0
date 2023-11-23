import signinImage from "@/public/assets/signin.jpg";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./SignInForm";

const Signin = () => {
  return (
    <article className="w-full h-full md:h-screen mt-4  text-accentColor2 border-t flex flex-col items-center justify-center   md:pt-[7rem] md:pb-8 px-8 lg:px-[2rem] xl:px-[4rem] md:grid md:grid-cols-2 ">
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
        <SignInForm />
        <p className="mt-4 textbase font-medium">
          Dont have an account?
          <Link href="signup" className="underline">
            Sign up
          </Link>
        </p>
      </section>
    </article>
  );
};

export default Signin;
