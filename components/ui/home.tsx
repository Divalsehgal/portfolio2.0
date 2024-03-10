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
        <section className="flex h-screen  flex-col gap-4 xs:items-center md:flex-row  md:gap-6 justify-center items-center backdrop-blur supports-[backdrop-filter]: bg-primary-light/10 dark:supports-[backdrop-filter]:bg-primary-dark/10">
          <ProfileImage />
          <AboutComponent />
        </section>
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <WorkExperience />
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <Projects />
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <Tech />
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <Education />
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <Certification />
        <hr className="my-8 border-tertiary-light dark:border-tertiary-dark" />
        <Socials />
      </div>
    </div>
  );
}
export default Home;
