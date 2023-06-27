import { SKILL_NAME } from "@/constants/page";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { motion } from "framer-motion";
import { skillsData } from "@/data";

function SkillPage() {
  return (
    <Element
      name={SKILL_NAME}
      className="w-full h-screen flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <h1 className="text-4xl font-bold mb-12 text-center">
          SKILLS & ABILITIES
        </h1>
        <div className="flex flex-wrap">
          {skillsData.map((item, index) => {
            return (
              <div className="w-[12.5%] p-2" key={item.name}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="w-full h-32 rounded-lg flex flex-col items-center justify-center skill-item"
                >
                  <div className="w-1/3">{item.icon}</div>
                  <span className="text-lg">{item.name}</span>
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
