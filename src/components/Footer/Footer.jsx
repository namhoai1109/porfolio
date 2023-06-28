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
        <div className="flex _text-white py-12 border-b-2 border-b-zinc-700">
          <div className="w-1/3 max-sm:w-1/2">
            <h1 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-bold mb-2">
              nnamm&apos;s porfolio
            </h1>
            <p className="text-base max-md:text-sm max-sm:text-xs mb-2">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <div className="w-28 max-lg:w-24 max-sm:w-20">
              <Logo />
            </div>
          </div>
          <div className="w-1/3 max-sm:hidden flex flex-col items-center">
            <div>
              <h1 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-bold mb-2">
                Quick link
              </h1>
              {navbarItems.map((item) => {
                return (
                  <LinkScroll
                    key={item.name}
                    to={item.name}
                    spy={true}
                    smooth={true}
                    href="#"
                    className="flex items-center text-lg py-1 trans-effect quick-link w-fit max-lg:text-base max-md:text-sm max-sm:text-xs"
                  >
                    <CaretRightOutlined />
                    {item.label}
                  </LinkScroll>
                );
              })}
            </div>
          </div>
          <div className="w-1/3 max-sm:w-1/2 flex flex-col items-center">
            <div>
              <h1 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-bold mb-2">
                Contact Info
              </h1>
              <p className="text-base max-md:text-sm max-sm:text-xs flex items-center">
                <MailOutlined className="mr-2" /> namhoailu@gmail.com
              </p>
              <p className="text-base max-md:text-sm max-sm:text-xs flex items-center">
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
                      className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm flex items-center justify-center p-2 max-md:p-1 footer-link rounded-full mr-2"
                    >
                      {social.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:text-sm max-sm:text-xs flex justify-center _text-white py-4 items-center">
          Designed and developed by me{" "}
          <HeartFilled className="ml-2 text-pink-600" />
        </div>
      </LayoutContent>
    </div>
  );
}

export default Footer;
