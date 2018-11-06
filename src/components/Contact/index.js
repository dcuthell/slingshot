import React from "react";
import { Container, Col, Row } from 'reactstrap';

import GoogleMapFrame from '../GoogleMapFrame';

export default function Contact (props) {
  return (
    <Container className="Contact">
      <Row>
        <Col>
          <h3>Call</h3>
          <a href="tel:+15034456649"><h3>(503)-445-6649</h3></a>
        </Col>
        <Col>
          <h3>5532 SE Center St</h3>
          <h3>Portland, OR</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <GoogleMapFrame name="Slingshot+Lounge" location="Portland+OR"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="mailto:info@slingshotloungepdx.com"><h4>info@slingshotloungepdx.com</h4></a>
        </Col>
      </Row>
    </Container>
  );
};
