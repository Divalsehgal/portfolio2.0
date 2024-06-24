import { portfolioLinks } from "@/constants";
import { motion } from "framer-motion";
import type { PortfolioLinkProps } from "@/types/index";

export default function AboutComponent() {
 return (
   <motion.div
     className="section-items w-10/12 h-full"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5 }}
   >
     {/* Introduction */}
     <motion.div
       className="text-center justify-center flex flex-col gap-4"
       initial={{ y: -20, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5 }}
     >
       <motion.div className="text-2xl font-bold">
         My Name is Dival Sehgal
       </motion.div>
       <motion.div
         className="text-center"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.3, duration: 0.5 }}
       >
         I am a full stack developer having 4+ years of experience. Welcome to
         my corner of the web, where I share my insights, experiences, and
         projects.
       </motion.div>
       <motion.div
         className="flex gap-4 flex-wrap justify-center"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.6, duration: 0.5 }}
       >
         {portfolioLinks.map((m) => {
           return <LinkItem {...m} key={m.id} />;
         })}
       </motion.div>
     </motion.div>
   </motion.div>
 );
}
 const LinkItem = (m: Readonly<PortfolioLinkProps>) => {
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
     <motion.button
       key={m.id}
       onClick={scrollToSection}
       className="text-xl border-2 p-1 border-secondary-light dark:border-secondary-dark text-tertiary-light dark:text-tertiary-dark"
       whileHover={{ scale: 1.1 }}
     >
       {m?.name}
     </motion.button>
   );
 };

