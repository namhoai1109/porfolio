import { HOME_NAME } from "@/constants/page";
import { Element } from "react-scroll";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import LayoutContent from "../LayoutContent/LayoutContent";
import { Col, Row } from "antd";
import { homeData } from "@/data/home";
import { TypeAnimation } from "react-type-animation";

const particlesOptions = {
  background: {
    color: {
      value: "#fdfdfd",
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
      value: "#121212",
    },
    links: {
      color: "#121212",
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
      speed: 1,
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
  <div className={`${inline ? "inline-block" : "block"} font-bold text-lg`}>
    {"<"}
    <span className="text-purple text-lg">{children}</span>
    {">"}
  </div>
);

const CloseTag = ({ children, inline = false }) => (
  <div className={`${inline ? "inline-block" : "block"} font-bold text-lg`}>
    {"</"}
    <span className="text-purple text-lg">{children}</span>
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
      className="w-full h-screen flex items-center justify-center"
    >
      <LayoutContent>
        <Row justify="space-between" className="items-center">
          <Col span={12}>
            <section className="glassmorphism p-5">
              <OpenTag>div</OpenTag>
              <div>
                &emsp;
                <OpenTag inline>span</OpenTag>
                <span className="text-xl">Hi, I&apos;m</span>
                <CloseTag inline>span</CloseTag>
              </div>
              <div>
                &emsp;
                <OpenTag inline>h1</OpenTag>
                <span className="text-4xl font-bold">{homeData.name}</span>
                <CloseTag inline>h1</CloseTag>
              </div>
              <div>
                &emsp;
                <OpenTag inline>h2</OpenTag>
                <TypeAnimation
                  sequence={homeData.positions}
                  wrapper="span"
                  speed={50}
                  className="text-2xl font-bold"
                  repeat={Infinity}
                />
                <CloseTag inline>h2</CloseTag>
              </div>
              <div>
                &emsp; <OpenTag inline>p</OpenTag>{" "}
                <span className="text-lg">{homeData.summary}</span>
                <CloseTag inline>p</CloseTag>
              </div>
              <CloseTag>div</CloseTag>
            </section>
          </Col>
          <Col span={8}>
            <div className="border-avatar"></div>
          </Col>
        </Row>
      </LayoutContent>
      <Particles
        className="-z-10"
        init={particlesInit}
        options={particlesOptions}
      />
    </Element>
  );
}

export default HomePage;
