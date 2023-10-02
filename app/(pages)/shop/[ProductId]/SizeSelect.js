import { sizes } from "@/libs/Data/data";
import React from "react";

const SizeSelect = () => {
  return (
    <div>
      <h4 className="text-base p-2 text-accentColor2">Size (in Pound) :</h4>

      <form className="grid grid-cols-3 gap-4 mt-2 px-4">
        {sizes.map((size, index) => {
          return (
            <div key={index} className="">
              <input
                type="radio"
                name="Sizes"
                value={size}
                id={size}
                className="peer hidden [&:checked_+_label_svg]:block"
                checked
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
      </form>
    </div>
  );
};

export default SizeSelect;
