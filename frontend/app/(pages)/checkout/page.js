import Button from "@/Components/Button";
import RevealTitle from "@/Components/RevealTitle";
import product1 from "@/public/assets/product1.jpg";
import { Plus } from "lucide-react";
import Image from "next/image";
import FormCheckout from "./FormCheckout";

const Checkout = () => {
  return (
    <article className="w-full min-h-screen  flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem] ">
      <RevealTitle
        phrases={["Checkout Order"]}
        phraseStyle="text-3xl md:text-4xl font-medium text-accentColor"
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-4">
        <FormCheckout/>
        {/* -----------------------------------------------------------------right side------------------------------------------------------------------ */}
        <section className="py-4 px-4 w-full h-fit  flex flex-col  border border-yellow-500 rounded-lg xl:col-span-2">
          <div>
            <h6 className="text-base font-semibold text-white text-left">
              Your Order
            </h6>
            <div className="border-b border-accentColor2">
              <OrderItem
                image={product1}
                title="Love Cake"
                category="Cake"
                price="800"
                flavor="chocolate"
                size="1.5"
                quantity="3"
              />
              <OrderItem
                image={product1}
                title="Love Cake"
                category="Cake"
                price="800"
                flavor="chocolate"
                size="1.5"
                quantity="3"
              />
            </div>
          </div>
          <div className="py-2 border-b border-accentColor2">
            <h6 className="text-base font-semibold text-white text-left">
              Discount code
            </h6>
            <form className="flex items-center gap-x-2 mt-1">
              <input
                className="w-full bg-transparent border border-gray-200 text-white text-sm font-semibold rounded-lg py-2 px-4"
                placeholder="Add discount code"
              />
              <button className="py-3 px-6 text-sm font-semibold bg-accentColor text-white rounded-lg">
                Apply
              </button>
            </form>
          </div>
          <div className="py-2 border-b border-accentColor2 flex flex-col gap-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Subtotal</p>
              <span className="text-sm font-semibold">$800</span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Discount</p>
              <span className="text-sm font-semibold">$10</span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Delivery Fee</p>
              <span className="text-sm font-semibold">$60</span>
            </div>
            <p className="text-right text-xs font-semibold">*VAT included</p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-base font-semibold">Total</p>
            <span className="text-base font-semibold">$1000</span>
          </div>
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
        </section>
      </div>
    </article>
  );
};

const OrderItem = ({
  image,
  title,
  category,
  flavor,
  size,
  quantity,
  price,
}) => {
  return (
    <div className="w-full h-fit flex items-center  gap-x-4  py-4 ">
      <div className="relative w-[3.5rem] md:w-[4.5rem] aspect-square p-1 sm:p-2  border border-accentColor2 rounded-lg">
        <div className="h-full w-full relative">
          <Image
            src={image}
            fill
            sizes="52px"
            className="h-full w-full object-cover rounded-lg"
            alt={title}
          />
        </div>
        <div className="absolute -top-3 -right-2 bg-yellow-500 h-6 w-6  text-xs font-bold  rounded-full flex items-center justify-center text-white ">
          <span>{quantity}</span>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col justify-between">
        <div className="flex flex-col items-start ">
          <h5 className="text-sm font-bold text-white">{title}</h5>
          <p className="text-xs font-semibold text-gray-400">{category}</p>
        </div>
        <div className="mt-1 flex gap-x-2">
          <span className="p-1 text-xs font-semibold border border-gray-500 text-white rounded-lg">
            {flavor}
          </span>
          <span className="py-1 px-2 md:px-3 text-xs font-semibold border border-gray-500 text-white rounded-lg">
            {size}
          </span>
        </div>
      </div>
      <div className="h-full flex flex-col justify-start items-center  ">
        <p className="text-sm font-semiBold text-white ">${price}</p>
      </div>
    </div>
  );
};

export default Checkout;
