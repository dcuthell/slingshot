import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import { Link } from 'react-router-dom';
import './styles.css';

export default function NotFound (props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>404 Not Found</h1>
          <a href={"/"}><h2>Return to Home</h2></a>
        </Col>
      </Row>
    </Container>
  );
};
