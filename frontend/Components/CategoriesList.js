import { categories } from "@/libs/Data/data";

const CategoriesList = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2 mt-3 ">
      
      {categories.map((category, index) => {
        return (
          <div key={index}>
            
            <input
              type="radio"
              name="CategoryOption"
              value={category}
              id={category}
              className="peer hidden"
              checked
            />

            <label
              for={category}
              className="flex cursor-pointer items-center justify-center rounded-md border border-yellow-600  px-4 py-2  hover:border-yellow-500 hover:bg-yellow-500 peer-checked:border-yellow-600 peer-checked:bg-yellow-600 peer-checked:text-white"
            >
              <p className="text-sm font-medium">{category}</p>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
// py-2 px-4 border border-yellow-500 rounded-full text-center
