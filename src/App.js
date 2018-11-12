import React, { Component } from 'react';
import ParallaxPage from './components/ParallaxPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import Logo from './img/logo.png';
import Background from './img/fbcover.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="black" text="#6180B7" hovercolor="#F8EBBE" logo={Logo}/>
        <ParallaxPage background="#FAF3C7" text="black" hovercolor="#6180B7" backgroundImage={Background}/>
        <Footer background="black" text="#6180B7" hovercolor="#F8EBBE"/>
      </div>
    );
  }
}

export default App;
