import RevealTitle from "@/Components/RevealTitle";
import StatusChecker from "@/Components/StatusChecker.js";
import ShowCart from "./ShowCart.js";

const Cart = () => {
  return (
    <StatusChecker>
      <article className="w-full min-h-screen  flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem]">
        <RevealTitle
          phrases={["Your Shopping Cart"]}
          phraseStyle="text-3xl md:text-4xl font-medium text-accentColor"
        />
        <ShowCart />
      </article>
    </StatusChecker>
  );
};

export default Cart;
