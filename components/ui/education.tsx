import { education } from "@/constants";
import React from "react";

type Props = {};

function Education({}: Props) {
  return (
    <section
      className="section-container backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="education"
    >
      <div className="section-title">Education</div>
      <div className="section-items flex-col md:flex-row ">
        {education.map((edu) => {
          return <EducationCard {...edu} key={edu.id} />;
        })}
      </div>
    </section>
  );
}

export default Education;

const EducationCard = ({ title, institution, date, grade, id }: any) => {
  return (
    <div
      key={id}
      className="flex flex-1 justify-between flex-col bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
    >
      <div className="text-base font-semibold">{title}</div>
      <div className="text-sm">{institution}</div>
      <div className="text-xs">{date}</div>
      <div className="">{grade}</div>
    </div>
  );
};
