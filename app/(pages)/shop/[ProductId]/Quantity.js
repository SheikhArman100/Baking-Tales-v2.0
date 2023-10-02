"use client"
import React, { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState(1);
  const decreaseCount = () => {
    if (count > 1) {
    setCount(count - 1);
    // quantityChange(count-1); =>zustand
  };
}
  const increaseCount = () => {
    setCount(count + 1);
    // quantityChange(count+1);
  };
  return (
    <div>
      <h4 className="text-base p-2 text-accentColor2">Quantity :</h4>
      

        <div class="w-full flex items-center justify-center  rounded px-[2rem]">
          <button
            type="button"
            class="h-10 w-20 leading-10  transition hover:opacity-75 border border-white text-white"
            onClick={decreaseCount}
          >
            -
          </button>

          <p
            
            class="h-10 w-20 border-transparent text-center text-base bg-white  font2 flex items-center justify-center font-semibold"
          >{count}</p>

          <button
            type="button"
            class="w-20 h-10 leading-10 text-white border border-white transition hover:opacity-75 "
            onClick={increaseCount}
          >
            +
          </button>
        </div>
      
    </div>
  );
};

export default Quantity;
