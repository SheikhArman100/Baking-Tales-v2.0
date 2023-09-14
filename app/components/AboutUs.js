import Image from "next/image";
import React from "react";
import aboutUsImage from "@/public/assets/aboutUsImage.jpg";
import { Star } from "lucide-react";
import AboutUSsText from "@/Components/AnimatedAboutUs";
import AnimatedAboutUs from "@/Components/AnimatedAboutUs";

const AboutUs = () => {
  return (
    <section className="h-[150vh] md:h-screen w-full flex flex-col md:flex-row-reverse  md:justify-center py-4 px-4 md:py-[3rem]">
      <div className="h-[50%] w-full md:h-full md:w-[50%] xl:md:w-[40%]">
        <Image
          src={aboutUsImage}
          alt="about us image"
          className="w-full h-full   rounded"
        />
      </div>
      <div className="relative h-full w-full md:w-[50%] flex items-center justify-center">
        <div className="absolute top-1/2 -translate-y-1/2 left-0  w-full h-[90%] md:h-full md:w-[95%] rounded-sm  border border-orange-950 p-2 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex p-2 bg-bgColor items-center justify-center gap-x-1">
            <Star fill="#eab308" stroke="none" className="h-4 w-4" />
            <p className="text-textColor text-[0.8rem] font-medium">About Us</p>
            <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          </div>
          <div className=" relative flex flex-col items-center justify-center text-center px-2">
           <AnimatedAboutUs paragraph="Here at the Baking Tales we believe that everyone deserves to get the good things in life. So we have created some of the most beautiful & scrumptious cakes, cupcakes, jar cakes and different shapes of chocolate just for you to enjoy. We produce cakes, cupcakes and other baked goods from the finest carefully sourced ingredients" className="text-xl sm:text-2xl lg:text-3xl text-center text-white"/>
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center text-accentColor mt-2 font2">
              <AnimatedAboutUs paragraph="We hope to see you all soon"/>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
