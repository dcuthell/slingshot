import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css';

import FBEmbedFrame from '../FBEmbedFrame';
import InstagramFrame from '../InstagramFrame';


class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <Row>
          <Col>
            <h1>Welcome to the Slingshot Lounge</h1>
            <h3>Good drinks, good people, good times</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Instagram Activity</h4>
          </Col>
        </Row>
        // <InstagramFrame />
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
  }
}

export default Home;
