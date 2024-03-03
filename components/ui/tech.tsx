import React from "react";
import { technologies } from "@/constants";
import SkillCard from "./skill-card";

const Tech = () => {
  return (
    <div>
      <h1 className="mb-10">Technical Skills</h1>
      <div className="section tech-container w-90">
        {technologies.map((tech, index) => {
          return <SkillCard {...tech} />;
        })}
      </div>
    </div>
  );
};

export default Tech;
