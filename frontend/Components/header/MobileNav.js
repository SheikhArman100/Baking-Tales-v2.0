"use client";
import {
  linkContainerSlide,
  linkSlide,
  menuClose,
  mobileLinkContainer,
  mobileNav,
  navbarItem,
} from "@/libs/animation/navbar.animation.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CartButton from "./CartButton.js";
import Logo from "./Logo.js";
import MenuIcon from "./IconCircleBorder.js";
import { Menu, X } from "lucide-react";
import IconCircleBorder from "./IconCircleBorder.js";
import Link from "next/link.js";
const navItems = [
   {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Products",
    href: "/shop",
  },
  {
    name: "Journals",
    href: "/journals",
  }
]

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="w-full mt-2 md:hidden">
      <div className=" grid grid-cols-3 mt-">
        <div className="col-span-1 flex items-center justify-center">
          <motion.button
            onClick={() => setIsActive(!isActive)}
            className="z-30"
            variants={navbarItem}
            initial="initial"
            animate="animate"
          >
            <IconCircleBorder>
              {/* humburgerMenu */}
             {isActive?<X />:<Menu className=' text-accentColor h-6 w-6 ' />}
            </IconCircleBorder>
          </motion.button>
        </div>
        <div className=" col-span-1 flex items-center justify-center ">
          <Logo/>
        </div>
        <div className=" col-span-1 flex items-center justify-center  ">
          <CartButton />
        </div>
      </div>
      <AnimatePresence >
      {isActive ? (
          <motion.div
            variants={mobileNav}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute z-20 origin-top  h-screen w-full top-0 left-0 bg-accentColor  py-[4rem] px-4 flex flex-col items-start "
          >
           

            <motion.ul variants={linkContainerSlide}  className="w-full flex-1 flex flex-col items-center justify-center gap-y-4 text-center">
              {navItems.map((item, index) => {
                return (
                  <Link href={item.href} key={index} className="overflow-hidden  w-full py-2" >
                    <motion.li variants={linkSlide} className="text-5xl font-medium  ">
                    {item.name}
                  </motion.li>
                  </Link>
                );
              })}
            </motion.ul>
          </motion.div>
      ) : null}
      </AnimatePresence>
    </section>
  );
};

export default MobileNav;
