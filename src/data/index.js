import Bartender from "@/assets/svg/Bartender";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import geekUpLogo from "@/assets/img/geek-up-logo.jpg";
import hcmusImg from "@/assets/img/hcmus.jpg";
import lyonImg from "@/assets/img/lyon1.jpg";
import mindXLogo from "@/assets/img/mindx-logo.png";
import pencilLogo from "@/assets/img/pencil-philosophy-logo.png";
import Restaurant from "@/assets/svg/Restaurant";
import NextJSIcon from "@/assets/svg/NextjsIcon";
import SupabaseIcon from "@/assets/svg/SupabaseIcon";
import AntdIcon from "@/assets/svg/AntdIcon";
import RefineJSIcon from "@/assets/svg/RefineJSIcon";
import NestJSIcon from "@/assets/svg/NestJSIcon";
import TypeORMIcon from "@/assets/svg/TypeORMIcon";
import AWSIcon from "@/assets/svg/AWSIcon";
import DockerIcon from "@/assets/svg/DockerIcon";
import NginxIcon from "@/assets/svg/NginxIcon";
import PostgreIcon from "@/assets/svg/PostgreIcon";
import HTMLIcon from "@/assets/svg/HTMLIcon";
import CSSIcon from "@/assets/svg/CSSIcon";
import JSIcon from "@/assets/svg/JSIcon";
import JavaIcon from "@/assets/svg/JavaIcon";
import SQLiteIcon from "@/assets/svg/SQLiteIcon";
import AndroidStudioIcon from "@/assets/svg/AndroidStudioIcon";
import VercelIcon from "@/assets/svg/VercelIcon";
import FigmaIcon from "@/assets/svg/FigmaIcon";
import ReactIcon from "@/assets/svg/ReactIcon";
import NodeIcon from "@/assets/svg/NodeIcon";
import ExpressIcon from "@/assets/svg/ExpressIcon";
import ReduxIcon from "@/assets/svg/ReduxIcon";
import SassIcon from "@/assets/svg/SassIcon";
import LessIcon from "@/assets/svg/LessIcon";
import MySQLIcon from "@/assets/svg/MySQLIcon";
import SQLServerIcon from "@/assets/svg/SQLServerIcon";
import GitIcon from "@/assets/svg/GitIcon";
import TypescriptIcon from "@/assets/svg/TypescriptIcon";
import PrismaIcon from "@/assets/svg/PrismaIcon";
import GithubIcon from "@/assets/svg/GithubIcon";
import CppIcon from "@/assets/svg/CppIcon";
import TailwindIcon from "@/assets/svg/TailwindIcon";

export const homeData = {
  name: "Vu Hoai Nam",
  positions: [
    "Software Engineer",
    1000,
    "Frontend Developer",
    1000,
    "Backend Developer",
    1000,
  ],
  summary:
    "I'm a web developer based in Ho Chi Minh City, Vietnam. I have a passion for software development and want to be a software engineer in the future.",

  socials: [
    {
      icon: <GithubOutlined />,
      link: "https://github.com/namhoai1109",
    },
    {
      icon: <LinkedinOutlined />,
      link: "https://www.linkedin.com/in/namhoai/",
    },
    {
      icon: <MailOutlined />,
      link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtbpGfVVzpspdWvWpkMzPDvBTfPwghLBjrdBvvwKknXPDXNdtxXvmRMJKHVxxPJtWgZg",
    },
    {
      icon: <FacebookOutlined />,
      link: "https://www.facebook.com/profile.php?id=100031909264801",
    },
  ],
};

