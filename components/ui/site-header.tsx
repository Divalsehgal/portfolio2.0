"use client";
import React, { useEffect, useState } from "react";

import { navLinks, upcomingLinks } from "../../constants/index";
import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProgressBar from "./progress-bar";

const SiteHeader = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    const body = document.body;

    if (typeof window !== "undefined") {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      setDarkMode(!darkMode);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header
      className={`sticky w-full h-1/5 flex items-center p-5  text-tertiary-light dark:text-tertiary-dark top-0 z-20  backdrop-blur supports-[backdrop-filter]:bg-primary-light/20  dark:supports-[backdrop-filter]:bg-primary-dark/20  ${
        scrolled ? "bg-primary-light dark:bg-primary-dark" : "bg-transparent"
      }`}
    >
      <ProgressBar />
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <li>
          {" "}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {" "}
            <p className=" text-[18px] font-bold cursor-pointer flex ">
              Dival Sehgal
            </p>
          </Link>
        </li>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-secondary-light dark:text-secondary-dark"
                  : "text-tertiary-light dark:text-tertiary-dark"
              } hover:text-secondary-light dark:hover:text-secondary-dark text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {" "}
              <Link href={nav.linkUrl} key={nav.id}>
                {nav.title}
              </Link>
            </li>
          ))}{" "}
          {upcomingLinks.map((nav) => (
            <TooltipProvider key={nav.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <li
                    key={nav.id}
                    className={`text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                  >
                    {nav.title}
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  <p
                    className={`hover:text-secondary-light dark:hover:text-secondary-dark text-[18px] font-medium cursor-pointer`}
                  >
                    Coming Soon
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}{" "}
          <li
            className="text-[18px] font-medium cursor-pointer"
            onClick={toggleTheme}
          >
            {!darkMode ? <Sun /> : <Moon />}
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="bg-primary-light dark:bg-primary-dark text-tertiary-light dark:text-tertiary-dark h-48  p-4 border-none .text-sm"
            >
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
              <SheetDescription>
                <div className="text-justify text-tertiary-light dark:text-tertiary-dark text-xl flex flex-col justify-between items-center outline-none gap-4 ">
                  {navLinks.map((nav) => (
                    <div
                      key={nav.id}
                      className={`font-medium cursor-pointer text-[18px] ${
                        active !== nav.title
                          ? "text-tertiary-light dark:text-tertiary-dark"
                          : "text-secondary-light dark:text-secondary-dark"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`${nav.linkUrl}`}>{nav.title}</a>
                    </div>
                  ))}
                  <div
                    className="text-[18px] font-medium cursor-pointer"
                    onClick={toggleTheme}
                  >
                    {!darkMode ? <Sun /> : <Moon />}
                  </div>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
