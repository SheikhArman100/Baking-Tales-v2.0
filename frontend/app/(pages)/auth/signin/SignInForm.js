"use client"
import Button from '@/Components/Button';
import { AtSign, EyeIcon, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from '@/libs/zod_schema';

const SignInForm = () => {
  const [showPassword,setShowPassword]=useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });
 

  const handleSignin=()=>{

    

  }
  return (
    <form
      onSubmit={handleSubmit()}
      className="w-full  flex flex-col items-center gap-y-4 mt-8"
    >
      <div className="w-full flex flex-col gap-y-2">
        <label className="text-sm font-semibold">Email</label>
        <div className="relative">
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
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
      <div className="w-full flex flex-col gap-y-2">
        <label className="text-sm font-semibold">Password</label>
        <div className="relative">
          <input
            type={showPassword?"text":"password"}
            {...register("password")}
            className="w-full rounded-md border  border-white pe-10 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0 "
          />

          <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 ">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword? (
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
      <Button className="w-[80%] h-[3.5rem] mt-6">
        <Button.Border1 className="bg-yellow-600 z-[2]" />
        <Button.Border2 className="bg-yellow-600 z-[1]" />
        <Button.Title className="font-bold text-base">Sign in</Button.Title>
      </Button>
    </form>
  );
}

export default SignInForm