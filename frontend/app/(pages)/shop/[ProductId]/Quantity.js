"use client";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Quantity = () => {
  const { register,control } = useFormContext();
  return (
    <div>
      <h4 className="text-base p-2 text-accentColor2">Quantity :</h4>
      <Controller
        control={control}
        name="quantity"
        render={({ field }) => (
          <div class="w-full flex items-center justify-center  rounded px-[2rem]">
            <button
              type="button"
              className="h-10 w-20 leading-10  transition hover:opacity-75 border border-white text-white"
              onClick={() => field.onChange(Math.max(1, field.value - 1))}
              disabled={field.value <= 1}
            >
              -
            </button>

            <input type="number"  {...field} value={field.value} onChange={(e)=>field.onChange(e.target.value)} className="h-10 w-20 border-transparent text-center text-base bg-white  font2 flex items-center justify-center font-semibold"/>
              
            

            <button
              type="button"
              className="w-20 h-10 leading-10 text-white border border-white transition hover:opacity-75 "
              onClick={() =>field.onChange(Math.min(10,field.value + 1))}
              disabled={field.value>=10}
            >
              +
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Quantity;
