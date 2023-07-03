import Logo from "@/assets/svg/Logo";
import { navbarItems } from "@/constants/page";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-scroll";

const renderNavbarItems = (closeDrawer = () => {}) => {
  return navbarItems.map((item) => {
    return (
      <li key={item.name}>
        <Link
          activeClass="_navbar-active"
          to={item.name}
          spy={true}
          smooth={true}
          href="#"
          onClick={closeDrawer}
          className="inline-block max-lg:block max-lg:mb-2 text-lg max-sm:text-base px-2 py-1 ml-2 rounded trans-effect navbar hover:cursor-pointer"
        >
          {item.label}
        </Link>
      </li>
    );
  });
};

function CustomLayout({ children }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <main>
      <div className="flex justify-center fixed top-0 right-0 left-0 _bg-blur z-30">
        <div
          className={`w-[1480px] flex items-center justify-between py-2 px-5`}
        >
          <div className="w-28 max-lg:w-24 max-sm:w-20">
            <Logo />
          </div>
          <ul className="max-lg:hidden flex items-center justify-center">
            {renderNavbarItems()}
          </ul>
          <div
            onClick={showDrawer}
            className="lg:hidden max-sm:text-sm p-2 flex items-center hover:cursor-pointer"
          >
            <MenuOutlined />
          </div>
        </div>
      </div>
      {children}
      <div
        className={`${
          open ? "block" : "hidden"
        } trans-effect fixed inset-0 bg-black opacity-40 z-40`}
        onClick={closeDrawer}
      />
      <div
        className={`fixed top-0 bottom-0 right-0 trans-effect ${
          open ? "w-2/5" : "w-0"
        } _bg-white z-50`}
      >
        <ul className="mr-2 mt-2">{renderNavbarItems(closeDrawer)}</ul>
      </div>
    </main>
  );
}

export default CustomLayout;
