import { StaticImageData } from "next/image";

type NavLinkProps = {
    id: string;
    title: string;
    linkUrl: string;
}

type UpcomingLinkProps = {
    id: string;
    title: string;
    linkUrl: string;
    disabled: boolean;
}

type TechnologyProps = {
    id: number;
    name: string;
    icon: StaticImageData;
    years?: string;
}

type ExperienceProps = {
    id: number;
    title: string;
    company_name: string;
    icon: StaticImageData; // Assuming icon is a URL or a path
    date: string;
    points: string[];
}

type EducationProps = {
    id: number;
    title: string;
    institution: string;
    date: string;
    grade: string;
}

type SocialLinkProps = {
    id: number;
    platform: string;
    link: string;
    iconUrl: StaticImageData; // Assuming iconUrl is a URL or a path
}

type CertificationProps = {
    id: number;
    link: string;
    name: string;
}

type ProjectTagProps = {
    name: string;
}

type ProjectProps = {
    id: number;
    name: string;
    description: string;
    tags: ProjectTagProps[];
    image: StaticImageData; // Assuming image is a URL or a path
    source_code_link: string;
}

type QuestionProps = {
    id: string;
    file: string;
    linkUrl: string;
}

type PortfolioLinkProps = {
    id: number;
    name: string;
    link: string;
}


export type {
    UpcomingLinkProps,
    ProjectTagProps,
    NavLinkProps,
    PortfolioLinkProps,
    QuestionProps,
    TechnologyProps,
    ExperienceProps,
    EducationProps,
    SocialLinkProps,
    CertificationProps,
    ProjectProps,
};
