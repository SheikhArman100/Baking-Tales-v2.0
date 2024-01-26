import React from "react";
import OrderItem from "./OrderItem.js";
import useCarts from "@/hooks/useCarts.js";

const OrderList = () => {
  const { data, isPending, error } = useCarts();

  const carts = data?.carts;
  const totalAmount = carts?.reduce((acc, cart) => {
    const amount = cart.product.price * cart.quantity;
    return acc + amount;
  }, 0);

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
    <section className="py-4 px-4 w-full h-fit  flex flex-col  border border-yellow-500 rounded-lg ">
      <div>
        <h6 className="text-base font-semibold text-white text-left">
          Your Order
        </h6>
        <div className="border-b border-accentColor2">
          {carts.map((product) => {
            return (
              <OrderItem
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
        </div>
      </div>
      <div className="py-2 border-b border-accentColor2">
        <h6 className="text-base font-semibold text-white text-left">
          Discount code
        </h6>
        <div className="flex items-center gap-x-2 mt-1">
          <input
            className="w-full bg-transparent border border-gray-200 text-white text-sm font-semibold rounded-lg py-2 px-4"
            placeholder="Add discount code"
          />
          <button className="py-3 px-6 text-sm font-semibold bg-accentColor text-white rounded-lg">
            Apply
          </button>
        </div>
      </div>
      <div className="py-2 border-b border-accentColor2 flex flex-col gap-y-2 text-white">
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Subtotal</p>
          <span className="text-sm font-semibold">${totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Discount</p>
          <span className="text-sm font-semibold">$10</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Delivery Fee</p>
          <span className="text-sm font-semibold">$10</span>
        </div>
        <p className="text-right text-xs font-semibold">*VAT included</p>
      </div>
      <div className="flex justify-between my-2 text-white font-bold">
        <p className="text-base font-semibold">Total</p>
        <span className="text-base font-semibold">${totalAmount-10-10}</span>
      </div>
    </section>
  );
};

export default OrderList;
