import Image from "next/image";
import React from "react";
import profile from "../../public/assets/profile.jpg";
type Props = {};

function ProfileImage({}: Props) {
  return (
    <div className="section-items w-max">
      <Image src={profile} alt="profile_image" width={200} height={200} />
    </div>
  );
}

export default ProfileImage;
