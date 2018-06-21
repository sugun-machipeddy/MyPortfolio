import React, { Component } from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import NavigationBar from './components/NavigationBar.jsx';
import Main from './components/Main.jsx';
import SnowStorm from 'react-snowstorm';

class App extends Component {
  render() {
    return (
      <div>
        <SnowStorm snowColor='#1B2631' animationInterval='50' excludeMobile='false' flakesMax="60"/>
        <NavigationBar/>
        <Main/>
      </div>
    );
  }
}

export default hot(module)(App);
