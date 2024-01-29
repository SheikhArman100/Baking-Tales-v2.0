"use client";
import Button from "@/Components/Button.js";
import useCarts from "@/hooks/useCarts.js";
import { Plus } from "lucide-react";
import CartItem from "./CartItem.js";

const ShowCart = () => {
  const { data, isPending, error } = useCarts();

  const carts = data?.carts;
  const totalAmount=carts?.reduce((acc,cart)=>{
    const amount=cart.product.price*cart.quantity
    return acc + amount
  },0)

  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-warning" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Something went wrong</p>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-2  mt-4 md:px-[4rem] lg:px-[6rem] xl:px-[10rem]">
      <section className="flex flex-col gap-y-3  rounded-lg px-2 md:col-span-2">
        {carts.map((product) => {
          return (
            <CartItem
              key={product.id}
              cartId={product.id}
              image={product.product.images[1]}
              title={product.product.title}
              category={product.product.category}
              price={product.product.price}
              flavor={product.flavor}
              size={product.size}
              quantity={product.quantity}
            />
          );
        })}
      </section>
      <section className="px-4 py-4 h-fit rounded-lg border border-accentColor text-white font2">
        <div className="pb-4 border-b border-accentColor2 flex flex-col gap-y-2">
          {carts.map((cart) => {
            return (
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{cart.product.title}</p>
                <span className="text-sm font-medium">{cart.quantity}X${cart.product.price}</span>
              </div>
            );
          })}
          <div className="flex justify-between">
            <p className="text-sm font-semibold">Subtotal</p>
            <span className="text-sm font-medium">${totalAmount}</span>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-semibold">Discount</p>
            <span className="text-sm font-medium">$10</span>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-base font-semibold">Total</p>
          <span className="text-base font-medium">${totalAmount-10}</span>
        </div>
        <Button className="mt-6 w-full " href="/checkout">
          <Button.Border1 className="bg-yellow-600" />
          <Button.Border2 className="bg-yellow-600" />
          <Button.Title className="text-base font-bold">
            Add to checkout
          </Button.Title>
          <Button.Icon>
            <Plus size={28} className="stroke-white" />
          </Button.Icon>
        </Button>
      </section>
    </div>
  );
};

export default ShowCart;
