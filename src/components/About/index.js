import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import IGFrame from '../IGFrame';


export default function About(props) {
  return(
    <Container className="About">
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
