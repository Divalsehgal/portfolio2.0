import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Socials({}: Props) {
  return (
    <div className="section-container">
      <h1 className="mb-4 text-center">Socials</h1>
      <div className="section-items">
        {socialLinks.map((socialLink) => {
          return <SocialCard {...socialLink} />;
        })}
      </div>
     </div>
  );
}

export default Socials;

const SocialCard = ({ platform, link, iconUrl }: any) => {
  return (
    <div
      className="w-full bg-secondary-light dark:bg-secondary-dark text-sm"
      key={platform}
    >
      <Link href={link}>
        <div className="flex flex-row ">
          <Image src={iconUrl} alt={platform} width={60} height={60} />
          <div className="flex-1">{platform}</div>
        </div>
      </Link>
    </div>
  );
};
