import React from "react";
import { technologies } from "@/constants";
import SkillCard from "./skill-card";

const Tech = () => {
  return (
    <section
      className="section-container backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="technical"
    >
      <div className="section-title">Technical Skills</div>
      <div className="section-items flex-wrap">
        {technologies.map((tech, index) => {
          return <SkillCard {...tech} key={tech.id} />;
        })}
      </div>
    </section>
  );
};

export default Tech;
