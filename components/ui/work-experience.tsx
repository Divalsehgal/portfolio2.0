import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="section-container">
      {" "}
      <div className="">Work Experience</div>
      <div className="section-items flex flex-col">
        {experiences.map((experience) => {
          return <ExperienceCard {...experience} />;
        })}
      </div>
    </div>
  );
}

export default WorkExperience;

const ExperienceCard = ({ title, company_name, icon, date, points }: any) => {
  return (
    <div className="flex h-1/2 bg-secondary-light gap-4 dark:bg-secondary-dark p-2">
      <div className="flex">
        <Image src={icon} alt={title} className="object-contain h-32 w-32" />
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex items-baseline gap-6">
          <div className="text-base">{title}</div>
          <div className="text-sm">{company_name}</div>
          <div className="text-xs">{date}</div>
        </div>
        <div>
          {points.map((m: string) => {
            return (
              <div className="text-xs" key={m}>
                {m}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
