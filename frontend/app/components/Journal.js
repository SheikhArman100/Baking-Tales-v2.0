import Button from "@/Components/Button";
import JournalCard from "@/Components/JournalCard";
import SectionTitle from "@/Components/SectionTitle";

import { ArrowRight, Star } from "lucide-react";
import React from "react";

const Journal = () => {
  return (
    <section className="w-full h-full py-8 px-2 md:px-[4rem]">
      <div className="flex flex-col items-center">
        <SectionTitle title="Journal" />

        <h3 className="text-3xl text-accentColor2 font2">
          Jotted In Our Journal
        </h3>
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
        <JournalCard
          image="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="heavenly Cake"
        />
        <JournalCard
          image="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="heavenly Cake"
        />
        <JournalCard
          image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="heavenly Cake"
        />
        <JournalCard
          image="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          title="heavenly Cake"
        />
      </div>
    </section>
  );
};

export default Journal;
