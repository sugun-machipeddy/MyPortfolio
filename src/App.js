import React, { Component } from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import NavigationBar from './components/NavigationBar.jsx';
import Main from './components/Main.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavigationBar/>
        </header>
        <Main/>
      </div>
    );
  }
}

export default hot(module)(App);
