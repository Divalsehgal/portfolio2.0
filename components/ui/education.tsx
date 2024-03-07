import { education } from "@/constants";
import React from "react";

type Props = {};

function Education({}: Props) {
  return (
    <div className="section-container">
      <div className="pl-3 text-center md:text-left">Education</div>
      <div className="section-items flex-col md:flex-row ">
        {education.map((edu) => {
          return <EducationCard {...edu} key={edu.id} />;
        })}
      </div>
    </div>
  );
}

export default Education;

const EducationCard = ({ title, institution, date, grade, id }: any) => {
  return (
    <div
      key={id}
      className="flex flex-1 justify-between flex-col bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
    >
      <div className="text-base">{title}</div>
      <div className="text-sm">{institution}</div>
      <div className="text-xs">{date}</div>
      <div className="">{grade}</div>
    </div>
  );
};
