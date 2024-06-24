import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import type { SocialLinkProps } from "@/types/index";
import { motion } from "framer-motion";

function Socials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      className="flex-col h-max gap-6 flex-wrap"
      id="social"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="section-title">Socials</h1>
      <div className="section-items">
        {socialLinks.map((socialLink) => {
          return <SocialCard {...socialLink} key={socialLink.platform} />;
        })}
      </div>
    </motion.section>
  );
}

const SocialCard = ({
  platform,
  link,
  iconUrl,
  id,
}: SocialLinkProps): React.JSX.Element => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="md:w-max p-2 flex-grow bg-secondary-light dark:bg-secondary-dark text-sm"
      key={id}
      variants={cardVariants}
    >
      <Link
        href={link}
        className="flex flex-row justify-center md:justify-center items-center md:gap-2"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            className="flex object-cover w-8 h-8"
            src={iconUrl}
            alt={`${platform}-icon`}
          />
        </motion.div>
        <div className="hidden md:flex">{platform}</div>
      </Link>
    </motion.section>
  );
};

export default Socials;
