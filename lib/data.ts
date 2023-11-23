import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesDataChrono = [
  {
    cardSubtitle: "Internship",
    location: "Dhaka, Bangladesh",
    cardTitle: "Ultra-x bd ltb.",
    cardDetailedText:
      "I was leading a team for IP-Telephony Development. They arranged interview with Japanese companies and found a job as a Software Engineer.",
    icon: React.createElement(LuGraduationCap),
    title: "2019",
  },
  {
    cardSubtitle: "Software Engineer (Remote)",
    location: "Dhaka, Bangladesh",
    cardTitle: "The Sun strategic solution inc.",
    cardDetailedText:
      "I worked as a software engineer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    title: "2020 - 2022",
  },
  {
    cardSubtitle: "Software Engineer",
    location: "Romania",
    cardTitle: "Alpha DevOps SRL",
    cardDetailedText:
      "I'm now a full-stack developer was working as a remote software engineer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    title: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Get Hired!",
    description:
      "I worked as a full-stack developer on this project for 2 years for a large Switch HR company. Job seekers can get through different stages and ger hired.",
    tags: ["React", "Tailwind", 'Node.JS', "Hapi.js", "TypeORM", "PostgreSQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Economic calendar and Track Forex investments",
    description:
      "Create a filterable list for economic data and Track and adjust Forex investment.",
    tags: ["Angular", "Angular Material UI", "TypeScript", "Nest.js", "Tailwind", "PostgreSQL", "Azure DevOps"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Digital Ads Report",
    description:
      "A internal web app for quick analytics on convertion to call from money spent on digital Ads platform and their corresponding result.",
    tags: ["Vue.js", "Tailwind", "Laravel", "MySQL", "AWS EC2", "AWS Beanstalks"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "TanStack Query",
  "Git",
  "Tailwind CSS",
  "Angular Material UI",
  "MUI",
  "Prisma",
  "Drizzle",
  "Node.js",
  "Nest.js",
  "Express",
  "PostgreSQL",
  "PHP",
  "Laravel",
  "Docker",
  "AWS",
  "Vercel",
  "Framer Motion",
] as const;
