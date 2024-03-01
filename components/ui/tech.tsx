"use client";
import React from "react";
import { technologies } from "@/constants";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="flex justify-center gap-10 flex-wrap flex-row">
      {technologies.map((tech, index) => {
        return (
          <div className="w-8 h-8" key={tech?.name}>
          <Image src={tech.icon}/>
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
