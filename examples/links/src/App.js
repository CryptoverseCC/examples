import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Userfeeds platform Example Interface.</h1>
        </header>
        <p className="App-intro">
          This interface show all links submitted with transaction of Ether.
        </p>
        <p>
          Source code for this app can be found at <a href="http://github.com/Userfeeds/examples/examples/links">http://github.com/Userfeeds/examples/examples/links</a>
        </p>
      </div>
    );
  }
}

export default App;
