import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="section">
      {experiences.map((experience) => {
        return <ExperienceCard {...experience} />;
      })}
    </div>
  );
}

export default WorkExperience;

const ExperienceCard = ({ title, company_name, icon, date, points }) => {
  return (
    <div className="flex bg-secondary-light dark:bg-secondary-dark ">
      <div className="flex">
        <Image src={icon} alt={title} height={100} width={100} />
      </div>
      <div className="flex-col">
        <div className="text-xl">{title}</div>
        <div className="text-xm">{company_name}</div>
        <div className="text-xm">{date}</div>
      </div>
    </div>
  );
};
