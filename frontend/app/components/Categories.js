"use client";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import { ArrowRight, Plus, Star } from "lucide-react";
import { useState } from "react";

import useProducts from "@/hooks/useProducts.js";
import CategoryImage from "@/public/assets/categoryImage.jpg";
import Image from "next/image.js";
const Categories = () => {
  const { data, isPending, error } = useProducts();
  const [filterCat,setFilterCat]=useState("cake")
 

  const products = data?.products;
  // console.log(products)

  //filter out featured products list
  const featuredItems = products && Object.values(
    products?.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = product;
      }
      return acc;
    }, {})
  );
  console.log(featuredItems)
  
  const filteredProducts = featuredItems?.filter(
      (item) => item.category === filterCat
    );
  console.log(filteredProducts)
 
  return (
    <article className="relative w-full h-screen">
      {isPending?<section className="w-full h-full flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-warning"></span>
      </section>:error?<section className="w-full h-full flex items-center justify-center">
        <p className="text-3xl text-textColor font2">Something went wrong!</p>
      </section>:<section className="w-full h-full flex flex-col md:flex-row gap-y-16">
      <div className="relative w-full h-[50%] md:h-full bg-blue-400 md:w-1/2">
        <Image
          src={CategoryImage}
          alt="categories section image"
          className="object-cover w-full h-full"
          priority
          placeholder="blur"
        />
      </div>

      <div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card>
          <Card.CardContainer>
            <Card.CategoryIcon />
            <Card.BgRemoveImage bgRemoveImage={filteredProducts[0].images[0]} />
            <Card.CardInfo
              title={filteredProducts[0].title}
              price={filteredProducts[0].price}
            />
            <Card.CardImage cardImage={filteredProducts[0].images[1]} />
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
      </div>
      <div className=" w-full md:w-[50%]  flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-1">
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          <p className="text-textColor text-[0.7rem] font-medium">Categories</p>
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-between gap-y-1 text-textColor ">
            <button className={`text-3xl md:text-4xl lg:text-5xl ${filterCat==="cake"?"opacity-100":"opacity-50"}`} onClick={()=>setFilterCat("cake")}>Cake</button>
            <button className={`text-3xl md:text-4xl lg:text-5xl ${filterCat==="cupcake"?"opacity-100":"opacity-50"}`}   onClick={()=>setFilterCat("cupcake")}>
              Cup Cake
            </button>
            <button className={`text-3xl md:text-4xl lg:text-5xl ${filterCat==="jarcake"?"opacity-100":"opacity-50"}`}   onClick={()=>setFilterCat("jarcake")}>
              Jar Cake
            </button>
          </div>
          <Button href="/shop">
            <Button.Border1 />
            <Button.Border2 />
            <Button.Title>Shop now</Button.Title>
            <Button.Icon>
              <ArrowRight className="stroke-white" />
            </Button.Icon>
          </Button>
        </div>
      </div>
    </section>}

    </article>
    
  );
};

export default Categories;
