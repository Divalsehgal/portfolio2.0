import { certifications } from "@/constants";
import Link from "next/link";
import React from "react";

type Props = {};

function Certification({}: Props) {
  return (
    <div className="section-container">
      <div className="pl-3 text-center md:text-left">Certifications</div>
      <div className="section-items flex-wrap">
        {certifications.map((cert) => {
          return <CertificationCard {...cert} key={cert.id} />;
        })}
      </div>
    </div>
  );
}

export default Certification;
const CertificationCard = ({ name, link, id }: any) => {
  const highlightName = name.split(" ")[0];
  const restName = name.slice(highlightName.length);
  console.log(restName);
  return (
    <div
      className="md:w-max flex-grow bg-secondary-light gap-4 dark:bg-secondary-dark p-2"
      key={id}
    >
      <Link href={link}>
        <div className="flex items-center gap-6">
          <div className="text-base">
            <span className="text-primary-light text-xl ">{highlightName}</span>
            {restName}
          </div>
        </div>
      </Link>
    </div>
  );
};
