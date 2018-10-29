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
        <NavigationBar background="black" text="#FCD819" logo={Logo}/>
        <Router/>
        <Footer background="black" text="white"/>
      </div>
    );
  }
}

export default App;
