"use client";
import Header from "@/Components/header/Header.js";
import Loader from "@/Components/Loader.js";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="">
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <div className="min-h-screen w-full bg-bgColor">
          <Header />  
        </div>
      )}
    </main>
  );
}
