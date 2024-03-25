'use client'
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function Top({}: Props) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

  if (isHomePage) {
  return (
    <div className="h-10 p-4 flex text-lg border-opacity-40 text-center justify-center  border-2 border-solid border-tertiary-light dark:border-tertiary-dark bg-primary-light dark:bg-primary-dark text-tertiary-light dark:text-tertiary-dark items-center">
      Checkout out my new blog
    </div>
  );
}
}
export default Top;
