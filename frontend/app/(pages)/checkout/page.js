"use client";
import Button from "@/Components/Button";
import RevealTitle from "@/Components/RevealTitle";
import StatusChecker from "@/Components/StatusChecker.js";
import useAxiosPrivate from "@/hooks/useAxiosPrivate.js";
import useCarts from "@/hooks/useCarts.js";
import { checkoutSchema } from "@/libs/zod_schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation.js";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FormCheckout from "./FormCheckout";
import OrderList from "./OrderList.js";

const Checkout = () => {
  const axiosPrivate = useAxiosPrivate();
  const { data } = useCarts();
  const router = useRouter();

  const carts = data?.carts;
  //form setup
  const methods = useForm({
    resolver: zodResolver(checkoutSchema),
  });
  const { handleSubmit, reset } = methods;

  //Create order mutation
  const createOrderMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post("order", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: (data) => {
      reset();
      // queryClient.invalidateQueries(["order"]);
      data.url ? router.push(data.url) : router.push("/");
    },
  });

  const handleCheckoutForm = (data) => {
    createOrderMutation.mutate(
      {
        products: carts,
        name: data.fullName,
        phoneNumber: data.phoneNumber,
        details: {
          address: data.address,
          city: data.city,
          houseDetails: data.houseDetails,
        },
        paymentMethod: data.paymentMethod,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          
        },
        onError: (data) => {
          toast.error(data.response.data.message);
        },
      }
    );
  };

  return (
    <StatusChecker>
      <article className="w-full min-h-screen  flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem] ">
        <RevealTitle
          phrases={["Checkout Order"]}
          phraseStyle="text-3xl md:text-4xl font-medium text-accentColor"
        />
        <FormProvider {...methods}>
          <form
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-4"
            onSubmit={handleSubmit(handleCheckoutForm)}
            autoComplete="off"
          >
            <FormCheckout />
            {/* -----------------------------------------------------------------right side------------------------------------------------------------------ */}
            <div className="w-full xl:col-span-2">
              <OrderList />
              <Button className="mt-3 w-full ">
                <Button.Border1 className="bg-yellow-600" />
                <Button.Border2 className="bg-yellow-600" />
                <Button.Title className="text-base font-bold">
                  Place order
                </Button.Title>
                <Button.Icon>
                  <Plus size={28} className="stroke-white" />
                </Button.Icon>
              </Button>
            </div>
          </form>
        </FormProvider>
      </article>
    </StatusChecker>
  );
};

export default Checkout;
