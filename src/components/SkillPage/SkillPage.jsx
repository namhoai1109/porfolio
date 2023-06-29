import { SKILL_NAME } from "@/constants/page";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { motion } from "framer-motion";
import { skillsData } from "@/data";
import { useContext } from "react";
import { WidthViewportContext } from "../CustomLayout/CustomLayout";

const skillVar = {
  init: {
    opacity: 0,
    y: -10,
  },
  inView: {
    opacity: 1,
    y: 0,
  },
};

function SkillPage() {
  const viewPort = useContext(WidthViewportContext);
  const isMobile = viewPort.width <= 600;
  return (
    <Element
      name={SKILL_NAME}
      className="w-full h-screen flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold mb-12 max-lg:mb-6 text-center">
          SKILLS & ABILITIES
        </h1>
        <div className="flex flex-wrap">
          {skillsData.map((item, index) => {
            return (
              <div
                className="w-[12.5%] max-lg:w-1/6 max-md:w-1/5 max-sm:w-1/4 p-2 max-md:p-1"
                key={item.name}
              >
                <motion.div
                  variants={isMobile ? {} : skillVar}
                  initial="init"
                  whileInView="inView"
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="w-full h-32 max-lg:h-28 max-md:h-24 max-sm:h-16 rounded-lg flex flex-col items-center justify-center skill-item"
                >
                  <div className="w-1/3">{item.icon}</div>
                  <span className="text-lg max-lg:text-base max-md:text-sm max-sm:text-xs text-center">
                    {item.name}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </LayoutContent>
    </Element>
  );
}

export default SkillPage;
