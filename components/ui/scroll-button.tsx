"use client";
import { MoveUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 z-50 right-4 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="border-2 bg-secondary-light border-primary-light dark:border-primary-dark hover:bg-primary-light text-tertiary-light dark:text-tertiary-dark
            dark:bg-secondary-dark dark:hover-bg-primary-dark
        font-bold py-2 px-4 rounded"
      >
        <MoveUp />
      </button>
    </div>
  );
};

export default ScrollButton;
