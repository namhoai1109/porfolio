import { MAX_WITDH_CONTENT } from "@/constants/page";
import { Col, Row } from "antd";

function LayoutContent({ children }) {
  return (
    <Row justify="center" className="w-full">
      <Col flex={MAX_WITDH_CONTENT} className="px-5">
        {children}
      </Col>
    </Row>
  );
}

export default LayoutContent;
