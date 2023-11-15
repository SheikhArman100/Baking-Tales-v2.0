"use client";
import Button from "@/Components/Button";
import { firebaseStorage } from "@/libs/firebase/firebaseConfig";
import { signupSchema } from "@/libs/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormSignup = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirmation: false,
  });

  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  //handle sign up
  const handleSignup =async (data) => {
    if (data.image) {
      const imageRef = ref(firebaseStorage, `users/${data.phoneNumber}`);
      uploadBytes(imageRef, data.image[0]).then((image) => {
        getDownloadURL(image.ref).then((url) => {
          console.log(url);
        });
      });
    }
  };
  return (
    <form
      className="w-full mt-8 flex flex-col items-center "
      onSubmit={handleSubmit(handleSignup)}
    >
      <div className="grid grid-cols-2 gap-2">
        {/* name */}
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
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
            {...register("phoneNumber")}
            className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
          />
          {errors.phoneNumber?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.phoneNumber?.message}
            </p>
          )}
        </div>
        {/* email */}
        <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
          />
          {errors.email?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.email?.message}
            </p>
          )}
        </div>
        {/* address */}
        <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
          <label className="text-sm font-semibold">Address</label>
          <input
            type="text"
            {...register("address")}
            rows="2"
            className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
          />
          {errors.address?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.address?.message}
            </p>
          )}
        </div>
        {/* password */}
        <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
          <label className="text-sm font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword.password ? "text" : "password"}
              {...register("password")}
              className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0 "
            />

            <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 ">
              <button
                type="button"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
              >
                {showPassword.password ? (
                  <EyeIcon size={16} />
                ) : (
                  <EyeOff size={16} />
                )}
              </button>
            </span>
          </div>
          {errors.password?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.password?.message}
            </p>
          )}
        </div>
        {/* confirm password */}
        <div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
          <label className="text-sm font-semibold">Confirm Password</label>
          <div className="relative">
            <input
              type={showPassword.passwordConfirmation ? "text" : "password"}
              {...register("passwordConfirmation")}
              className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0 "
            />

            <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 ">
              <button
                type="button"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    passwordConfirmation: !showPassword.passwordConfirmation,
                  })
                }
              >
                {showPassword.passwordConfirmation ? (
                  <EyeIcon size={16} />
                ) : (
                  <EyeOff size={16} />
                )}
              </button>
            </span>
          </div>
          {errors.passwordConfirmation?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.passwordConfirmation?.message}
            </p>
          )}
        </div>

        {/* image */}
        <div className="flex flex-col gap-y-2 col-span-2">
          <label className="text-sm font-semibold">Profile image</label>
          <input
            type="file"
            {...register("image")}
            className="border border-accentColor2 p-2 rounded-lg text-sm font-semibold file: "
          />
          {errors.image?.message && (
            <p className="text-xs font-semibold text-red-700">
              *{errors.image?.message}
            </p>
          )}
        </div>
      </div>
      <Button className="w-[80%] h-[3.5rem] mt-6">
        <Button.Border1 className="bg-yellow-600 z-[2]" />
        <Button.Border2 className="bg-yellow-600 z-[1]" />
        <Button.Title className="font-bold text-base">Sign Up</Button.Title>
      </Button>
    </form>
  );
};

export default FormSignup;
