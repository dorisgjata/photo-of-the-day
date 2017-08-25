import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo.js'
class App extends Component {
  render() {
    return (
      <div className="App">       
      <Photo/>
      </div>
    );
  }
}

export default App;
