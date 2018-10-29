import React, { Component } from 'react';
import Router from './components/Router';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import Logo from './img/logo.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="grey" text="black" logo={Logo}/>
        <Router/>
        <Footer background="grey" text="black"/>
      </div>
    );
  }
}

export default App;
