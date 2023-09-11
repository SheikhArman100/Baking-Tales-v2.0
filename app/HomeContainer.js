"use client"
import Button from "@/Components/Button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import image1 from "../public/assets/pexels-carsten-vollrath-11543451.jpg";
import image2 from "../public/assets/pexels-jonathan-borba-9816191.jpg";

const HomeContainer = ({children}) => {
  
  const heroRef=useRef(null)
  const {scrollYProgress} =useScroll({
    target:heroRef,
    offset:["start start","end end"] 
  })

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) 
  const scale=useTransform(scrollYProgressSpring,[0,1],[1,12])
 
  return (
    <section className="">
      {/* hero section starts */}
      <div ref={heroRef} className="relative h-[200vh] z-10 overflow-clip">
      
      <motion.div style={{
        scale
      }} className="relative h-screen  mask [mask-position:center_center,center_top_80%] md:[mask-position:center_center,center_top_30%] bg-bgColor  w-full flex flex-col md:flex-row md:items-start md:justify-between items-center px-6 md:px-[5rem] py-8" >
        <div className="flex flex-col items-center md:items-start md:gap-y-3 md:mt-[4rem]">
          <div className="flex items-center justify-center gap-x-1">
            <Star fill="#eab308" stroke="none" className="h-4 w-4" />
            <p className="text-textColor text-[0.7rem] font-medium">
              HOME MADE
            </p>
            <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          </div>
          <p className="text-textColor text-3xl md:text-4xl  md:text-left lg:text-5xl xl:text-6xl font-semibold text-center">
            We are <br className="hidden md:block"/> baking for <br /> your pleasure
          </p>
          <Button name="Shop now" />
        </div>
        <div className="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[45%] md:top-[40%] md:-translate-y-[50%] flex flex-col  items-center justify-center ">
          <svg
            
            viewBox="15 -10 228 40"
            
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible h-full"
          >
            <path
            id="curve"
              d="M1 121C5.66667 82.6667 37.7446 -1.42649 129 1.00002C222.871 3.49607 253.887 83.1122 257 121"
              fill="transparent"
            />
            <text>
              <textPath id="text-path" href="#curve" startOffset="0" className="fill-accentColor text-4xl font-bold">
                Happiness Starts Here
              </textPath>
            </text>
          </svg>

          <div  className="w-48  aspect-[4/7] rounded-full  "/>
            
        </div>
        <div className="hidden md:flex flex-col items-center gap-y-2 md:mt-[4rem] mr-4">
          <p className="text-textColor text-center text-sm font-semibold">Enjoy your <br/> indulgent afternoon tea <br/> in te comfort of your home <br/> wih the delicious cake</p>
          <div className="h-32 w-28  rounded-t-lg rounded-bl-lg">
            <Image src={image2} alt="home image 2" className="object-cover w-full h-full rounded-t-lg rounded-bl-lg "/>

          </div>

        </div>
      </motion.div>
      </div>
    
      {/* hero section ends */}
      <div   className="h-[200vh] mt-[-200vh] relative   ">
        <Image src={image1} alt="hero image 1" priority className={`w-full h-full  object-cover `}/>
        <div className="h-screen w-full absolute top-[50%] left-0 bg-black opacity-50"/>
        <div className="h-screen w-full absolute top-[50%] left-0  text-white flex flex-col items-center px-6 md:px-[5rem] py-8  ">
          <h2 className="text-3xl">Our Services</h2>
        </div>
      </div>
     {children}

      
     
    
    </section>
  );
};

export default HomeContainer;
