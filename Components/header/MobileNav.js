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
import MenuIcon from "./MenuIcon.js";

const navItems = [
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact us",
    href: "/contact",
  },
];

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="w-full mt-2 ">
      <div className=" grid grid-cols-3 mt-">
        <div className="col-span-1 flex items-center justify-center">
          <motion.button
            onClick={() => setIsActive(!isActive)}
            className=""
            variants={navbarItem}
            initial="initial"
            animate="animate"
          >
            <MenuIcon isActive={isActive} />
          </motion.button>
        </div>
        <div className=" col-span-1 flex items-center justify-center ">
          <Logo />
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
            className="absolute z-10 origin-top  h-screen w-full top-0 left-0 bg-accentColor  py-[4rem] px-4 flex flex-col items-start "
          >
            <motion.button variants={menuClose} className="ml-6" onClick={() => setIsActive(!isActive)}>
              <MenuIcon isActive={isActive} />
            </motion.button>

            <motion.ul variants={linkContainerSlide}  className="w-full flex-1 flex flex-col items-center justify-center gap-y-4 text-center">
              {navItems.map((item, index) => {
                return (
                  <div key={index} className="overflow-hidden  w-full py-2" >
                    <motion.li variants={linkSlide} className="text-5xl font-medium  ">
                    {item.name}
                  </motion.li>
                  </div>
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
