import { experiences } from "@/constants/index";
import type { ExperienceProps } from "@/types/index";
import { motion } from "framer-motion";
import Image from "next/image";

function WorkExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      className="section-container backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="work-experience"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="section-title">Work Experience</div>
      <div className="section-items flex-row">
        {experiences.map((experience) => {
          return <ExperienceCard {...experience} key={experience.id} />;
        })}
      </div>
    </motion.section>
  );
}

const ExperienceCard = ({
  title,
  company_name,
  icon,
  date,
  points,
  id,
}: Readonly<ExperienceProps>) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex container flex-col md:flex-row bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      key={id}
      variants={cardVariants}
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
            <div className="text-base font-semibold">{title}</div>
            <div className="text-sm">{company_name}</div>
          </div>
          <div className="text-xs flex-end pr-2">{date}</div>
        </div>
        <ul className="list-none h-28 overflow-scroll md:h-full md:overflow-hidden">
          {points.map((point: string) => {
            return (
              <li className="flex items-center text-sm" key={point}>
                <span className="mr-2 text-sm">&#8226;</span>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