export const experienceData = [
  {
    time: "Apr 2023 - Jun 2023",
    position: "Fullstack developer",
    business: "Freelance",
    desc: "Designed the UI, built a landing page, and built a website to support a customer managing a pub",
    img: <Bartender />,
    technicalStack: [
      {
        name: "ReactJS",
        icon: <ReactIcon />,
      },
      {
        name: "NextJS",
        icon: <NextJSIcon />,
      },
      {
        name: "TailwindCSS",
        icon: <TailwindIcon />,
      },
      {
        name: "Ant design",
        icon: <AntdIcon />,
      },
      {
        name: "Vercel",
        icon: <VercelIcon />,
      },
      {
        name: "Supabase",
        icon: <SupabaseIcon />,
      },
    ],
  },
  {
    time: "Feb 2023 - May 2023",
    position: "Frontend Intern",
    business: "Geek Up",
    desc: "Worked in an Agile/Scrum model, captured insights from Product Analyst and built a website to reach the business goal",
    img: <Image src={geekUpLogo} alt="geek-up-logo" />,
    technicalStack: [
      {
        name: "ReactJS",
        icon: <ReactIcon />,
      },
      {
        name: "Ant Design Pro",
        icon: <AntdIcon />,
      },
      {
        name: "RefineJS",
        icon: <RefineJSIcon />,
      },
      {
        name: "NestJS",
        icon: <NestJSIcon />,
      },
      {
        name: "TypeORM",
        icon: <TypeORMIcon />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgreIcon />,
      },
      {
        name: "Amazon Web Services",
        icon: <AWSIcon />,
      },
      {
        name: "Docker",
        icon: <DockerIcon />,
      },
      {
        name: "Nginx",
        icon: <NginxIcon />,
      },
    ],
  },
  {
    time: "Apr 2022 - Apr 2023",
    position: "Technical Mentor",
    business: "MindX Technology School",
    desc: "Instructed algorithms, programming mindset, games and building web apps",
    img: <Image src={mindXLogo} alt="geek-up-logo" />,
    technicalStack: [
      {
        name: "HTML",
        icon: <HTMLIcon />,
      },
      {
        name: "CSS",
        icon: <CSSIcon />,
      },
      {
        name: "Javascript",
        icon: <JSIcon />,
      },
    ],
  },
  {
    time: "Feb 2022 - May 2022",
    position: "Front-end developer Designer",
    business: "Pencil Philosophy",
    desc: "Discussed about philosophical problems and built mobile app",
    img: <Image src={pencilLogo} alt="geek-up-logo" />,
    technicalStack: [
      {
        name: "Java",
        icon: <JavaIcon />,
      },
      {
        name: "SQLite",
        icon: <SQLiteIcon />,
      },
      {
        name: "Android Studio",
        icon: <AndroidStudioIcon />,
      },
      {
        name: "Figma",
        icon: <FigmaIcon />,
      },
    ],
  },
  {
    time: "Sep 2021 - Dec 2021",
    position: "Front-end developer Designer",
    business: "Freelance",
    desc: "Built a mobile app that supports a customer managing a restaurant and handling orders",
    img: <Restaurant />,
    technicalStack: [
      {
        name: "Java",
        icon: <JavaIcon />,
      },
      {
        name: "SQLite",
        icon: <SQLiteIcon />,
      },
      {
        name: "Android Studio",
        icon: <AndroidStudioIcon />,
      },
      {
        name: "Figma",
        icon: <FigmaIcon />,
      },
    ],
  },
];

export const skillsData = [
  {
    name: "HTML",
    icon: <HTMLIcon />,
  },
  {
    name: "CSS",
    icon: <CSSIcon />,
  },
  {
    name: "SASS",
    icon: <SassIcon />,
  },
  {
    name: "LESS",
    icon: <LessIcon />,
  },
  {
    name: "Java",
    icon: <JavaIcon />,
  },
  {
    name: "Javascript",
    icon: <JSIcon />,
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    name: "C++",
    icon: <CppIcon />,
  },
  {
    name: "ReactJS",
    icon: <ReactIcon />,
  },
  {
    name: "Ant Design Pro",
    icon: <AntdIcon />,
  },
  {
    name: "RefineJS",
    icon: <RefineJSIcon />,
  },
  {
    name: "NextJS",
    icon: <NextJSIcon />,
  },
  {
    name: "Redux",
    icon: <ReduxIcon />,
  },
  {
    name: "NodeJS",
    icon: <NodeIcon />,
  },
  {
    name: "ExpressJS",
    icon: <ExpressIcon />,
  },
  {
    name: "MySQL",
    icon: <MySQLIcon />,
  },
  {
    name: "SQL Server",
    icon: <SQLServerIcon />,
  },
  {
    name: "Prisma ORM",
    icon: <PrismaIcon />,
  },
  {
    name: "Vercel",
    icon: <VercelIcon />,
  },
  {
    name: "Supabase",
    icon: <SupabaseIcon />,
  },
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "Github",
    icon: <GithubIcon />,
  },
  {
    name: "Figma",
    icon: <FigmaIcon />,
  },
];

export const educationData = [
  {
    name: "University of Science, Ho Chi Minh, Vietnam",
    time: "2020 - 2024",
    major: "Information Technology",
    image: hcmusImg,
    status: "Pursuing",
    rank: {
      name: "Top 3 universities in the field of programming in the world in 2016 according to Hackerrank",
      link: "https://www.hackerrank.com/blog/which-universities-have-the-best-student-developers/",
    },
  },
  {
    name: "Claude Bernard Lyon 1 University, Lyon, France",
    time: "2022 - 2023",
    major: "Information Technology",
    image: lyonImg,
    status: "Graduating soon",
    rank: {
      name: "Top 17 universities in France according to QS World University Rankings 2023",
      link: "https://www.universityrankings.ch/results?ranking=QS&region=World&year=2023&q=France",
    },
  },
];
