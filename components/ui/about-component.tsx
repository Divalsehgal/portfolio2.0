import { portfolioLinks } from "@/constants";

export default function AboutComponent() {
  return (
    <div className="section-items w-10/12 h-full">
      {/* Introduction */}
      <div className="text-center justify-center flex flex-col gap-4">
        <div className="text-2xl font-bold">My Name is Dival Sehgal</div>
        <div className="text-center">
          I am a full stack developer having 4+ years of experinace. Welcome to
          my corner of the web, where I share my insights, experiences, and
          projects.
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {portfolioLinks.map((m) => {
            return <LinkItem {...m} key={m.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

const LinkItem = (m: any) => {
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.getElementById(m.link);
    if (section) {
      const topPos = section.getBoundingClientRect().top + window.scrollY;
      console.log(section.getBoundingClientRect().top, window.scrollY);
      window.scrollTo({
        top: topPos - 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <button
      key={m.id}
      onClick={scrollToSection}
      className=" text-xl border-2 p-1 border-secondary-light dark:border-secondary-dark text-tertiary-light dark:text-tertiary-dark"
    >
      {m?.name}
    </button>
  );
};
