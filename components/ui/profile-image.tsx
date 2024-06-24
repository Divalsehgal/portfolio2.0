import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../public/assets/profile.jpg";

function ProfileImage() {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.01 },
  };

  return (
    <motion.div
      className="section-items sm:w-1/3 md:w-1/3"
      initial="hidden"
      whileHover="hover"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={profile}
        priority={true}
        placeholder="blur"
        className="profile_image object-contain"
        alt="profile_image"
      />
    </motion.div>
  );
}

export default ProfileImage;
