import { SKILL_NAME } from "@/constants/page";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { useInView } from "framer-motion";
import { skillsData } from "@/data";
import { useContext, useRef } from "react";
import { WidthViewportContext } from "../CustomLayout/CustomLayout";

function SkillPage() {
  const viewPort = useContext(WidthViewportContext);
  const isMobile = viewPort.width <= 600;

  const skillsRef = useRef();
  const skillsInView = useInView(skillsRef);

  return (
    <Element
      name={SKILL_NAME}
      className="w-full h-screen flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold mb-12 max-lg:mb-6 text-center">
          SKILLS & ABILITIES
        </h1>
        <div ref={skillsRef} className="flex flex-wrap">
          {skillsData.map((item, index) => {
            return (
              <div
                className="w-[12.5%] max-lg:w-1/6 max-md:w-1/5 max-sm:w-1/4 p-2 max-md:p-1"
                key={item.name}
              >
                <div
                  style={{
                    "--duration": "0.5s",
                    "--delay": `${0.5 + index * 0.2}s`,
                  }}
                  className={`w-full h-32 max-lg:h-28 max-md:h-24 max-sm:h-16 rounded-lg flex flex-col items-center justify-center skill-item trans-effect duration-custom delay-custom from-top-10 ${
                    skillsInView ? "to-start" : ""
                  }`}
                >
                  <div className="w-1/3">{item.icon}</div>
                  <span className="text-lg max-lg:text-base max-md:text-sm max-sm:text-xs text-center">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </LayoutContent>
    </Element>
  );
}

export default SkillPage;
