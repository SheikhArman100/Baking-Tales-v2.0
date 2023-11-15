import Button from "@/Components/Button";
import DeleteButton from "@/Components/DeleteButton";
import RevealTitle from "@/Components/RevealTitle";
import product1 from "@/public/assets/product1.jpg";
import { Plus } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  return (
    <article className="w-full min-h-screen  flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem]">
      <RevealTitle
        phrases={["Your Shopping Cart"]}
        phraseStyle="text-3xl md:text-4xl font-medium text-accentColor"
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-2  mt-4 md:px-[4rem] lg:px-[6rem] xl:px-[10rem]">
        <section className="flex flex-col gap-y-3  rounded-lg px-2 md:col-span-2">
          <CartItem
            image={product1}
            title="Love Cake"
            category="Cake"
            price="800"
            flavor="chocolate"
            size="1.5"
            quantity="3"
          />
          <CartItem
            image={product1}
            title="Love Cake"
            category="Cake"
            price="800"
            flavor="chocolate"
            size="1.5"
            quantity="3"
          />
          <CartItem
            image={product1}
            title="Love Cake"
            category="Cake"
            price="800"
            flavor="chocolate"
            size="1.5"
            quantity="3"
          />
          <CartItem
            image={product1}
            title="Love Cake"
            category="Cake"
            price="800"
            flavor="chocolate"
            size="1.5"
            quantity="3"
          />
        </section>
        <section className="px-4 py-4 h-fit rounded-lg border border-accentColor text-white">
          <div className="pb-4 border-b border-accentColor2 flex flex-col gap-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Subtotal</p>
              <span className="text-sm font-medium">$800</span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Discount</p>
              <span className="text-sm font-medium">$10</span>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-base font-semibold">Total</p>
            <span className="text-base font-medium">$810</span>
          </div>
          <Button className="mt-6 w-full ">
            <Button.Border1 className="bg-yellow-600" />
            <Button.Border2 className="bg-yellow-600" />
            <Button.Title className="text-base font-bold">
              Add to cart
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

const CartItem = ({
  image,
  title,
  category,
  flavor,
  size,
  quantity,
  price,
}) => {
  return (
    <div className="w-full h-fit   flex items-center  gap-x-4  py-4 border-b border-white last:border-none">
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
      <div className="h-full flex flex-col justify-between items-center  ">
        <p className="text-sm font-semiBold text-white">${price}</p>
        <div className="flex gap-x-1">
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default Cart;
