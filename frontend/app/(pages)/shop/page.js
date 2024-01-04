"use client"
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import CategoriesList from "@/Components/CategoriesList";
import Filter from "@/Components/Filter";
import FilterMobile from "@/Components/FilterMobile";
import useProducts from "@/hooks/useProducts.js";
import { products } from "@/libs/Data/data";
import { Plus } from "lucide-react";

const Shop = () => {
  const{data,isPending,error}=useProducts()
  return (
    <div className="w-full h-full md:pt-[6rem] px-8 lg:px-[2rem] xl:px-[4rem] text-accentColor2">
      <div className="w-full flex flex-col items-center gap-y-2 mt-4">
        <h2 className=" text-4xl mt-3 w-full text-center text-accentColor">
          Shop All
        </h2>
        <p className="text-center text-sm max-w-2xl">
          Our collection of accessories and home goods is here to add magic to
          your life. Proudly designed in Los Angeles and Woman Owned. We donate
          1% of all sales to environmental non-profits.
        </p>
        <div className="h-full w-[0.1rem] bg-yellow-600" />
      </div>
      <div className="w-full h-[0.1rem] bg-yellow-600 mt-4" />
      {isPending?<div className="w-full h-screen flex item-center justify-center">Loading..........</div>:<div className="mt-6 w-fit pb-8  mx-auto ">
        {/* <div className=" md:py-[4rem] md:px-2 md:w-2/5 md:max-w-xs lg:px-[2rem]">
          <h3 className=" text-base p-2 border-b border-white hidden md:flex">
            Select Category
          </h3>
          <CategoriesList />
          <div className="md:hidden w-full mt-4 sm:px-[2rem] md:px-[5rem] lg:px-[7rem]">
            <FilterMobile />
          </div>
          <Filter />
        </div> */}
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 md:gap-8 ">
          {data.products.map((product, index) => {
            return (
              <Card
                key={index}
                className="h-44 sm:h-52 md:h-56  lg:h-64 xl:h-68 w-full "
              >
                <Card.CardContainer className="">
                  <Card.CategoryIcon
                    category={product.category}
                    className="hidden"
                  />
                  <Card.BgRemoveImage
                    bgRemoveImage={product.images[0]}
                    className=" w-28 h-28 sm:h-32 sm:w-32 md:w-36 md:h-36 lg:h-44 lg:w-44"
                  />
                  <Card.CardInfo
                    title={product.title}
                    price={product.price}
                    className="text-xs sm:text-sm lg:text-base"
                  />
                  <Card.CardImage cardImage={product.images[1]} />
                  <Card.CardButtonWrapper>
                    <Button
                      className="h-10 w-28 md:h-12 md:w-40"
                      href={`/shop/${product.id}`}
                    >
                      <Button.Border1 className="bg-accentColor2 border-[0.1px]  border-stone-500" />
                      <Button.Border2 className="bg-accentColor2 border-[0.1px]   border-gray-500" />
                      <Button.Title className="text-black font-medium text-xs md:text-sm">
                        View Details
                      </Button.Title>
                      <Button.Icon className=" ">
                        <Plus
                          strokeWidth="1"
                          className="stroke-black h-4 w-4 "
                        />
                      </Button.Icon>
                    </Button>
                  </Card.CardButtonWrapper>
                </Card.CardContainer>
              </Card>
            );
          })}
        </div>
      </div>}
    </div>
  );
};

export default Shop;
