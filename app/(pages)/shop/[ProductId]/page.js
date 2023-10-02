import { products } from "@/libs/Data/data";
import Image from "next/image";
import React from "react";
import { AccordionComponent } from "./AccordionComponent";
import SizeSelect from "./SizeSelect";
import FlavorSelect from "./FlavorSelect";
import Quantity from "./Quantity";
import AddToCartButton from "./AddToCartButton";

const Product = ({ params }) => {
  const product = products.find((product) => product.id == params.ProductId);
  // console.log(product)
  return (
    <section className="md:pt-[7rem] px-8 py-8  lg:px-[2rem] xl:px-[4rem]">
      <h2 className=" text-4xl mt-3 w-full text-center text-accentColor">
        Product
      </h2>
      <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:gap-x-[2rem] lg:gap-x-[4rem] xl:gap-x-[6rem] md:px-[2rem] lg:px-[4rem] xl:px-[6rem]">
        <div className="md:w-1/2">
          <div className="relative w-full aspect-[2/1.7] md:aspect-[2/2.3]">
            <Image
              src={product.img}
              alt={product.title}
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex mt-2 gap-x-1">
            {[...Array(4).keys()].map((i) => (
              <div key={i} className="w-full aspect-square md:aspect-[2/1.5] bg-gray-600" />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:px-4 xl:px-8">
          <h4 className="text-accentColor2 text-3xl lg:text-4xl text-center w-full flex items-center justify-center font-bold">{product.title}</h4>
          <span className="w-full flex items-center justify-center text-xl lg:text-2xl font-medium text-white">${product.price}</span>
          <AccordionComponent name="Description" desc={product.desc}/>
          <FlavorSelect/>
          <SizeSelect/>
          <Quantity/>
          <div className="flex items-center justify-center mt-4">

          <AddToCartButton/>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" text-3xl mt-8 md:mt-16 w-full text-center text-accentColor">
        Similar Products
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-4   sm:gap-4 gap-2 mt-5   sm:px-[2rem] md:px-[5rem] lg:px-[7rem]    md:gap-8">
        {[...Array(4).keys()].map((i) => (
              <div key={i} className="h-44 sm:h-52 md:h-56  lg:h-64 xl:h-68 w-full bg-gray-600" />
            ))}
      </div>
      </div>
    </section>
  );
};

export default Product;
