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
      className="section-items"
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
        className="profile_image"
        alt="profile_image"
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "100%", // Ensures the image takes up the full width of its container
          maxHeight: "500px", // Maximum height for mobile view
        }}
        sizes="(max-width: 768px) 100vw, 400px" // Adjust as per your layout needs
      />
    </motion.div>
  );
}

export default ProfileImage;
