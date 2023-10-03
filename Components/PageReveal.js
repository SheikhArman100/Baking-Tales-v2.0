"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PageRevealAnimation,
  PageRevealStaggered,
} from "@/libs/animation/pagereveal.animation";
import Header from "./header/Header";

const PageReveal = ({ children }) => {
  return (
    <div className="w-full min-h-screen  relative flex flex-col bg-black ">
      <motion.div
        variants={PageRevealAnimation}
        initial="initial"
        animate="animate"
        className="w-full min-h-screen bg-bgColor origin-top"
      >
        <motion.div variants={PageRevealStaggered}>
          <Header/>
          {children}

        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default PageReveal;
