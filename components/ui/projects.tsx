import { projects } from "@/constants";
import type { ProjectProps } from "@/types/index";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      className="section-container backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="projects"
    >
      <div className="section-title">Projects</div>
      <div className="section-items flex-wrap overflow-auto">
        {projects.map((project) => {
          return <ProjectCard {...project} key={project.id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;

const ProjectCard = ({
  id,
  name,
  image,
  description,
  tags,
  source_code_link,
}: Readonly<ProjectProps>) => {
  return (
    <motion.div
      key={id}
      className="flex-grow w-60 flex-col bg-secondary-light dark:bg-secondary-dark rounded-t-md"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Link href={source_code_link}>
        <motion.div className="flex flex-col">
          <div className="">
            <Image
              className="rounded-t-md h-36 w-full object-cover"
              src={image}
              alt=""
              width={400}
              height={200}
            />
          </div>

          <div className="p-4 flex gap-2 flex-col">
            <div className="text-xl font-semibold">{name}</div>
            <div className="overflow-hidden line-clamp-3">{description}</div>
            <div className="flex gap-2 flex-wrap">
              {tags.map((t) => (
                <div
                  className="border px-1 rounded-sm bg-primary-light dark:bg-primary-dark"
                  key={t.name}
                >
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
