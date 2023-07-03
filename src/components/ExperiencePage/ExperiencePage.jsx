import { BLACK_COLOR, EXPERIENCE_NAME } from "@/constants/page";
import { experienceData } from "@/data";
import { Timeline, Tooltip, Typography } from "antd";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { useInView } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { WidthViewportContext } from "../CustomLayout/CustomLayout";

const getItems = (timelineInView, currentExp, handleClickTimeline) => {
  return experienceData.map((item, index) => {
    return {
      color: BLACK_COLOR,
      children: (
        <div
          style={{
            "--duration": "0.5s",
            "--delay": `${1 + index * 0.2}s`,
          }}
          className={` trans-effect duration-custom delay-custom from-opa-0 ${
            timelineInView ? "to-start" : ""
          }`}
          onClick={() => handleClickTimeline(index)}
        >
          <div
            className={`text-lg max-lg:text-base max-[800px]:text-sm max-sm:text-xs p-1 ${
              index === currentExp
                ? "_text-black font-semibold md:font-bold"
                : "text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
            } trans-effect`}
          >
            <div>{item.time}</div>
            <div>{item.position}</div>
          </div>
        </div>
      ),
    };
  });
};

function ExperiencePage() {
  const [currentExp, setCurrentExp] = useState(0);
  const [currentExpData, setCurrentExpData] = useState(experienceData[0]);
  const viewPort = useContext(WidthViewportContext);
  const isMobile = viewPort.width <= 600;

  const handleClickTimeline = (index) => {
    setCurrentExp(index);
    setCurrentExpData(experienceData[index]);
  };

  const timelineRef = useRef();
  const timelineInView = useInView(timelineRef);

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
            <div ref={timelineRef} className="w-5/12 max-md:w-1/2">
              <div className="lg:hidden">
                <Timeline
                  mode={"left"}
                  items={getItems(
                    timelineInView,
                    currentExp,
                    handleClickTimeline
                  )}
                />
              </div>
              <div className="max-lg:hidden">
                <Timeline
                  mode={"alternate"}
                  items={getItems(
                    timelineInView,
                    currentExp,
                    handleClickTimeline
                  )}
                />
              </div>
            </div>
            <div className="w-5/12">
              <div
                style={{ "--duration": "1s", "--delay": "2.2s" }}
                className={`h-full max-md:h-fit w-full rounded-lg neubrutalism duration-custom delay-custom from-right-100 ${
                  timelineInView ? "to-start" : ""
                }`}
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
                    <div className="flex flex-wrap max-sm:justify-center mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </LayoutContent>
    </Element>
  );
}

export default ExperiencePage;
