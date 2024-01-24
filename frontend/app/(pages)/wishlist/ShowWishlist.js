"use client";
import Button from "@/Components/Button.js";
import Card from "@/Components/Card.js";
import useWishlist from "@/hooks/useWishlist.js";
import { Plus } from "lucide-react";

const ShowWishlist = () => {
  const {data,isPending}=useWishlist()
  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-warning" />
      </div>
    );
  }
  

  return (
    <div className="w-full  flex items-center justify-center ">
    <div className="w-full grid place-items-center grid-cols-2 sm:grid-cols-3   mt-6 md:mt-8 lg:mt-12 sm:px-[2rem] md:px-[5rem] lg:px-[7rem]  sm:gap-4 gap-2  md:gap-8">
      {data?.wishlist.map((product) => {
        return (
          <Card
            key={product.id}
            className="h-44 sm:h-52 md:h-56  lg:h-64 xl:h-68 w-full "
          >
            <Card.CardContainer className="">
              <Card.CategoryIcon
                category={product.product.category}
                className="hidden"
              />
              <Card.BgRemoveImage
                bgRemoveImage={product.product.images[0]}
                className=" w-28 h-28 sm:h-32 sm:w-32 md:w-36 md:h-36 lg:h-44 lg:w-44"
              />
              <Card.CardInfo
                title={product.product.title}
                price={product.product.price}
                className="text-xs sm:text-sm lg:text-base"
              />
              <Card.CardImage cardImage={product.product.images[1]} />
              <Card.CardButtonWrapper>
                <Button
                  className="h-10 w-28 md:h-12 md:w-40"
                  href={`/shop/${product.productId}`}
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
        );
      })}
    </div>
    </div>
  );
};

export default ShowWishlist;
