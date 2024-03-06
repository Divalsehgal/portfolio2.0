import React from "react";
import { technologies } from "@/constants";
import SkillCard from "./skill-card";

const Tech = () => {
  return (
    <div className="section-container">
      <div className="pl-3">Technical Skills</div>
      <div className="section-items flex-wrap">
        {technologies.map((tech, index) => {
          return <SkillCard {...tech} key={tech.id} />;
        })}
      </div>
    </div>
  );
};

export default Tech;
