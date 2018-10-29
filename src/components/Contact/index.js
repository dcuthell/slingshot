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
            <a href="tel:+19718884001"><h1>(971)-888-4001</h1></a>
          </Col>
          <Col>
            <h1>6517 SE Foster Rd</h1>
            <h1>Portland, OR</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <GoogleMapFrame/>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="mailto:info@stardaytavern.com"><h1>info@stardaytavern.com</h1></a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
