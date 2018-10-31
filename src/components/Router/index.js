import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import rgba from 'rgba-convert';
import Home from '../Home';
import Menu from '../Menu';
import About from '../About';
import Contact from '../Contact';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
    const colorarray = rgba(this.props.background);
    const background = "rgba(" + colorarray[0] + ", " + colorarray[1] + ", " + + colorarray[2] + ", 0.8)"
    return (
      <div className="Router" style={{color: this.props.text, backgroundColor: background, backgroundImage: "url(" + this.props.backgroundImage + ")"}}>
        <style>
          {`
            .Router a:hover {
              border-bottom: 1px ` + this.props.hovercolor + ` solid;
              color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

Router.defaultProps = {
  text: "white",
  background: "black",
  hovercolor: "grey",
  backgroundImage: '../../img/background.jpg'
}

export default Router;
