import { cn } from "@/libs/utils";
import { Controller, useFormContext } from "react-hook-form";

const FlavorSelect = ({ flavors }) => {
  const { control } = useFormContext();
  return (
    <div>
      <h4 className="text-base p-2 text-accentColor2 bg-ye">Flavor :</h4>
      <Controller
        control={control}
        name="flavor"
        render={({ field }) => (
          <div className="flex items-center justify-center gap-x-3 mt-2">
            {flavors.map((flavor, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-y-1">
                  <div className="flex items-center justify-center">
                    <input
                      type="radio"
                      name="flavor"
                      value={flavor}
                      id={flavor}
                      className="peer hidden"
                      onChange={(e) => field.onChange(e.target.value)}
                      checked={field.value === flavor}
                    />

                    <label
                      htmlFor={flavor}
                      className={cn(
                        "block h-8 w-8 cursor-pointer rounded bg-red-500 shadow-sm peer-checked:ring-4 peer-checked:ring-red-500 peer-checked:ring-offset-2",
                        flavor === "chocolate" &&
                          "bg-yellow-950 peer-checked:ring-yellow-950",
                        flavor === "vanilla" &&
                          "bg-white peer-checked:ring-gray-500"
                      )}
                    ></label>
                  </div>
                  <p className="text-white">{flavor}</p>
                </div>
              );
            })}
          </div>
        )}
      />
    </div>
  );
};

export default FlavorSelect;
