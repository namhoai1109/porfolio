import Logo from "@/assets/Logo";
import { MAX_WITDH_NAVBAR, navbarItems } from "@/constants/page";
import { Col, Row } from "antd";
import { Link } from "react-scroll";

function CustomLayout({ children }) {
  return (
    <main>
      <Row
        justify="center"
        className="fixed top-0 right-0 left-0 _bg-blur z-50"
      >
        <Col
          flex={MAX_WITDH_NAVBAR}
          className="flex items-center justify-between py-1"
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
                    className="inline-block text-lg px-2 py-1 ml-2 rounded navbar"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
      {children}
    </main>
  );
}

export default CustomLayout;
