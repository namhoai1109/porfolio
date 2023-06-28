import Logo from "@/assets/svg/Logo";
import { navbarItems } from "@/constants/page";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
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
          className="inline-block max-lg:block max-lg:mb-2 text-lg max-sm:text-base px-2 py-1 ml-2 rounded navbar hover:cursor-pointer"
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
      <div className="flex justify-center fixed top-0 right-0 left-0 _bg-blur z-50">
        <div
          className={`w-[1480px] flex items-center justify-between py-2 px-5`}
        >
          <div className="w-28 max-lg:w-24 max-sm:w-20">
            <Logo />
          </div>
          <ul className="max-lg:hidden flex items-center justify-center">
            {renderNavbarItems()}
          </ul>

          {/* responsive */}
          <div
            onClick={showDrawer}
            className="lg:hidden max-sm:text-sm p-2 flex items-center hover:cursor-pointer"
          >
            <MenuOutlined />
          </div>
          <Drawer
            width={280}
            className="lg:hidden"
            placement="right"
            onClose={closeDrawer}
            open={open}
          >
            <ul>{renderNavbarItems(closeDrawer)}</ul>
          </Drawer>
        </div>
      </div>
      {children}
    </main>
  );
}

export default CustomLayout;
