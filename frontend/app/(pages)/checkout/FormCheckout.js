"use client";
import { Label } from "@/Components/ui/label.jsx";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group.jsx";
import useAxiosPrivate from "@/hooks/useAxiosPrivate.js";
import useUserDetails from "@/hooks/useUserDetails.js";

import { useQuery } from "@tanstack/react-query";
import { AlertTriangle, PlusCircle } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

const FormCheckout = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  //get the previous user info
  const { data, isPending, error } = useUserDetails();

  const userInfo = data?.userInfo;
  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-warning" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className=" py-4 px-4 w-full  flex flex-col lg:col-span-2 xl:col-span-3 text-white">
      <section>
        <h6 className="text-base font-semibold text-white text-left">
          Shipping Details
        </h6>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-2">
          {/* full name */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 ">
            <label className="text-sm font-semibold">Full name</label>

            <input
              type="text"
              {...register("fullName")}
              defaultValue={userInfo?.name || null}
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm text-white bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            {errors.fullName?.message && (
              <p className="text-xs font-semibold text-red-700 ">
                *{errors.fullName?.message}
              </p>
            )}
          </div>
          {/* email */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 md:col-span-1">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              {...register("email")}
              value={userInfo?.email }
              
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            {errors.email?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.email?.message}
              </p>
            )}
          </div>
          {/* Phone number */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 md:col-span-1">
            <label className="text-sm font-semibold">Phone number</label>
            <input
              type="tel"
              {...register("phoneNumber")}
              defaultValue={userInfo?.phoneNumber || null}
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            {errors.phoneNumber?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.phoneNumber?.message}
              </p>
            )}
          </div>
          {/* Shipping Address */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 ">
            <label className="text-sm font-semibold">Shipping Address</label>
            <input
              type="text"
              {...register("address")}
              defaultValue={userInfo?.details?.address || null}
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            {errors.address?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.address?.message}
              </p>
            )}
          </div>
          {/* City */}
          <div className="flex flex-col items-start gap-y-2 col-span-1">
            <label className="text-sm font-semibold">City</label>
            <input
              type="text"
              {...register("city")}
              defaultValue={userInfo?.details?.city || null}
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            {errors.city?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.city?.message}
              </p>
            )}
          </div>
          {/* House Details */}
          <div className="flex flex-col items-start gap-y-2 col-span-1">
            <label className="text-sm font-semibold">House Details</label>
            <input
              type="text"
              {...register("houseDetails")}
              defaultValue={userInfo?.details?.houseDetails || null}
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            {errors.houseDetails?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.houseDetails?.message}
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="mt-4">
        <Label className="text-base font-semibold text-white text-left">
          Payment Method
        </Label>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              className="grid grid-cols-2 gap-x-4 mt-2"
              onValueChange={onChange}
              defaultValue={value}
              
            >
              <div>
                <RadioGroupItem
                  value="Cash on"
                  id="cash on delivery"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="cash on delivery"
                  className="flex flex-col items-center justify-between rounded-md border-4 border-transparent bg-white text-black font2 p-4  peer-data-[state=checked]:border-yellow-500 peer-data-[state=checked]:bg-white [&:has([data-state=checked])]:border-yellow-500"
                >
                  Cash on Delivery
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="Payment Gateway"
                  id="Payment gateway"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="Payment gateway"
                  className="flex flex-col items-center justify-between rounded-md border-4 border-transparent bg-white text-black font2 p-4  peer-data-[state=checked]:border-yellow-500 peer-data-[state=checked]:bg-white [&:has([data-state=checked])]:border-yellow-500"
                >
                  Payment Gateway
                </Label>
              </div>
            </RadioGroup>
          )}
        />

        {errors.paymentMethod?.message && (
          <p className="text-xs font-semibold text-red-700 mt-1">
            *{errors.paymentMethod?.message}
          </p>
        )}
      </section>

      <section>
        <h6 className="text-base font-semibold text-white text-left mt-3">
          More Details
        </h6>
        <div className="flex items-center gap-x-2 mt-2">
          <AlertTriangle size={20} className="stroke-red-500" />
          <p className="text-sm font-semibold text-gray-300">
            Delivery charge $120
          </p>
        </div>
      </section>
      <section className="mt-3 flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <PlusCircle size={24} className="stroke-yellow-500" />
          <p className="text-yellow-500 text-sm font-semibold">Add a note</p>
        </div>
        <div className="flex items-center gap-x-2">
          <PlusCircle size={24} className="stroke-yellow-500" />
          <p className="text-yellow-500 text-sm font-semibold">
            Add a gift box and card (pay $40)
          </p>
        </div>
      </section>
    </div>
  );
};

export default FormCheckout;
