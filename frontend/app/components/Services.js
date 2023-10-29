"use client";
import SectionTitle from "@/Components/SectionTitle";
import { iconAnimation } from "@/libs/animation/services.animation";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <div className="h-full w-full  text-white flex flex-col items-center px-6 md:px-[5rem] py-8 bg-black ">
      <SectionTitle title="Services" />
      <div className="w-full grid grid-cols-1 justify-items-center  lg:grid-cols-3 py-4 gap-y-3">
        {/* ----------------------------------service-1----------------------- */}
        <div ref={containerRef} className="flex flex-col items-center px-4  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cake h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500"
          >
            <motion.path
              initial={{  pathLength: 0 }}
              animate={{
                
                pathLength: isInView ? 1 : 0,
              }}
              transition={{ duration: 3, ease: "linear" }}
              
              d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8 M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1 M2 21h20 M7 8v2 M12 8v2 M17 8v2 M7 4h.01 M12 4h.01 M17 4h.01"
            />
          </svg>
          <div className="flex flex-col items-center p-2">
            <h4 className="text-xl font-bold text-accentColor text-center">
              Home Made Food
            </h4>
            <p className="text-sm text-center">
              Everything in the cake is hand crafted by us
            </p>
          </div>
        </div>
        <div className="h-[0.01rem] w-32 md:hidden md:w-[0.01rem] md:h-24 bg-gray-600 flex items-center  justify-center " />

        {/* -------------------------------service-2------------------------------------ */}
        <div className="flex flex-col items-center">
          <svg
            strokeWidth="1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-truck h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500"
          >
            <motion.path
              initial={{  pathLength: 0 }}
              animate={{
                
                pathLength: isInView ? 1 : 0,
              }}
              transition={{ duration: 3, ease: "linear" }}
             
              d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11 M14 9h4l4 4v4c0 .6-.4 1-1 1h-2 M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M15 18H9 M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />
          </svg>
          <div className="flex flex-col items-center p-2">
            <h4 className="text-xl font-bold text-accentColor text-center">
              Home Delivery
            </h4>
            <p className="text-sm text-center">
              We ensure quick and reasonable home delivery
            </p>
          </div>
        </div>
        <div className="h-[0.01rem] w-32 md:hidden md:w-[0.01rem] md:h-24 bg-gray-600" />
        {/* ---------------------------------------service-3------------------------------ */}
        <div className="flex flex-col items-center">
          <svg
            strokeWidth="1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-gift h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500"
          >
            <motion.path
              initial={{  pathLength: 0 }}
              animate={{
                
                pathLength: isInView ? 1 : 0,
              }}
              transition={{ duration: 3, ease: "linear" }}
              
              d="M20 12L20 22L4 22L4 12 M2 7h20v5H2Z M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
            />
          </svg>
          <div className="flex flex-col items-center p-2">
            <h4 className="text-xl font-bold text-accentColor text-center">
              Gift
            </h4>
            <p className="text-sm text-center">
              We decorate your product with letter, box and chocolate
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
