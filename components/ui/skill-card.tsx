import React from "react";
import Image from "next/image";
import type { TechnologyProps } from "@/types/index";
import { motion } from "framer-motion";

function SkillCard({ name, years = "4", icon, id }: Readonly<TechnologyProps>) {
  return (
    <motion.div
      className="md:w-max flex-grow bg-secondary-light dark:bg-secondary-dark text-sm"
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
      <div className="flex justify-start p-2 items-center gap-2">
        <Image className="h-8 w-8" src={icon} alt={name} />
        <div className="text-xl">{name}</div>
      </div>
      {/* <div className="pl-4 pb-2 superscript">{years}</div> */}
    </motion.div>
  );
}

export default SkillCard;
