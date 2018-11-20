import React from 'react';
import { Container, Col, Row } from 'reactstrap';

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
          <h4>We're proud to be your neighborhood bar.</h4>
          <h4>We offer you lovingly crafted cocktails and food made by Chef Dylan White.</h4>
          <h4>We feature house ground, vegetarian fed, Cascade Natural aged beef, sandwich rolls from An Xuyen, desserts from Finales Bakery, and fresh juice from Aloha Juice Company.</h4>
          <h4>Relax and meet your neighbors.</h4>
          <h4>We gladly do to-go orders for an extra $1 per item. 20% gratuity will be added to parties of 6 or more and abandoned credit cards.</h4>
          <h4>We never close early!</h4>
          <h4>Thank you for your support</h4>
        </Col>
      </Row>
    </Container>
  );
};
