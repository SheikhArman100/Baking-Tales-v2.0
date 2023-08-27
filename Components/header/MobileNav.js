"use client";
import {
  mobileNavContainer,
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
      <AnimatePresence>
      {isActive ? (
          <motion.div
            variants={mobileNavContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute z-10 origin-top  h-screen w-full top-0 left-0 bg-accentColor flex flex-col  gap-y-6 items-start py-10 px-4"
          >
            <button className="z-10" onClick={() => setIsActive(!isActive)}>
              <MenuIcon isActive={isActive} />
            </button>

            <ul className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center gap-y-3">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="text-4xl font-medium">
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </motion.div>
      ) : null}
      </AnimatePresence>
    </section>
  );
};

export default MobileNav;
