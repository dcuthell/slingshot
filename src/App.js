import React, { Component } from 'react';
import Router from './components/Router';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import Logo from './img/logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="grey" text="black" hovercolor="white" logo={Logo}/>
        <Router background="grey" text="black" hovercolor="white"/>
        <Footer background="grey" text="black" hovercolor="green"/>
      </div>
    );
  }
}

export default App;
