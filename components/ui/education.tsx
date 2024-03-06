import { education } from "@/constants";
import React from "react";

type Props = {};

function Education({}: Props) {
  return (
    <div className="section-container">
      <div className="pl-3">Education</div>
      <div className="section-items flex-col">
        {education.map((edu) => {
          return <EducationCard {...edu} />;
        })}
      </div>
    </div>
  );
}

export default Education;

const EducationCard = ({ title, institution, date, grade, id }: any) => {
  return (
    <div
      className="flex flex-1 bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      key={id}
    >
      <div className="flex flex-col justify-evenly">
        <div className="flex gap-6">
          <div className="text-base">{title}</div>
          <div className="text-sm">{institution}</div>
          <div className="text-xs">{date}</div>
        </div>
      </div>
    </div>
  );
};
