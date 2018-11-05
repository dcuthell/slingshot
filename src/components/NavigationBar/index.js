import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import rgba from 'rgba-convert';
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
    const colorarray = rgba(this.props.text);
    const rgbastring = '' + colorarray[0] + ', ' + colorarray[1] + ', ' + colorarray[2] + ', 0.5 ';
    return (
      <Navbar expand="md"
        className={this.props.className}
        style={{backgroundColor: this.props.background, color: this.props.text}}>
        <NavbarBrand href="#/" onClick={this.toggle2}>
          <img id="logo" src={this.props.logo} alt="Business Logo"></img>
        </NavbarBrand>
        <style>
          {`
            #toggleIcon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(` + rgbastring + `)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")!important;
              }

            .nav-link:hover {
            	border-bottom: 1px ` + this.props.hovercolor + ` solid;
            	color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
        <NavbarToggler onClick={this.toggle}>
          <span className="navbar-toggler-icon" id="toggleIcon"/>
        </NavbarToggler>
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
  hovercolor: 'grey',
  logo: 'none'
}

export default NavigationBar;
