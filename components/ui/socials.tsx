import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { platform } from "os";
import React from "react";

type Props = {};

function Socials({}: Props) {
  return (
    <div className="section-container">
      <h1 className="mb-4 text-center md:text-left">Socials</h1>
      <div className="section-items">
        {socialLinks.map((socialLink) => {
          return <SocialCard {...socialLink} key={socialLink.platform} />;
        })}
      </div>
    </div>
  );
}

export default Socials;

const SocialCard = ({ platform, link, iconUrl, id}: any) => {
  return (
    <div
      className="w-full bg-secondary-light dark:bg-secondary-dark text-sm"
      key={id}
    >
      <Link href={link}>
        <div className="flex flex-row items-center md:gap-2">
          <Image src={iconUrl} alt={platform} width={60} height={60} />
          <div className="flex-1 hidden md:flex">{platform}</div>
        </div>
      </Link>
    </div>
  );
};
