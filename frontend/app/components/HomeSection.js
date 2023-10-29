"use client";
import Loader from "@/Components/Loader.js";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const HomeSection = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <div className="min-h-screen relative w-full flex flex-col bg-bgColor ">
          {children}
        </div>
      )}
    </main>
  );
};

export default HomeSection;
