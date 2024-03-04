import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    linkUrl: "/",
  },
  {
    id: "blog",
    title: "Blog",
    linkUrl: "/blog",
  },
  {
    id: "practice",
    title: "Practice",
    linkUrl: "/practice",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr. Frontend Engineer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 21 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "MTS-3",
    company_name: "Nineleaps",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Oct 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  }
];

const education = [
  {
    id:1,
    title: "B.Tech in Computer Science",
    institution: "Your University Name",
    date: "2015-2019",
    grade: "7 Pointer",

  },
  {id:2,
    title: "Senior Secondary (12th Grade) - Non-Medical",
    institution: "Your School Name",
    date: "2014-2015",
    grade: "86%",
  },
  {
    id:3,
    title: "Secondary (10th Grade)",
    institution: "Your School Name",
    date: "2012-2013",
    grade: "92%",

  }]
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const socialLinks = [
  {
    platform: "Instagram",
    link: "https://www.instagram.com/your_username/",
    iconUrl: creator,
  },
  {
    platform: "GitHub",
    link: "https://github.com/your_username",
    iconUrl: web,
  },
  {
    platform: "Stack Overflow",
    link: "https://stackoverflow.com/users/your_user_id",
    iconUrl: javascript,
  },
  {
    platform: "Gmail",
    link: "mailto:your_email@example.com",
    iconUrl: mongodb,
  },
];

const certifications = [
  {
    id: 1,
    name: "JavaScript Certification",
    link: "https://www.example.com/javascript-cert",
    description:
      "Certification in JavaScript programming language covering advanced concepts such as closures, prototypes, and asynchronous programming.",
  },
  {
    id: 2,
    name: "Python for Data Science",
    link: "https://www.example.com/python-data-science-cert",
    description:
      "Certification course covering Python programming language for data science applications including data manipulation, visualization, and analysis.",
  },

  {
    id: 3,
    name: "AWS Certified Solutions Architect",
    link: "https://www.example.com/aws-certified-solutions-architect",
    description:
      "Certification demonstrating proficiency in designing distributed systems and applications on the Amazon Web Services (AWS) platform.",
  },
  {
    id: 4,
    name: "AWS Certified Solutions Architect",
    link: "https://www.example.com/aws-certified-solutions-architect",
    description:
      "Certification demonstrating proficiency in designing distributed systems and applications on the Amazon Web Services (AWS) platform.",
  },
  // Add more certifications as needed
];

const projects = [
  {
    id: 1,
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    id: 3,
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  socialLinks,
  certifications
};
