import { certifications } from "@/constants";
import Link from "next/link";
import React from "react";

type Props = {};

function Certification({}: Props) {
  return (
    <div className="section-title">
      <div className="">Certifications</div>
      <div className="section flex-1">
        {certifications.map((cert) => {
          return <CertificationCard {...cert} />;
        })}
      </div>
     </div>
  );
}

export default Certification;
const CertificationCard = ({ title, description, link, id }: any) => {
  return (
    <div
      className="flex bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      key={id}
    >
      <Link href={link}>
        <div className="flex flex-col justify-evenly">
          <div className="flex items-baseline gap-6">
            <div className="text-base">{title}</div>
            <div className="text-sm">{description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
