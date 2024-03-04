import React from "react";
import Image from "next/image";

function SkillCard({ name, years = 4, icon }: any) {
  return (
    <div className="w-max flex-grow bg-secondary-light dark:bg-secondary-dark text-sm">
      <div className="flex justify-start p-2 items-center">
        <Image className="h-8 w-8" src={icon} alt={name} />
        <div className="text-xl">{name}</div>
      </div>
      <div className="p-2">{years}</div>
    </div>
  );
}

export default SkillCard;
