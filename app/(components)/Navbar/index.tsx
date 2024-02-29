
import Link from "next/link";

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">
            Blog 
          </Link>
        </li>
        <li>
          <Link href="/practice">
            Practice
          </Link>
        </li>
      </ul>
      {/* <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
    </nav>
  );
};

export default NavBar;
