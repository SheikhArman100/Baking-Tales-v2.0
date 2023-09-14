import Button from "@/Components/Button";
import JournalCard from "@/Components/JournalCard";
import SectionTitle from "@/Components/SectionTitle";
import journal1 from "@/public/assets/journal1.jpg"

import { ArrowRight, Star } from "lucide-react";
import React from "react";

const Journal = () => {
  return (
    <section className="w-full h-full py-8 px-2 md:px-[4rem]">
      <div className="flex flex-col items-center">
        <SectionTitle title="Journal"/>

        <h3 className="text-3xl text-accentColor2 font2">Jotted In Our Journal</h3>
        <div className="w-full flex justify-center md:justify-end">
          <Button className="flex ">
            <Button.Border1 />
            <Button.Border2 />
            <Button.Title>View All</Button.Title>
            <Button.Icon>
              <ArrowRight className="stroke-white" />
            </Button.Icon>
          </Button>
        </div>
      </div>
      <div className="w-full h-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
        <JournalCard image={journal1} title="heavenly Cake"/>
        <JournalCard image={journal1} title="heavenly Cake"/>
        <JournalCard image={journal1} title="heavenly Cake"/>
        <JournalCard image={journal1} title="heavenly Cake"/>
        

        
      </div>
    </section>
  );
};

export default Journal;
