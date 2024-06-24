"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function SiteFooter() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return (
      <motion.footer
        className="py-6 text-tertiary-light dark:text-tertiary-dark md:p-8 bg-primary-light dark:bg-primary-dark md:py-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
          <div className="flex flex-col text-center md:text-center md:justify-center">
            <p className="mb-2">
              © 2024 Dival Tech Journey. All rights reserved.
            </p>
            <p className="text-xs">Designed and developed with ❤️ by Dival</p>
          </div>
        </div>
      </motion.footer>
    );
  }

  return null;
}
