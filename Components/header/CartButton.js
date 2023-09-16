"use client"
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { navbarItem } from '@/libs/animation/navbar.animation.js'

const CartButton = () => {
  return (
    <div  className="relative p-2   cursor-pointer group ">
      <motion.div variants={navbarItem}
      initial="initial"
      animate="animate">
        <ShoppingCart className=" h-6 w-6 text-accentColor  " />

      </motion.div>
        <p className='absolute -top-2 -right-2 rounded-full bg-yellow-500  text-textColor text-center h-5 w-5 flex items-center justify-center  text-xs font-semibold origin-center transition-all scale-0 group-hover:scale-100  '>
            10

        </p>
    </div>
  )
}

export default CartButton 