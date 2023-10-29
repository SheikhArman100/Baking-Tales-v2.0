import RevealTitle from '@/Components/RevealTitle';
import React from 'react'

const Cart = () => {
  return (
    <article className="w-full min-h-screen flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem]">
      <RevealTitle
        phrases={["Your Shopping Cart"]}
        phraseStyle="text-4xl font-medium text-accentColor"
      />

     
    </article>
  );
}

export default Cart