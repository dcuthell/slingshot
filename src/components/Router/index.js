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
    const colorarray = rgba(this.props.text);

    const background = "rgba(" + colorarray[0] + ", " + colorarray[1] + ", " + + colorarray[2] + ", 0.8)"
    console.log(background);
    return (
      <div className="Router" style={{backgroundColor: background}}>
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
  text: "red"
}

export default Router;
