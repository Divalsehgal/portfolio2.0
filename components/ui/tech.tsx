import React from "react";
import { technologies } from "@/constants";
import SkillCard from "./skill-card";

const Tech = () => {
  return (
    <div className="section-title">
      <div className="">Technical Skills</div>
      <div className="section flex-wrap tech-container">
        {technologies.map((tech, index) => {
          return <SkillCard {...tech} />;
        })}
      </div>
    </div>
  );
};

export default Tech;
