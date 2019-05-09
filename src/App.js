import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routes from './components/Routes'

class App extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./stars.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {  

    const styles = {
      main: {
        color: '#fff'
      }
    }

    return (
        <div style={styles.main} className="App">
          <Navbar />
          <Routes />
        </div>
    );
  }
}

export default App;
