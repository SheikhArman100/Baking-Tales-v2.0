import React from 'react'
import { motion } from "framer-motion";
import { menuBorder, navbarItem } from "@/libs/animation/navbar.animation.js";

const MenuIcon = ({isActive}) => {
  return (
    <div className='relative '>
    {/* //circle */}
      <svg width="80" height="60" viewBox="0 0 80 80">
      <motion.circle
        cx="40"
        cy="40"
        r="28"
        fill="transparent"
        stroke="white"
        strokeWidth="2"
        variants={menuBorder}
        initial="initial"
        whileHover="hover"
      >
        <motion.path
        d="M36 26.5 L46.5 36 L53 29.5 L40 16.5 L27 29.5 L33.5 36 Z"
        fill="#FF0000"
      /> 
      </motion.circle>
    </svg>


      {/* humburgerMenu */}
      
        <div
        className={`absolute top-[47%] left-[50%] -translate-x-[50%]  -translate-y-[50%] h-[0.15rem] w-6   transition-transform ${
          isActive ? "bg-black transform rotate-45 top-[50%] " : "bg-accentColor "
        }`}
      />
      <div
        className={`absolute top-[54%] left-[50%] -translate-x-[50%] -translate-y-[50%]  h-[0.15rem] w-6  transition-transform ${
          isActive ? "transform -rotate-45  bg-black top-[50%] -translate-y-[0.2rem]" : "bg-accentColor"
        }`}
      />
    </div>
  )
}

export default MenuIcon