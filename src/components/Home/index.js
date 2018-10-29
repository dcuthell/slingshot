import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css';

import FBEmbedFrame from '../FBEmbedFrame';


class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <Row>
          <Col>
            <h1>Welcome to the Starday!</h1>
            <h3>The Most OKest Bar in Portland!</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Upcoming Events</h4>
            <FBEmbedFrame data="events" account="TheStardayTavern"/>
          </Col>
          <Col>
            <h4>Recent Posts</h4>
            <FBEmbedFrame data="timeline" account="TheStardayTavern"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
