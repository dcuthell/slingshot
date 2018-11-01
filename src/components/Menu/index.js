import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css';

class Menu extends Component {
render() {
  return(
    <Container className="Menu">
      <Row>
        <Col>
          <h1>Cocktail Menu</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>El Caballo Gigante - 8</h2>
          <p>espolon reposado, ancho reyes, sour, splash of soda served up</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Dancing Queen - 7</h2>
          <p>reyka, wild roots, soda served tall</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Keith Fortune - 8</h2>
          <p>makers mark, cherry herring, drambuie served up with a cherry</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Micro Vacation - 8</h2>
          <p>stoli peach, coconut ciroc, passionfruit puree, soda served tall</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Double Trouble - 7</h2>
          <p>shot of milagro silver and a tecate tall boy</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>New Tattoo - 7</h2>
          <p>sailor jerry, ancho reyes, hot cocoa, whip cream, cinnamon and cayenne</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Fruity Beer - 6</h2>
          <p>framboise and terminal gravity e.s.g.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Lost Weekend - 7</h2>
          <p>gin, aperol, grape juice, splash of lemon and soda served tall</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Viking Sundress - 7</h2>
          <p>aquavit, root and gingerale</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Blood Orange 75 - 7</h2>
          <p>cava brandy, blood orange puree</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1> Secondary Font Options </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Open Sans'}}>Open Sans</h1>
          <p style={{fontFamily: 'Open Sans'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Raleway'}}>Raleway</h1>
          <p style={{fontFamily: 'Raleway'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{fontFamily: 'Abril Fatface'}}>Abril Fatface</h1>
          <p style={{fontFamily: 'Abril Fatface'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
