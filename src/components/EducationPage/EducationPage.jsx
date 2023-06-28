import { EDUCATION_NAME } from "@/constants/page";
import { Element } from "react-scroll";
import LayoutContent from "../LayoutContent";
import { educationData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { LinkOutlined } from "@ant-design/icons";

function EducationPage() {
  return (
    <Element
      name={EDUCATION_NAME}
      className="w-full h-[90vh] max-md:h-screen flex items-center justify-center _bg-white"
    >
      <LayoutContent>
        <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold mb-12 max-md:mb-5 text-center">
          EDUCATION
        </h1>
        <div className="flex justify-center">
          <div className="w-3/4">
            {educationData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex max-md:flex-col justify-between neubrutalism mb-5 rounded-lg overflow-hidden"
                >
                  <div className="w-1/3 max-md:w-full max-md:h-36">
                    <Image
                      src={item.image}
                      alt="school-image"
                      className="object-cover w-full h-full aspect-video"
                    />
                  </div>
                  <div className="w-3/5 max-md:w-full pr-5 max-md:p-1 flex flex-col items-start justify-center">
                    <h1 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extrabold pl-1">
                      {item.name}
                    </h1>
                    <h2 className="text-lg max-lg:text-base max-md:text-sm font-bold pl-1">
                      {item.time} | {item.status}
                    </h2>
                    <p className="text-lg max-lg:text-base max-md:text-sm pl-1">
                      Major: {item.major}
                    </p>
                    <Link
                      className="text-base text-justify max-lg:text-sm max-md:text-xs pl-[2px] inline-block rounded trans-effect hover-link"
                      href={item.rank.link}
                      target="_blank"
                    >
                      {item.rank.name} <LinkOutlined />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </LayoutContent>
    </Element>
  );
}

export default EducationPage;
