import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="section-container" id="projects">
      {" "}
      <div className="pl-3 text-center md:text-left font-bold">Projects</div>
      <div className="section-items flex-wrap">
        {projects.map((project) => {
          return <ProjectCard {...project} key={project.id} />;
        })}
      </div>
    </div>
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
}: any) => {
  return (
    <div
      key={id}
      className="flex flex-grow w-60 flex-col bg-secondary-light dark:bg-secondary-dark rounded-t-md"
    >
      <Link href={source_code_link}>
        <div className="flex flex-col">
          <div className="">
            <Image
              className="rounded-t-md h-36 w-full object-cover"
              src={image}
              alt=""
            />
          </div>

          <div className="p-1 flex gap-2 flex-col">
            <div className="text-xl font-semibold">{name}</div>
            <div className="overflow-hidden line-clamp-3">{description}</div>
            <div className="flex gap-2">
              {tags.map((t: any) => (
                <div
                  className="border px-1 rounded-sm bg-primary-light dark:bg-primary-dark"
                  key={t.name}
                >
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
