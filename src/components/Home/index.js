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
        <Col xl="6">
          <IGFrame source="BoSqbVChiY1"/>
        </Col>
        <Col xl="6">
          <IGFrame source="BmkgTGFhCeH"/>
        </Col>
        <Col xl="6">
          <IGFrame source="BjlQeKLhSgr"/>
        </Col>
        <Col xl="6">
          <IGFrame source="BgWzTkFhxTw"/>
        </Col>
      </Row>
    </Container>
  );
};
