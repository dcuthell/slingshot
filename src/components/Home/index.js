import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import FBEmbedFrame from '../FBEmbedFrame';
import InstagramFrame from '../InstagramFrame';
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
      <InstagramFrame />
      <Row>
        <Col>
          <IGFrame/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Recent Facebook Posts</h4>
          <FBEmbedFrame data="timeline" account="slingshotlounge"/>
        </Col>
        <Col>
          <h4>Events</h4>
          <FBEmbedFrame data="events" account="slingshotlounge"/>
        </Col>
      </Row>
    </Container>
  );
};
