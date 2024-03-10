import Image from "next/image";
import React from "react";
import profile from "../../public/assets/profile.jpg";
type Props = {};

function ProfileImage({}: Props) {
  return (
    <div className="section-items  h-4/5 w-4/5 md:w-1/3 ">
      <Image src={profile} className="profile_image" alt="profile_image" />
    </div>
  );
}

export default ProfileImage;
