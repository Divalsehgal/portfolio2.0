import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import type { SocialLinkProps } from "@/types/index";
function Socials() {
  return (
    <section className="flex-col  h-max  gap-6 flex-wrap" id="social">
      <h1 className="section-title">Socials</h1>
      <div className="section-items">
        {socialLinks.map((socialLink) => {
          return <SocialCard {...socialLink} key={socialLink.platform} />;
        })}
      </div>
    </section>
  );
}

export default Socials;

const SocialCard = ({
  platform,
  link,
  iconUrl,
  id,
}: SocialLinkProps): React.JSX.Element => {
  return (
    <section
      className="md:w-max p-2 flex-grow bg-secondary-light dark:bg-secondary-dark text-sm"
      key={id}
    >
      <Link
        href={link}
        className="flex flex-row justify-center md:justify-center items-center md:gap-2  "
      >
        <Image
          className="flex  object-cover w-8 h-8 "
          src={iconUrl}
          alt={`${platform}-icon`}
        />
        <div className=" hidden md:flex">{platform}</div>
      </Link>
    </section>
  );
};
