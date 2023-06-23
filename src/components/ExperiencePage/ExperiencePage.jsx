import { BLACK_COLOR, EXPERIENCE_NAME } from "@/constants/page";
import { experienceData } from "@/data";
import { Col, Row, Timeline } from "antd";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { motion } from "framer-motion";
import { useState } from "react";

const getItems = (currentExp, setCurrentExp) => {
  return experienceData.map((item, index) => {
    return {
      color: BLACK_COLOR,
      children: (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          className={`text-lg p-1 ${
            index === currentExp
              ? "_text-black font-bold"
              : "text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
          } transition-all duration-300 ease-in-out`}
          onClick={() => setCurrentExp(index)}
        >
          {item.time}
        </motion.span>
      ),
    };
  });
};

function ExperiencePage() {
  const [currentExp, setCurrentExp] = useState(0);
  return (
    <Element
      name={EXPERIENCE_NAME}
      className="w-full h-screen flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <Row>
          <Col span={10}>
            <Timeline
              mode="alternate"
              items={getItems(currentExp, setCurrentExp)}
            />
          </Col>
        </Row>
      </LayoutContent>
    </Element>
  );
}

export default ExperiencePage;
