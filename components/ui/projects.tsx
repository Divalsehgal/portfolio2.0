import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Projects({}: Props) {
  console.log(projects);
  return (
    <div className="section project-container">
      {projects.map((project) => {
        return <ProjectCard {...project} />;
      })}
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
      className="flex flex-col bg-secondary-light dark:bg-secondary-dark "
    >
      <Link href={source_code_link}>
        <div>
          <Image src={image} alt="" />
        </div>

        <div>
          <div>{name}</div>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {description}
          </div>
          <div className="grid  auto-cols-min grid-flow-row">
            {tags.map((t) => (
              <div>{t.name}</div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
