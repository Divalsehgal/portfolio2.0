import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  landmarkgroup,
  nineleaps,
  gmail,
  linkedin,
  stackoverflow,
  instagram,
  github,
  project1,
  project2,
  project3,
} from "../public/assets";
import type {
  TechnologyProps,
  UpcomingLinkProps,
  NavLinkProps,
  ExperienceProps,
  SocialLinkProps,
  EducationProps,
  CertificationProps,
  ProjectProps,
  QuestionProps,
  PortfolioLinkProps,
} from "@/types/index";

const navLinks: NavLinkProps[] = [
  {
    id: "home",
    title: "Home",
    linkUrl: "/",
  },
  {
    id: "practice",
    title: "Practice",
    linkUrl: "/practice",
  },
  {
    id: "legacy",
    title: "legacy",
    linkUrl: "https://resume-50c34.web.app/",
  },
];

const upcomingLinks: UpcomingLinkProps[] = [
  {
    id: "blog",
    title: "Blog",
    linkUrl: "/blog",
    disabled: true,
  },
];

const technologies: TechnologyProps[] = [
  { id: 1, name: "HTML 5", icon: html },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 5,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 8,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 10,
    name: "git",
    icon: git,
  },
  {
    id: 11,
    name: "figma",
    icon: figma,
  },
  {
    id: 12,
    name: "docker",
    icon: docker,
  },
];

const experiences: ExperienceProps[] = [
  {
    id: 1,
    title: "Sr. Frontend Engineer",
    company_name: "LandmarkGroup",
    icon: landmarkgroup,
    date: "Oct 21 - present",
    points: [
      "Led front-end activities for Landmark groups (HomeCentre, LifeStyle, MaxFashion), boosting user engagement by 30%.",
      "Managed Shukran Delivery Project, achieving 25% increase in on-time deliveries through store integration.",
      "Optimized search capabilities in Hybris Java backend for 20% decrease in bounce rate using Algolia APIs and performance optimization techniques.",
    ],
  },
  {
    id: 2,
    title: "MTS-3",
    company_name: "Nineleaps",
    icon: nineleaps,
    date: "Jun 2019 - Oct 2021",
    points: [
      "Developed a React.js and Redux-based shuttle service app with ride-sharing and seat allocation.",
      "Enhanced operational efficiency by implementing admin dashboard features for cab bookings and allocations.",
      "Created KYC-dashboard for Stanza Living and role-based routing for Narayan Edtech, improving management and user experience.",
    ],
  },
];

const education: EducationProps[] = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    institution: "Jaypee University Of Informtaion University",
    date: "2015-2019",
    grade: "7.0",
  },
  {
    id: 2,
    title: "Senior Secondary (12th Grade) - Non-Medical",
    institution: "Him Academy Public School",
    date: "2014-2015",
    grade: "86%",
  },
  {
    id: 3,
    title: "Secondary (10th Grade)",
    institution: "Him Academy Public School",
    date: "2012-2013",
    grade: "92%",
  },
];

const socialLinks: SocialLinkProps[] = [
  {
    id: 1,
    platform: "GitHub",
    link: "https://github.com/Divalsehgal",
    iconUrl: github,
  },
  {
    id: 2,
    platform: "Stack Overflow",
    link: "https://stackoverflow.com/users/10756134/dival-sehgal",
    iconUrl: stackoverflow,
  },
  {
    id: 3,
    platform: "Gmail",
    link: "mailto:sehgaldival@gmail.com",
    iconUrl: gmail,
  },
  {
    id: 4,
    platform: "Linkedin",
    link: "https://www.linkedin.com/in/divalsehgal/",
    iconUrl: linkedin,
  },
  {
    id: 5,
    platform: "Instagram",
    link: "https://www.instagram.com/divalsehgal/",
    iconUrl: instagram,
  },
];

const certifications: CertificationProps[] = [
  {
    id: 1,
    link: "https://www.hackerrank.com/certificates/af0a7e164183",
    name: "Frontend Developer (React) Certificate",
  },
  {
    id: 2,
    name: "JavaScript algorithms and Data Structures",
    link: "https://www.freecodecamp.org/certification/dival/javascript-algorithms-and-data-structures",
  },

  {
    id: 3,
    name: "JavaScript (Basic)",
    link: "https://www.hackerrank.com/certificates/d5c77201a992",
  },
  {
    id: 4,
    name: "React-Redux Bootcamp certification",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f7eab77e-0b34-4973-a5ee-f387a8daa459.pdf",
  },
  {
    id: 5,
    name: "React-Native Practical guide certification",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e6f1923a-a5c8-47bb-ba0e-cbbf98c2523b.pdf",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    name: "Excel-plus",
    description:
      "Built with Vanilla JavaScript, our Excel clone project features a familiar spreadsheet interface, supporting cell editing, formulas, and formatting",
    tags: [
      {
        name: "vanillajs",
      },
      {
        name: "dom manipulation",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Divalsehgal/excel-plus",
  },
  {
    id: 2,
    name: "Multiplayer-RPC",
    description:
      "Socket-powered Rock Paper Scissors game, hosting two players at a time while others eagerly await their turn",
    tags: [
      {
        name: "react",
      },
      {
        name: "socket",
      },
      {
        name: "typescript",
      },
      {
        name: "node",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Divalsehgal/mutiplayer-rpc",
  },
  {
    id: 3,
    name: "Ticket Generation",
    description:
      "Experience streamlined ticket management with our Next.js project, powered by MongoDB. Seamlessly create, update, and delete tickets for efficient task handling. Enhance collaboration and productivity with this intuitive CRUD application",
    tags: [
      {
        name: "nextjs",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Divalsehgal/ticket-system",
  },
  {
    id: 4,
    name: "Hotel-Booking",
    description: "full stack hotel-booking application ",
    tags: [
      {
        name: "nodejs",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
      {
        name: "typescript",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Divalsehgal/holiday.git",
  },
];

const questionsArray: (QuestionProps | undefined)[] = [
  {
    id: "1",
    file: "Type Writer Effect",
    linkUrl: "type-writer-effect",
  },
  {
    id: "2",
    file: "Hacker News",
    linkUrl: "hacker-news",
  },
  {
    id: "3",
    file: "Form Validation",
    linkUrl: "form-validation",
  },
  {
    id: "4",
    file: "All CheckBoxes",
    linkUrl: "all-checkboxes",
  },
  {
    id: "5",
    file: "CountDown Timer",
    linkUrl: "timer",
  },
  {
    id: "6",
    file: "Transfer List",
    linkUrl: "transfer-list",
  },
  {
    id: "7",
    file: "Mention Box",
    linkUrl: "mention-box",
  },
  {
    id: "8",
    file: "Folder Structure",
    linkUrl: "folder-structure",
  },
  {
    id: "9",
    file: "Comment Reply Box",
    linkUrl: "comment-reply-box",
  },
];

const portfolioLinks: PortfolioLinkProps[] = [
  {
    id: 1,
    name: "Work",
    link: "work-experience",
  },
  {
    id: 2,
    name: "Projects",
    link: "projects",
  },
  {
    id: 3,
    name: "Education",
    link: "education",
  },
  {
    id: 4,
    name: "Certification",
    link: "certifications",
  },
  {
    id: 5,
    name: "Technical",
    link: "technical",
  },
  {
    id: 6,
    name: "Social",
    link: "social",
  },
];

export {
  technologies,
  experiences,
  projects,
  education,
  socialLinks,
  certifications,
  questionsArray,
  portfolioLinks,
  upcomingLinks,
  navLinks,
};
