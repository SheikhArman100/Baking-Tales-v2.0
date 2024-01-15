
import { cn } from "@/libs/utils";
import React from "react";

const FlavorSelect = ({flavors}) => {
  return (
    <div>
      <h4 className="text-base p-2 text-accentColor2 bg-ye">Flavor :</h4>
      <form className="flex items-center justify-center gap-x-3 mt-2 ">
        {flavors.map((flavor, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-y-1">
              <div className="flex items-center justify-center">
                <input
                type="radio"
                name="FlavorOption"
                value={flavor}
                id={flavor}
                className="peer hidden"
                
              />

              <label
                for={flavor}
                className={cn("block h-8 w-8 cursor-pointer rounded bg-red-500 shadow-sm peer-checked:ring-2 peer-checked:ring-red-500 peer-checked:ring-offset-2",flavor=="chocolate"&&"bg-yellow-950 peer-checked:ring-yellow-950",flavor=="vanilla"&&"bg-white peer-checked:ring-white")}
              >
                
              </label>
              </div>
              <p className="text-white">{flavor}</p>
              
            </div>
            
          );
        })}
      </form>
    </div>
  );
};

export default FlavorSelect;
