"use client";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import useProducts from "@/hooks/useProducts.js";
import { ArrowRight, Plus, Star } from "lucide-react";

const FeaturedItem = () => {
  const { data, isPending, error } = useProducts();


  if (error) {
    return "An error has occurred: ";
  }

  const products = data?.products;
  // console.log(products)

  //filter out featured products list
  const featuredItems =products && Object.values(
    products?.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = product;
      }
      return acc;
    }, {})
  );

  return (
    <section className="w-full min-h-screen flex flex-col    justify-center py-8 md:py-[4rem] px-2 md:px-[4rem]">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-x-1">
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          <p className="text-textColor text-[0.7rem] font-medium">
            All the Featured items
          </p>
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
        </div>

        <h3 className="text-3xl text-accentColor2 font2">Featured</h3>
        <div className="w-full flex justify-end">
          <Button className="hidden md:flex " href="/shop">
            <Button.Border1 />
            <Button.Border2 />
            <Button.Title>See All</Button.Title>
            <Button.Icon>
              <ArrowRight className="stroke-white" />
            </Button.Icon>
          </Button>
        </div>
      </div>
      <div className="w-full flex-1 flex items-center justify-center">
        {isPending?<span className="loading loading-spinner loading-lg text-warning "></span>:error?<p className="text-3xl text-textColor font2">Something went wrong</p>:<div className="p-8 flex flex-wrap justify-center gap-y-4 gap-x-4 md:gap-x-8">
        {featuredItems.map((item, i) => (
          <Card key={i}>
            <Card.CardContainer>
              <Card.CategoryIcon category={item.category} />
              <Card.BgRemoveImage bgRemoveImage={item.images[0]} />
              <Card.CardInfo title={item.title} price={item.price} />
              <Card.CardImage cardImage={item.images[1]} />
              <Card.CardButtonWrapper>
                <Button>
                  <Button.Border1 className="bg-accentColor2 border-[0.1px]  border-stone-500" />
                  <Button.Border2 className="bg-accentColor2 border-[0.1px]   border-gray-500" />
                  <Button.Title className="text-black font-medium">
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
      </div>}

     </div> 
    </section>
  );
};

export default FeaturedItem;
