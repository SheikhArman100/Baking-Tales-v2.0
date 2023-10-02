import Card from "@/Components/Card";
import React from "react";


import { ArrowRight, Plus, Star } from "lucide-react";
import Button from "@/Components/Button";
import LocalImage from "@/Components/LocalImage.js";
import cakeIcon from "@/public/assets/cakeIcon.svg"
import cakeBgRemove from "@/public/assets/cake1_bgRemove.png";
import cake1 from "@/public/assets/cake1.jpg"
const Categories = () => {
  return (
    // gap-y is the half of card height +4
    <section className="relative w-full h-screen flex flex-col md:flex-row gap-y-16">
      <div className="relative w-full h-[50%] md:h-full bg-blue-400 md:w-1/2">
        <LocalImage
        src="/assets/categoryImage.jpg"
        alt="categories section image"
        className="object-cover"
      />

      </div>
     
       
      <div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card>
            <Card.CardContainer>
              <Card.CategoryIcon  />
              <Card.BgRemoveImage bgRemoveImage={cakeBgRemove} />
              <Card.CardInfo title="Birthday Cake" price="99.9" />
              <Card.CardImage cardImage={cake1}/>
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
