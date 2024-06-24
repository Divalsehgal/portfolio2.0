import { motion } from "framer-motion";
import { certifications } from "@/constants";
import type { CertificationProps } from "@/types/index";
import Link from "next/link";
import React from "react";

function Certification() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="section-container backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="certifications"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="section-title">Certifications</div>
      <div className="section-items flex-wrap">
        {certifications.map((cert, index) => {
          return <CertificationCard {...cert} key={cert.id} index={index} />;
        })}
      </div>
    </motion.section>
  );
}

const CertificationCard = ({
  name,
  link,
  id,
  index,
}: Readonly<CertificationProps & { index: number }>) => {
  const highlightName = name.split(" ")[0];
  const restName = name.slice(highlightName.length);

  return (
    <motion.div
      className="md:w-max flex-grow bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={link}>
        <div className="flex items-center gap-6">
          <div className="text-base">
            <span className="text-primary-light text-xl">{highlightName}</span>
            {restName}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Certification;
