import Button from "@/Components/Button";
import Card from "@/Components/Card";
import { ArrowRight, Star } from "lucide-react";
import React from "react";

const FeaturedItem = () => {
  return (
    <section className="w-full h-full py-8 px-2 md:px-[4rem]">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-x-1">
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          <p className="text-textColor text-[0.7rem] font-medium">All the Featured items</p>
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
        </div>
        
          <h3 className="text-3xl text-accentColor2 font2">Featured</h3>
          <div className="w-full flex justify-end">
            <Button className="hidden md:flex ">
            <Button.Border1 />
            <Button.Border2 />
            <Button.Title>See All</Button.Title>
            <Button.Icon>
              <ArrowRight className="stroke-white" />
            </Button.Icon>
          </Button>
          </div>
       
      </div>
      <div className="p-8 flex flex-wrap justify-center gap-y-4 gap-x-4 md:gap-x-8">
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </section>
  );
};

export default FeaturedItem;
