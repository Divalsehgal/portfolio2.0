import Image from "next/image";
import profile from "../../public/assets/profile.jpg";

function ProfileImage() {
  return (
    <div className="section-items sm:w-1/3 md:w-1/3 ">
      <Image
        src={profile}
        priority={true}
        placeholder="blur"
        className="profile_image object-contain"
        alt="profile_image"
      />
    </div>
  );
}

export default ProfileImage;
