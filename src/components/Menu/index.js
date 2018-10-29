import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css';

class Menu extends Component {
render() {
  return(
    <Container className="Menu">
      <Row>
        <Col>
          <h1> Secondary Font Options </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Lato'}}>Lato</h1>
          <p style={{fontFamily: 'Lato'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Montserrat'}}>Montserrat</h1>
          <p style={{fontFamily: 'Montserrat'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Oswald'}}>Oswald</h1>
          <p style={{fontFamily: 'Oswald'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Roboto'}}>Roboto</h1>
          <p style={{fontFamily: 'Roboto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Menu;
