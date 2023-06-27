import { EDUCATION_NAME } from "@/constants/page";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { educationData } from "@/data";
import Image from "next/image";
import { Col, Row } from "antd";
import Link from "next/link";
import { LinkOutlined } from "@ant-design/icons";

function EducationPage() {
  return (
    <Element
      name={EDUCATION_NAME}
      className="w-full h-[90vh] flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <h1 className="text-4xl font-bold mb-12 text-center">EDUCATION</h1>
        <Row justify="center">
          <Col span={18}>
            {educationData.map((item) => {
              return (
                <Row
                  justify="space-between"
                  key={item.name}
                  className="neubrutalism mb-5 rounded-lg overflow-hidden"
                >
                  <Col span={8}>
                    <Image
                      src={item.image}
                      alt="school-image"
                      className="object-cover w-full aspect-video"
                    />
                  </Col>
                  <Col
                    span={15}
                    className="pr-5 flex flex-col items-start justify-center"
                  >
                    <h1 className="text-2xl font-bold pl-1">{item.name}</h1>
                    <h2 className="text-lg font-bold pl-1">
                      {item.time} | {item.status}
                    </h2>
                    <p className="text-lg pl-1">Major: {item.major}</p>
                    <Link
                      className="text-base pl-[2px] inline-block rounded trans-effect hover-link"
                      href={item.rank.link}
                      target="_blank"
                    >
                      {item.rank.name} <LinkOutlined />
                    </Link>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </LayoutContent>
    </Element>
  );
}

export default EducationPage;
