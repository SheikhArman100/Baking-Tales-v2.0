import Card from "@/Components/Card";
import React from "react";
import categoryImage from "@/public/assets/categoryImage.jpg";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Button from "@/Components/Button";

const Categories = () => {
  return (
    // gap-y is the half of card height +4
    <section className="relative w-full h-screen flex flex-col md:flex-row gap-y-16">
     
       <Image
        src={categoryImage}
        alt="categories section image"
        className="w-full h-[50%] md:h-full md:w-1/2 object-cover"
      />
      <div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card />
      </div>
      <div className="h-full w-full md:w-[50%]  flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-1">
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          <p className="text-textColor text-[0.7rem] font-medium">Categories</p>
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
        </div>
        <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center justify-between gap-y-1 text-textColor ">
          <li className="text-3xl md:text-4xl lg:text-5xl">Cake</li>
          <li className="text-3xl md:text-4xl lg:text-5xl opacity-50">Cup Cake</li>
          <li className="text-3xl md:text-4xl lg:text-5xl opacity-50">Jar Cake</li>
          <li className="text-3xl md:text-4xl lg:text-5xl opacity-50">Chocolate</li>
        </ul>
          <Button>
            <Button.Border1/>
            <Button.Border2/>
            <Button.Title>Shop now</Button.Title>
            <Button.Icon><ArrowRight className="stroke-white"/></Button.Icon>
            
          </Button>
          </div>
      </div>
    </section>
  );
};

export default Categories;
