"use client";
import Button from "@/Components/Button.js";
import Card from "@/Components/Card.js";
import useProducts from "@/hooks/useProducts.js";
import { Plus } from "lucide-react";
import Image from "next/image";
import { AccordionComponent } from "./AccordionComponent";

import FormCart from "./FormCart.js";

const Product = ({ params }) => {
  const { data, isPending, error } = useProducts();
  const products = data?.products;

  const product = products?.find((product) => product.id == params.ProductId);
  const similarProducts = products?.filter(
    (item) => item.category === product.category && item.title !== product.title
  );
  
  return (
    <section className="w-full min-h-screen flex flex-col md:pt-[7rem] px-8 py-8  lg:px-[2rem] xl:px-[4rem]">
      <h2 className=" text-4xl mt-3 w-full text-center text-accentColor">
        Product
      </h2>
      {isPending ? (
        <div className="w-full flex-1 flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-warning"></span>
        </div>
      ) : error ? (
        <div className="w-full flex-1 flex items-center justify-center">
          <p className="text-3xl text-textColor font2">Something went wrong</p>
        </div>
      ) : (
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:gap-x-[2rem] lg:gap-x-[4rem] xl:gap-x-[6rem] md:px-[2rem] lg:px-[4rem] xl:px-[6rem]">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[2/1.7] md:aspect-[2/2.3]">
              <Image
                src={product.images[1]}
                alt={product.title}
                fill
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex mt-2 gap-x-1">
              {[2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative w-full aspect-square md:aspect-[2/1.5] bg-gray-600"
                >
                  <Image
                    fill
                    className="w-full h-full object-cover"
                    src={product.images[i]}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:px-4 xl:px-8">
            <h4 className="text-accentColor2 text-3xl lg:text-4xl text-center w-full flex items-center justify-center font-bold">
              {product.title}
            </h4>
            <span className="w-full flex items-center justify-center text-xl lg:text-2xl font-medium text-white">
              ${product.price}
            </span>
            <AccordionComponent name="Description" desc={product.description} />
            <FormCart product={product} productId={params.ProductId}/>
          </div>
        </div>
      )}

     {similarProducts? <div>
        <h2 className=" text-3xl mt-8 md:mt-16 w-full text-center text-accentColor">
          Similar Products
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4   sm:gap-4 gap-2 mt-5   sm:px-[2rem] md:px-[5rem] lg:px-[7rem]    md:gap-8">
          {similarProducts?.map((item, index) => (
            <Card
              key={index}
              className="h-44 sm:h-52 md:h-56  lg:h-64 xl:h-68 w-full "
            >
              <Card.CardContainer className="">
                <Card.CategoryIcon
                  category={item.category}
                  className="hidden"
                />
                <Card.BgRemoveImage
                  bgRemoveImage={item.images[0]}
                  className=" w-28 h-28 sm:h-32 sm:w-32 md:w-36 md:h-36 lg:h-44 lg:w-44"
                />
                <Card.CardInfo
                  title={item.title}
                  price={item.price}
                  className="text-xs sm:text-sm lg:text-base"
                />
                <Card.CardImage cardImage={item.images[1]} />
                <Card.CardButtonWrapper>
                  <Button
                    className="h-10 w-28 md:h-12 md:w-40"
                    href={`/shop/${item.id}`}
                  >
                    <Button.Border1 className="bg-accentColor2 border-[0.1px]  border-stone-500" />
                    <Button.Border2 className="bg-accentColor2 border-[0.1px]   border-gray-500" />
                    <Button.Title className="text-black font-medium text-xs md:text-sm">
                      View Details
                    </Button.Title>
                    <Button.Icon className=" ">
                      <Plus strokeWidth="1" className="stroke-black h-4 w-4 " />
                    </Button.Icon>
                  </Button>
                </Card.CardButtonWrapper>
              </Card.CardContainer>
            </Card>
          ))}
        </div>
      </div>:null}
    </section>
  );
};

export default Product;
