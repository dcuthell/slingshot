import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './styles.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  	this.toggle2 = this.toggle2.bind(this);
    this.state = {
        isOpen: false,
        expand: "md",

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
	toggle2() {
		if (this.state.isOpen) {
			this.setState({
	      isOpen: false
	    });
		}
  }
  render() {
    return (
      <Navbar expand="md"
        className={this.props.className}
        style={{backgroundColor: this.props.background, color: this.props.text}}>
        <NavbarBrand href="#/" onClick={this.toggle2}>
          <img id="logo" src={this.props.logo} alt="Business Logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto nav-options" navbar>
            <NavItem>
							<NavLink href={"#/menu"} onClick={this.toggle2}>Menu
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/about"} onClick={this.toggle2}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/contact"} onClick={this.toggle2}>Contact</NavLink>
						</NavItem>
          </Nav>
          <Nav className="social-icons">
						<NavItem>
							<NavLink href="https://www.facebook.com/slingshotlounge/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.yelp.com/biz/the-slingshot-lounge-portland" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-yelp desktop-only"></span></NavLink>
						</NavItem>
            <NavItem>
							<NavLink href="https://www.tripadvisor.com/Attraction_Review-g52024-d6198137-Reviews-Slingshot_Lounge-Portland_Oregon.html" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-tripadvisor desktop-only"></span></NavLink>
						</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavigationBar.defaultProps = {
  className: "sticky-top navbar-dark NavigationBar",
  text: 'white',
  background: 'black',
  logo: 'none'
}

export default NavigationBar;
