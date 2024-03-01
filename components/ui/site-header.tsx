"use client";
import React, { useEffect, useState } from "react";

import { navLinks } from "../../constants/index";
import { logo, menu, close } from "../../public/assets";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SiteHeader = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`sticky w-full flex items-center p-5  text-tertiary-light top-0 z-20 bg-primary-light backdrop-blur supports-[backdrop-filter]:bg-primary-light/60  ${
        scrolled ? "bg-primary-light" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: any) => (
            <Link href={nav.linkUrl} key={nav.id}>
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "text-secondary-light"
                    : "text-tertiary-light"
                } hover:text-secondary-light text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          /> */}

          {/* <div
            className={`${
              !toggle ? "hidden" : "flex"
            } .p-px bg-primary-light absolute top-14 right-0 ml-1 mr-8 my-2 min-w-[140px] z-10 rounded-sm`}
          >
            <ul className="list-none p-4 bg-secondary-light flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "text-primary-light"
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div> */}

          <Sheet >
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
  
              <SheetContent
                side="top"
                className="bg-primary-light text-tertiary-light h-32  p-4 border-none .text-sm"
              >
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                <SheetDescription >
                  <div className="text-justify text-tertiary-light text-xl flex flex-col justify-between items-center outline-none ">
                    {navLinks.map((nav) => (
                      <div
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[18px] ${
                          active !== nav.title
                            ? "text-tertiary-light"
                            : "text-secondary-light"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a href={`${nav.id}`}>{nav.title}</a>
                      </div>
                    ))}
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
