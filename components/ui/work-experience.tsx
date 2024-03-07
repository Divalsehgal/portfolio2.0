import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="section-container">
      {" "}
      <div className="pl-3 text-center md:text-left">Work Experience</div>
      <div className="section-items flex-col">
        {experiences.map((experience: any) => {
          return <ExperienceCard {...experience} key={experience?.id} />;
        })}
      </div>
    </div>
  );
}

export default WorkExperience;

const ExperienceCard = ({
  title,
  company_name,
  icon,
  date,
  points,
  id,
}: any) => {
  return (
    <div
      className="flex flex-col md:flex-row h-1/2 bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      key={id}
    >
      <div className="flex place-content-center md:place-content-start">
        <Image
          src={icon}
          alt={title}
          className="object-contain h-20 w-20 md:h-32 md:w-32"
        />
      </div>
      <div className="flex gap-4 md:gap-2 flex-col justify-evenly">
        <div className="flex items-baseline md:items-center gap-6 justify-between">
          <div className="px-4 md:px-0">
            <div className="text-base">{title}</div>
            <div className="text-sm">{company_name}</div>
          </div>
          <div className="text-xs flex-end pr-2">{date}</div>
        </div>
        <ul className="list-none h-28 overflow-scroll md:h-full md:overflow-hidden ">
          {points.map((m: string) => {
            return (
              <li className="flex items-center text-xs" key={m}>
                <span className="mr-2">&#8226;</span>
                {m}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
