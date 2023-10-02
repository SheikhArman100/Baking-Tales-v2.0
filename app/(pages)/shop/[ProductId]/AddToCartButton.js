import Button from "@/Components/Button";
import { Plus } from "lucide-react";
import React from "react";

const AddToCartButton = () => {
  return (
    <Button className="lg:h-16 lg:w-48" >
      <Button.Border1 className="bg-yellow-600"/>
      <Button.Border2 className="bg-yellow-600"/>
      <Button.Title className="font-bold">Add to cart</Button.Title>
      <Button.Icon>
        <Plus className="stroke-white" />
      </Button.Icon>
    </Button>
  );
};

export default AddToCartButton;
