import { BLACK_COLOR, EXPERIENCE_NAME } from "@/constants/page";
import { experienceData } from "@/data";
import { Col, Row, Timeline, Tooltip } from "antd";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { motion } from "framer-motion";
import { useState } from "react";

const getItems = (currentExp, handleClickTimeline) => {
  return experienceData.map((item, index) => {
    return {
      color: BLACK_COLOR,
      children: (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          className={`text-lg p-1 ${
            index === currentExp
              ? "_text-black font-bold"
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

function ExperiencePage() {
  const [currentExp, setCurrentExp] = useState(0);
  const [currentExpData, setCurrentExpData] = useState(experienceData[0]);

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
          <h1 className="text-4xl font-bold mb-12">MY WORK EXPERIENCE</h1>
          <Row justify="space-between" className="w-full">
            <Col span={10}>
              <Timeline
                mode="alternate"
                items={getItems(currentExp, handleClickTimeline)}
              />
            </Col>
            <Col span={10}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="h-full w-full rounded-lg neubrutalism"
              >
                <Row justify="center" className="flex-col items-center">
                  <Col span={12} className="w-full h-1/2">
                    {currentExpData.img}
                  </Col>
                  <section className="w-full p-3">
                    <h2 className="text-2xl font-extrabold">
                      {currentExpData.business}
                    </h2>
                    <span className="text-lg font-bold">
                      {currentExpData.position}
                    </span>
                    <p className="text-base">{currentExpData.desc}</p>
                    <div className="flex mt-3">
                      {currentExpData.technicalStack.map((item) => {
                        return (
                          <Tooltip
                            key={item.name}
                            title={item.name}
                            placement="top"
                          >
                            <div className="w-8 h-8 rounded-full mr-3">
                              {item.icon}
                            </div>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </section>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </div>
      </LayoutContent>
    </Element>
  );
}

export default ExperiencePage;
