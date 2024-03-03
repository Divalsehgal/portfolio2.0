export default function AboutComponent() {
  return (
    <div className="flex flex-1 h-full justify-center border  border-solid border-secondary-light dark:border-secondary-dark  bg-primary-light  dark:bg-primary-dark">
      {/* Introduction */}
      <div className="text-center justify-evenly flex flex-col">
        <div className="text-xl">My Name is Dival</div>
        <div className="text-center">
          Welcome to my corner of the web, where I share my insights,
          experiences, and projects.
        </div>
      </div>
    </div>
  );
}
