import { certifications } from "@/constants";
import type { CertificationProps } from "@/types/index";
import Link from "next/link";
import React from "react";

function Certification() {
  return (
    <section
      className="section-container backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10"
      id="certifications"
    >
      <div className="section-title">Certifications</div>
      <div className="section-items flex-wrap">
        {certifications.map((cert) => {
          return <CertificationCard {...cert} key={cert.id} />;
        })}
      </div>
    </section>
  );
}

export default Certification;
const CertificationCard = ({ name, link, id }: Readonly<CertificationProps>) => {
  const highlightName = name.split(" ")[0];
  const restName = name.slice(highlightName.length);
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
