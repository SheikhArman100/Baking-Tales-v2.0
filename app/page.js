"use client";
import Header from "@/Components/header/Header.js";
import Loader from "@/Components/Loader.js";
import { useState } from "react";
import HomeContainer from "./HomeContainer";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="">
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <div className="min-h-screen w-full flx flex-col bg-bgColor ">
          <Header />
          <HomeContainer/>
            
           
        </div>
      )}
    </main>
  );
}
