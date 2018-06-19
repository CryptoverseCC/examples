import React, { Component } from 'react';
import logo from './logo.svg';
import examples from './examples.json';
import './App.css';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import GridList, { GridListTile } from 'material-ui/GridList';
import Button from 'material-ui/Button';


const classes = {
  red: "",
  card: "card",
  media: "",
  title: {
    textTransform: "capitalize"
  }
}

examples.sort(function(a, b) {
  var titleA = a.title.toUpperCase(); // ignore upper and lowercase
  var titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  return 0;
});

class App extends Component {
  render() {
    return (
      <div className="App is-examples">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href="#" className="navbar-item">Userfeeds</a>
              <span className="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="#" className="navbar-item">Use Cases</a>
                <a href="#" className="navbar-item">Protocol</a>
                <a href="https://t.me/userfeeds" className="navbar-item is-linkexchange">
                  Join our Telegram <i className="rarr" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="is-examples">
          <header className="header">
            <div className="container">
              <h1 className="title">Examples</h1>
              <p className="subtitle">A collection of example interfaces</p>
            </div>
          </header>
          <div className="container">
            <div className="columns is-multiline">
            {examples.map(app => (
              <div className="column is-one-third">
                  <a href="" className={classes.card}>
                    <div className="card-image">
                      <div className="card-image-wrap">
                        <img src="image" alt="title" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h4> {app.title} </h4>
                      <p> {app.description} </p>
                      <p className="has-text-centered">
                        <button onClick={() => {
                          window.open(`https://userfeeds.github.io/examples/examples/${app.id}/`, '_blank');
                        }}>
                          Go to live example
                        </button>
                        <button onClick={() => {
                          window.open(`https://github.com/Userfeeds/examples/tree/master/examples/${app.id}/`, '_blank');
                        }}>
                          View the code
                        </button>
                      </p>
                    </div>
                  </a>
              </div>
            ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
