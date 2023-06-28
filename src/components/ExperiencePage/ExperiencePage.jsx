import { BLACK_COLOR, EXPERIENCE_NAME } from "@/constants/page";
import { experienceData } from "@/data";
import { Timeline, Tooltip, Typography } from "antd";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { WidthViewportContext } from "../CustomLayout/CustomLayout";

const itemsVar = {
  init: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
  },
};

const getItems = (isMobile, currentExp, handleClickTimeline) => {
  return experienceData.map((item, index) => {
    return {
      color: BLACK_COLOR,
      children: (
        <motion.div
          variants={isMobile ? {} : itemsVar}
          initial="init"
          whileInView="inView"
          transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          className={`text-lg max-lg:text-base max-[800px]:text-sm max-sm:text-xs p-1 ${
            index === currentExp
              ? "_text-black font-semibold md:font-bold"
              : "text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleClickTimeline(index)}
        >
          <div>{item.time}</div>
          <div>{item.position}</div>
        </motion.div>
      ),
    };
  });
};

const cardVar = {
  init: {
    opacity: 0,
    x: 100,
  },
  inView: {
    opacity: 1,
    x: 0,
  },
};

function ExperiencePage() {
  const [currentExp, setCurrentExp] = useState(0);
  const [currentExpData, setCurrentExpData] = useState(experienceData[0]);
  const viewPort = useContext(WidthViewportContext);
  const isSmall = viewPort.width <= 900;
  const isMobile = viewPort.width <= 600;

  const handleClickTimeline = (index) => {
    setCurrentExp(index);
    setCurrentExpData(experienceData[index]);
  };

  return (
    <Element
      name={EXPERIENCE_NAME}
      className="w-full h-screen flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold mb-12">
            WORK EXPERIENCE
          </h1>
          <div className="w-full flex justify-around">
            <div className="w-5/12 max-md:w-1/2">
              <Timeline
                mode={isSmall ? "left" : "alternate"}
                items={getItems(isMobile, currentExp, handleClickTimeline)}
              />
            </div>
            <div className="w-5/12">
              <motion.div
                variants={isMobile ? {} : cardVar}
                initial="init"
                whileInView="inView"
                transition={{ duration: 1, delay: 2.5 }}
                className="h-full max-md:h-fit w-full rounded-lg neubrutalism"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-1/2 h-1/2">{currentExpData.img}</div>
                  <section className="w-full p-3">
                    <h2 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extrabold">
                      {currentExpData.business}
                    </h2>
                    <Typography.Paragraph
                      ellipsis={{
                        rows: 1,
                        symbol: "...",
                        tooltip: currentExpData.position,
                      }}
                      className="text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-bold"
                    >
                      {currentExpData.position}
                    </Typography.Paragraph>
                    <p className="text-base max-lg:text-sm max-md:text-xs">
                      {currentExpData.desc}
                    </p>
                    <div className="flex flex-wrap justify-center mt-3">
                      {currentExpData.technicalStack.map((item) => {
                        return (
                          <Tooltip
                            key={item.name}
                            title={item.name}
                            placement="top"
                          >
                            <div className="w-8 max-lg:w-7 max-md:w-6 mb-1 max-sm:w-5 aspect-square rounded-full mr-3">
                              {item.icon}
                            </div>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </section>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </LayoutContent>
    </Element>
  );
}

export default ExperiencePage;
