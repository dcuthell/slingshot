import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import InstagramFrame from '../InstagramFrame';
import './styles.css';

class About extends Component {
render() {
  return(
    <Container className="About">
      <Row>
        <Col>
          <h1>Header 1</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Header 2</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Header 3</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Header 4</h4>
        </Col>
      </Row>
      <Row>
        <InstagramFrame />
      </Row>
    </Container>
    );
  }
}

export default About;
