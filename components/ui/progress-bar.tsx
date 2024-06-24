import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      width: `${scrollPercentage}%`,
      transition: { duration: 0.2 },
    });
  }, [scrollPercentage, controls]);

  return (
    <motion.div
      className="h-2 bg-tertiary-light dark:bg-tertiary-dark fixed top-0 left-0 z-50"
      initial={{ width: "0%" }}
      animate={controls}
    ></motion.div>
  );
};

export default ProgressBar;
