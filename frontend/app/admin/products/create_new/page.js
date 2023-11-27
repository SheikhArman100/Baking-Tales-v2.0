import { MoreVertical } from "lucide-react";
import FormNewProduct from "./FormNewProduct";

const CreateNewProduct = () => {
  return (
    <article className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Create New Product</h3>
        <MoreVertical size={24} className="stroke-gray-300" />
      </div>
     <FormNewProduct/>
    </article>
  );
};

export default CreateNewProduct;
