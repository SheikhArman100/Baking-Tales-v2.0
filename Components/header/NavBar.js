import React from "react";
import Logo from "./Logo";
import { Heart, ShoppingCart, User2 } from "lucide-react";
import IconCircleBorder from "./IconCircleBorder";
import CartButton from "./CartButton";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";
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
    href: "/products",
  },
  {
    name: "Blogs",
    href: "/blogs",
  }
];

const NavBar = () => {
  return (
    <div className="hidden  md:grid w-full grid-cols-3 py-2 px-8 md:px-12">
      <ul className="flex items-center justify-start  text-sm gap-x-6">
        {navItems.map((item, index) => {
          return <li key={index}><AnimatedLink  title={item.name} href={item.href}/></li>
        })}
      </ul>
      <div className="flex items-center justify-center "><Logo/></div>
      <div className=" flex items-center justify-end gap-x-6 text-textColor mr-2">
        <IconCircleBorder><Heart className="h-[1.2rem] aspect-square" /></IconCircleBorder>
        <IconCircleBorder><User2 className="h-[1.2rem] aspect-square" /></IconCircleBorder>
        <div className="w-[0.01rem] h-[1.2rem] bg-textColor"/>
        <CartButton/>
      </div>
    </div>
  );
};

export default NavBar;
