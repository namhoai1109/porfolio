import { ABOUT_NAME } from "@/constants/page";
import { Element } from "react-scroll";

function AboutPage() {
  return (
    <Element
      name={ABOUT_NAME}
      className="w-full h-screen flex items-center justify-center _bg-white"
    >
      About
    </Element>
  );
}

export default AboutPage;
