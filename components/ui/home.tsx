import WorkExperience from "./work-experience";
import Projects from "./projects";
import Socials from "./socials";
import Education from "./education";
import ProfileImage from "./profile-image";
import Tech from "./tech";
import AboutComponent from "./about-component";

function Home() {
  return (
    <div className="flex md:justify-center md:items-center">
      <div className="flex flex-col gap-4 m-10 md:w-full md:grid md:grid-cols-2 md:p-20 md:gap-32">
        {/* Image Component */}
        <ProfileImage />
        <AboutComponent />
        {/* Work Experience */}
        <WorkExperience />
        {/* Projects */}
        <Projects />
        {/* Skills */}
        <Tech />
        {/* Education */}
        <Education />
        {/* Socials */}
        <Socials />
      </div>
    </div>
  );
}
export default Home;
