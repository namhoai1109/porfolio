import Bartender from "@/assets/svg/Bartender";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import geekUpLogo from "@/assets/img/geek-up-logo.jpg";
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
      link: "/",
    },
    {
      icon: <LinkedinOutlined />,
      link: "/",
    },
    {
      icon: <MailOutlined />,
      link: "/",
    },
    {
      icon: <FacebookOutlined />,
      link: "/",
    },
  ],
};

export const experienceData = [
  {
    time: "April 2023 - June 2023",
    position: "Fullstack developer",
    business: "Freelance",
    desc: "Designed UI and built a management website, and a landing page for a pub",
    img: <Bartender />,
    technicalStack: [
      {
        name: "NextJS",
        icon: <NextJSIcon />,
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
    desc: "Worked in an Agile/Scrum model, captured insights from Product Analyst and built website to reach the business goal",
    img: <Image src={geekUpLogo} alt="geek-up-logo" />,
    technicalStack: [
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
    time: "April 2022 - April 2023",
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
    position: "Front-end developer, Designer",
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
    ],
  },
  {
    time: "Sep 2021 - Dec 2021",
    position: "Front-end developer, Designer",
    business: "Freelance",
    desc: "Built mobile app to manage a restaurant",
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
    ],
  },
];
