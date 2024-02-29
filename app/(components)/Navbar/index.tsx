'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-8 bg-white dark:bg-gray-800 shadow-lg`}
    >
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Button className="text-gray-100 dark:text-white">Home</Button>
        </Link>
        <Link href="/blog">
          {" "}
          <Button className="text-gray-100 dark:text-white">Blog</Button>
        </Link>
        <Link href="/practice">
          {" "}
          <Button className="text-gray-100 dark:text-white">Practice</Button>
        </Link>
      </div>
      <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="hidden"
        />
        <label
          htmlFor="darkModeToggle"
          className="flex items-center cursor-pointer"
        >
          <div className="w-10 h-4 bg-gray-400 dark:bg-gray-600 rounded-full p-1 transition duration-300 ease-in-out">
            <div
              className={`bg-white dark:bg-gray-400 w-4 h-4 rounded-full shadow-md transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              } transition duration-300 ease-in-out`}
            ></div>
          </div>
          <span className="ml-3 text-gray-900 dark:text-white">Dark Mode</span>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
