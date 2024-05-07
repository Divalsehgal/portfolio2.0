"use client";
import React from "react";
import Home from "@/components/ui/home";
import StarsCanvas from "@/components/ui/stars-canvas";
import { usePathname } from "next/navigation";
function Page() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  
  return (
    <div className="text-tertiary-light dark:text-tertiary-dark h-full">
      {isHomePage && <StarsCanvas />}
      <Home />
    </div>
  );
}

export default Page;
