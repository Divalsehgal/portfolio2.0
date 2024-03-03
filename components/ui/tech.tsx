import React from "react";
import { technologies } from "@/constants";
import SkillCard from "./skill-card";

const Tech = () => {
  return (
    <div className="section tech-container w-90">
      {technologies.map((tech, index) => {
        return <SkillCard {...tech} />;
      })}
    </div>
  );
};

export default Tech;
