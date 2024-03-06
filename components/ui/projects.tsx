import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="section-container">
      {" "}
      <div className="pl-3">Projects</div>
      <div className="section-items flex-wrap">
        {projects.map((project) => {
          return <ProjectCard {...project} key={project.id}/>;
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
      className="flex flex-grow flex-col bg-secondary-light dark:bg-secondary-dark rounded-t-md"
    >
      <Link href={source_code_link}>
        <div className="">
          <Image
            className="rounded-t-md h-36 w-full object-cover"
            src={image}
            alt=""
          />
        </div>

        <div className="p-1 w-80">
          <div>{name}</div>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {description}
          </div>
          <div className="grid  auto-cols-min grid-flow-row">
            {tags.map((t: any) => (
              <div key={t.name}>{t.name}</div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
