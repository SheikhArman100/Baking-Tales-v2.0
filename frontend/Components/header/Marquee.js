"use client"
import { motion } from "framer-motion";
import {marqueeAD, marqueeContainer, marqueeText} from "@/libs/animation/marquee.js"
import { Star } from "lucide-react";
import React from 'react'

const Marquee = () => {
  return (
    <motion.section variants={marqueeContainer} initial="initial" animate="animate" className="origin-left h-8 bg-yellow-500 overflow-hidden uppercase flex items-center">
      <motion.div variants={marqueeAD} initial="initial" animate="animate" className="flex items-center w-fit flex-auto">
        {[...Array(20).keys()].map((i) => (
          <motion.div variants={marqueeText}  animate="animate" key={i} className="flex items-center gap-x-2 flex-shrink-0 px-2">
            <p className="text-xs font-[400] text-black">Marquee AD Design</p>
            <Star fill="black" stroke="none" className="h-3 w-3" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Marquee