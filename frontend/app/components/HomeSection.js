"use client";
import Loader from "@/Components/Loader.js";
import { useState } from "react";

const HomeSection = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

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
