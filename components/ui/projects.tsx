import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Projects({}: Props) {
  console.log(projects);
  return (
    <div className="grid">
      {" "}
      <div className="">Projects</div>
      <div className="section project-container">
        {projects.map((project) => {
          return <ProjectCard {...project} />;
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
      className="flex flex-col bg-secondary-light dark:bg-secondary-dark rounded-t-md"
    >
      <Link href={source_code_link}>
        <div className="">
          <Image className="rounded-t-md h-1/5" src={image} alt="" />
        </div>

        <div className="p-2">
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
