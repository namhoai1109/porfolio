import { Col, Row } from "antd";
import LayoutContent from "../LayoutContent";
import {
  CaretRightOutlined,
  EnvironmentOutlined,
  HeartFilled,
  MailOutlined,
} from "@ant-design/icons";
import { homeData } from "@/data";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Logo from "@/assets/svg/Logo";
import { navbarItems } from "@/constants/page";

function Footer() {
  return (
    <div className="_bg-black">
      <LayoutContent>
        <Row className="_text-white py-12 border-b-2 border-b-zinc-700">
          <Col span={8}>
            <h1 className="text-2xl font-bold mb-2">nnamm&apos;s porfolio</h1>
            <p className="text-base mb-2">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <Logo />
          </Col>
          <Col span={8} className="flex flex-col items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">Quick link</h1>
              {navbarItems.map((item) => {
                return (
                  <LinkScroll
                    key={item.name}
                    to={item.name}
                    spy={true}
                    smooth={true}
                    className="flex items-center text-lg py-1 trans-effect quick-link w-fit"
                  >
                    <CaretRightOutlined />
                    {item.label}
                  </LinkScroll>
                );
              })}
            </div>
          </Col>
          <Col span={8} className="flex flex-col items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">Contact Info</h1>
              <p className="text-base flex items-center">
                <MailOutlined className="mr-2" /> namhoailu@gmail.com
              </p>
              <p className="text-base flex items-center">
                <EnvironmentOutlined className="mr-2" /> Ho Chi Minh City,
                Vietnam
              </p>
              <div className="flex mt-2">
                {homeData.socials.map((social) => {
                  return (
                    <Link
                      key={social.link}
                      href={social.link}
                      target="_blank"
                      className="text-xl flex items-center justify-center p-2 footer-link rounded-full mr-2"
                    >
                      {social.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Row justify="center" className="_text-white py-4 items-center">
          Designed and developed by me{" "}
          <HeartFilled className="ml-2 text-pink-600" />
        </Row>
      </LayoutContent>
    </div>
  );
}

export default Footer;
