import Logo from "@/assets/svg/Logo";
import { MAX_WITDH_NAVBAR, navbarItems } from "@/constants/page";
import { Link } from "react-scroll";

function CustomLayout({ children }) {
  return (
    <main>
      <div className="flex justify-center fixed top-0 right-0 left-0 _bg-blur z-50">
        <div
          className={`w-[${MAX_WITDH_NAVBAR}] flex items-center justify-between py-2 px-5`}
        >
          <Logo />
          <ul className="flex items-center justify-center">
            {navbarItems.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    activeClass="_navbar-active"
                    to={item.name}
                    spy={true}
                    smooth={true}
                    className="inline-block text-lg px-2 py-1 ml-2 rounded navbar hover:cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {children}
    </main>
  );
}

export default CustomLayout;
