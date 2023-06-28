import { BLACK_COLOR, HOME_NAME, WHITE_COLOR } from "@/constants/page";
import { Element } from "react-scroll";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import LayoutContent from "../LayoutContent";
import { homeData } from "@/data";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import scrollDownGif from "@/assets/gif/scroll-down.gif";
import avatar from "@/assets/img/avatar.png";

const particlesOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  pauseOnOutsideViewport: true,
  background: {
    color: {
      value: WHITE_COLOR,
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: BLACK_COLOR,
    },
    links: {
      color: BLACK_COLOR,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 2,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 5 },
    },
  },
  detectRetina: true,
};

const OpenTag = ({ children, inline = false }) => (
  <div
    className={`${
      inline ? "inline-block" : "block"
    } font-bold text-lg max-lg:text-base max-sm:text-sm`}
  >
    {"<"}
    <span className="tag-color text-lg max-lg:text-base max-sm:text-sm">
      {children}
    </span>
    {">"}
  </div>
);

const CloseTag = ({ children, inline = false }) => (
  <div
    className={`${
      inline ? "inline-block" : "block"
    } font-bold text-lg max-lg:text-base max-sm:text-sm`}
  >
    {"</"}
    <span className="tag-color text-lg max-lg:text-base max-sm:text-sm">
      {children}
    </span>
    {">"}
  </div>
);

function HomePage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Element
      name={HOME_NAME}
      className="w-full h-screen flex items-center justify-center relative"
    >
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 _bg-white flex items-center rounded-full overflow-hidden">
        <div className="w-8 max-lg:w-7 max-sm:w-6">
          <Image src={scrollDownGif} alt="scroll-down-gif" width="100%" />
        </div>
        <span className="text-lg max-lg:text-base max-sm:text-sm font-bold mr-2">
          Scroll down
        </span>
      </div>
      <LayoutContent>
        <div className="flex max-sm:flex-col-reverse items-center justify-around">
          <div className="w-1/2 max-sm:w-full">
            <motion.div
              // initial={{ opacity: 0, x: -100 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 1.6 }}
              className="glassmorphism p-5 rounded-xl"
            >
              <OpenTag>div</OpenTag>
              <div>
                &emsp;
                <OpenTag inline>span</OpenTag>
                <span className="text-xl max-lg:text-lg max-sm:text-base">
                  Hi, I&apos;m
                </span>
                <CloseTag inline>span</CloseTag>
              </div>
              <div>
                &emsp;
                <OpenTag inline>h1</OpenTag>
                <span className="text-4xl max-lg:text-2xl max-sm:text-xl font-bold">
                  {homeData.name}
                </span>
                <CloseTag inline>h1</CloseTag>
              </div>
              <div>
                &emsp;
                <OpenTag inline>h2</OpenTag>
                <TypeAnimation
                  sequence={homeData.positions}
                  wrapper="span"
                  speed={50}
                  className="text-2xl max-lg:text-lg max-sm:text-base font-bold"
                  repeat={Infinity}
                />
                <CloseTag inline>h2</CloseTag>
              </div>
              <div>
                &emsp; <OpenTag inline>p</OpenTag>{" "}
                <span className="text-lg max-lg:text-base max-sm:text-sm">
                  {homeData.summary}
                </span>
                <CloseTag inline>p</CloseTag>
              </div>
              <CloseTag>div</CloseTag>
            </motion.div>

            <section className="flex mt-4 max-sm:mt-2">
              {homeData.socials.map((social, index) => (
                <motion.span
                  key={social.link}
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.6 + index * 0.2 }}
                >
                  <Link
                    href={social.link}
                    target="_blank"
                    className="text-xl max-lg:text-base max-sm:text-sm flex items-center justify-center p-2 glassmorphism rounded-full mr-2 text-neutral-400 hover:text-neutral-950"
                  >
                    {social.icon}
                  </Link>
                </motion.span>
              ))}
            </section>
          </div>
          <div className="w-1/3 max-sm:w-1/2 max-sm:mb-4 flex justify-center">
            <div className="border-avatar overflow-hidden">
              <Image
                src={avatar}
                alt="avatar"
                className="scale-110"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </LayoutContent>
      <Particles
        className="-z-10 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        options={particlesOptions}
      />
    </Element>
  );
}

export default HomePage;
