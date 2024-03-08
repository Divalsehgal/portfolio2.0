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

const SocialCard = ({ platform, link, iconUrl, id }: any) => {
  return (
    <div
      className="md:w-max flex-grow bg-secondary-light dark:bg-secondary-dark text-sm"
      key={id}
    >
      <Link href={link} className="flex flex-row justify-center md:justify-evenly items-center md:gap-2  ">
        <Image
          className="flex  object-cover w-8 h-8 "
          src={iconUrl}
          alt={platform}
        />
        <div className=" hidden md:flex">{platform}</div>
      </Link>
    </div>
  );
};
