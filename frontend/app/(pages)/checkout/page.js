"use client";
import Button from "@/Components/Button";
import RevealTitle from "@/Components/RevealTitle";
import product1 from "@/public/assets/product1.jpg";
import { Plus } from "lucide-react";
import Image from "next/image";
import FormCheckout from "./FormCheckout";
import OrderList from "./OrderList.js";
import StatusChecker from "@/Components/StatusChecker.js";
import { FormProvider } from "react-hook-form";

const Checkout = () => {
  return (
    <StatusChecker>
    <article className="w-full min-h-screen  flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem] ">
      <RevealTitle
        phrases={["Checkout Order"]}
        phraseStyle="text-3xl md:text-4xl font-medium text-accentColor"
      />
      <FormProvider>
      <form className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-4">
        <FormCheckout />
        {/* -----------------------------------------------------------------right side------------------------------------------------------------------ */}
        <div className="w-full xl:col-span-2">
          <OrderList/>
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
