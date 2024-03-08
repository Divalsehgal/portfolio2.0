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
      <div className="flex flex-col  gap-4 md:flex-wrap md:px-40 md:gap-16">
        {/* Image Component */}
        <div className="flex items-center flex-col xs:flex-col xs:gap-4 xs:items-center md:flex-row md:justify-between md:gap-6">
          <ProfileImage />
          <AboutComponent />
        </div>
        {/* Work Experience */}
        <div className="flex flex-col md:justify-center gap-4 md:gap-6">
          <WorkExperience />
          {/* Projects */}
          <Projects />
        </div>
        {/* Skills */}
        <Tech />
        {/* Education */}

        <div className="flex flex-col gap-4 md:gap-6">
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
