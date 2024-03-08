import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Socials({}: Props) {
  return (
    <div className="section-container flex-wrap" id="social">
      <h1 className="mb-4 text-center md:text-left font-bold">Socials</h1>
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
        <div className="flex flex-row items-center md:gap-2 h-12 w-16">
          <Image
            className="object-cover w-full h-full "
            src={iconUrl}
            alt={platform}
          />
          <div className="flex-1 hidden md:flex">{platform}</div>
        </div>
      </Link>
    </div>
  );
};
