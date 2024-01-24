import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const SizeSelect = ({ sizes }) => {
  const { control } = useFormContext();
  return (
    <div>
      <h4 className="text-base p-2 text-accentColor2">Size (in Pound) :</h4>
      <Controller
        control={control}
        name="size"
        render={({ field }) => (
          <div className="grid grid-cols-3 gap-4 mt-2 px-4">
            {sizes.map((size, index) => {
              return (
                <div key={index} className="">
                  <input
                    type="radio"
                    name="Size"
                    value={size}
                    id={size}
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === size}
                  />

                  <label
                    htmlFor={size}
                    className="block cursor-pointer rounded-lg border-2  bg-white p-4 text-sm font-medium shadow-sm hover:border-yellow-200 peer-checked:border-yellow-500 peer-checked:ring-1 peer-checked:ring-yellow-500 "
                  >
                    <p className="text-black text-sm font-semibold flex items-center justify-center font2">
                      {size}
                    </p>
                  </label>
                </div>
              );
            })}
          </div>
        )}
      />
    </div>
  );
};

export default SizeSelect;
