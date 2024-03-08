import React from "react";
import { technologies } from "@/constants";
import SkillCard from "./skill-card";

const Tech = () => {
  return (
    <div className="section-container" id="technical">
      <div className="pl-3 text-center md:text-left font-bold">
        Technical Skills
      </div>
      <div className="section-items flex-wrap">
        {technologies.map((tech, index) => {
          return <SkillCard {...tech} key={tech.id} />;
        })}
      </div>
    </div>
  );
};

export default Tech;
