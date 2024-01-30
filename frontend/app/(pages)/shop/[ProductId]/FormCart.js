"use client";
import { cartSchema } from "@/libs/zod_schema.js";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AddToWishList from "./AddToWishList.js";
import { zodResolver } from "@hookform/resolvers/zod";
import FlavorSelect from "./FlavorSelect.js";
import Button from "@/Components/Button.js";
import { Plus } from "lucide-react";
import SizeSelect from "./SizeSelect.js";
import Quantity from "./Quantity.js";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate.js";
import { useRouter } from "next/navigation.js";

const FormCart = ({ product, productId }) => {
 const axiosPrivate=useAxiosPrivate()
 const queryClient=useQueryClient()
 const router=useRouter()
  const methods = useForm({
    resolver: zodResolver(cartSchema),
    defaultValues: {
      quantity: 1,
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = methods;



  useEffect(() => {
    if (Object.keys(errors).length > 0 && methods.formState.isSubmitted) {
      toast.error("Provide more info");
    }
  }, [errors, methods.formState.isSubmitted]);

  //add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post("cart", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: async () => {
      reset();
      return queryClient.invalidateQueries(["cart"]);
    },
  });


  const handleCart = (data) => {
    addToCartMutation.mutate({
      productId:productId,
      quantity:data.quantity,
      size:data.size,
      flavor:data.flavor
      
    },{
      onError: (data) => {
        if(data.response.status===409){
          toast.error(data.response.data.message)
        }else{
          router.push("/auth/signin")
        }
        
      },
      onSuccess: (data) => {
        toast.success(data.message);
      },
    })
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleCart)}>
        <FlavorSelect flavors={product.flavors} />
        <SizeSelect sizes={product.sizes} />
        <Quantity />
        <div className=" flex items-center justify-center gap-x-4 mt-4">
          <Button className="lg:h-16 lg:w-48" type="submit">
            <Button.Border1 className="bg-[#fffcc7] border-black z-[1]" />
            <Button.Border2 className="bg-[#fffcc7] border-black z-[2]" />
            <Button.Title className="font-bold text-black">Add to cart</Button.Title>
            <Button.Icon>
              <Plus className="stroke-black" />
            </Button.Icon>
          </Button>
          <AddToWishList productId={productId} />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormCart;
