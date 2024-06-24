import { motion } from "framer-motion";
import WorkExperience from "./work-experience";
import Projects from "./projects";
import Socials from "./socials";
import Education from "./education";
import ProfileImage from "./profile-image";
import Tech from "./tech";
import AboutComponent from "./about-component";
import Certification from "./certification";

function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex md:justify-center md:items-center">
      <div className="flex flex-col gap-4 md:flex-wrap md:px-40 md:gap-16">
        <motion.section
          className="flex h-screen flex-col gap-4 xs:items-center md:flex-row md:gap-6 justify-center items-center backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage />
          <AboutComponent />
        </motion.section>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <WorkExperience />
        </motion.div>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Projects />
        </motion.div>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tech />
        </motion.div>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Education />
        </motion.div>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Certification />
        </motion.div>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Socials />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
