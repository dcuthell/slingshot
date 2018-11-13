import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import IGFrame from '../IGFrame';

export default function Home (props) {
  return (
    <Container className="Home">
      <Row>
        <Col>
          <h1>Welcome to the Slingshot Lounge</h1>
          <h3>Happy Hour 3-7pm Mon-Fri</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Instagram Activity</h4>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <IGFrame source="Bp3KFvyg63z"/>
        </Col>
        <Col lg="6">
          <IGFrame source="BaKs7RhnSse"/>
        </Col>
        <Col lg="6">
          <IGFrame source="BoSqbVChiY1"/>
        </Col>
        <Col lg="6">
          <IGFrame source="BU4-WH9lV7K"/>
        </Col>
      </Row>
    </Container>
  );
};
