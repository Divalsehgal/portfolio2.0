import WorkExperience from "./work-experience";
import Projects from "./projects";
import Socials from "./socials";
import Education from "./education";
import ProfileImage from "./profile-image";
import Tech from "./tech";
import AboutComponent from "./about-component";
import Certification from "./certification";

function Home() {
  return (
    <div className="flex md:justify-center md:items-center">

      <div className="flex flex-col gap-4 m-10 md:flex-wrap md:flex  md:px-40 md:gap-16">
        {/* Image Component */}
        <div className="flex justify-between  gap-6">
          <ProfileImage />
          <AboutComponent />
        </div>
        {/* Work Experience */}
        <div className="flex flex-col justify-center  gap-6">
          <WorkExperience />
          {/* Projects */}
          <Projects />
        </div>
        {/* Skills */}
        <Tech />
        {/* Education */}

        <div className="flex gap-6">
          <Education />

          <Certification />
        </div>
        {/* Socials */}
        <Socials />
      </div>
    </div>
  );
}
export default Home;
