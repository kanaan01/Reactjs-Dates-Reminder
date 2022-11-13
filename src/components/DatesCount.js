import React from "react";
import { Row, Col } from "react-bootstrap";

const DatesCount = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col className=" d-flex justify-content-center">
        لديك {person.length} مواعيد
      </Col>
    </Row>
  );
};

export default DatesCount;
