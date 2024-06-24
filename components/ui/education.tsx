import { motion } from "framer-motion";
import { education } from "@/constants";
import type { EducationProps } from "@/types/index";
import React from "react";

function Education() {
  return (
    <motion.section
      className="section-container backdrop-blur supports-[backdrop-filter]:bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-title">Education</div>
      <motion.div
        className="section-items flex-col md:flex-row"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {education.map((edu, index) => {
          return <EducationCard {...edu} key={edu.id} index={index} />;
        })}
      </motion.div>
    </motion.section>
  );
}

const EducationCard = ({
  title,
  institution,
  date,
  grade,
  id,
  index,
}: Readonly<EducationProps & { index: number }>) => {
  return (
    <motion.div
      key={id}
      className="flex flex-1 justify-between flex-col bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-base font-semibold">{title}</div>
      <div className="text-sm">{institution}</div>
      <div className="text-xs">{date}</div>
      <div className="">{grade}</div>
    </motion.div>
  );
};

export default Education;
