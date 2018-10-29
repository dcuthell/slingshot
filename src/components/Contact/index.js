import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';
import "./styles.css";

import GoogleMapFrame from '../GoogleMapFrame';

class Contact extends Component {
  render() {
    return (
      <Container className="Contact">
        <Row>
          <Col>
            <h1>Call</h1>
            <a href="tel:+15034456649"><h1>(503)-445-6649</h1></a>
          </Col>
          <Col>
            <h1>5532 SE Center St</h1>
            <h1>Portland, OR</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <GoogleMapFrame name="Slingshot+Lounge" location="Portland+OR"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="mailto:info@slingshotloungepdx.com"><h1>info@slingshotloungepdx.com</h1></a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
