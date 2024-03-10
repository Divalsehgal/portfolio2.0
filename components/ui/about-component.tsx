import { portfolioLinks } from "@/constants";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <div className="section-items w-2/3 h-full">
      {/* Introduction */}
      <div className="text-center justify-evenly flex flex-col gap-4">
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
  return (
    <Link
      key={m.id}
      className=" text-xl border-2 p-1 border-secondary-light dark:border-secondary-dark text-tertiary-light dark:text-tertiary-dark"
      href={`#${m.link}`}
    >
      {m?.name}
    </Link>
  );
};
