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
  card: "",
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
              <div className={"column is-one-third is-"+app.id}>
                  <div className={"card is-"+app.id}>
                    <div className="card-image">
                      <div className="card-image-wrap">
                        <img src={app.img} alt={app.title} />
                      </div>
                    </div>
                    <div className="card-content">
                      <h4> {app.title} </h4>
                      <p> {app.description} </p>
                      <p className="has-text-centered">
                        <a href="" onClick={() => {
                          window.open(`https://userfeeds.github.io/examples/examples/${app.id}/`, '_blank');
                        }}>
                          Live examples >
                        </a>
                        <a href="" onClick={() => {
                          window.open(`https://github.com/Userfeeds/examples/tree/master/examples/${app.id}/`, '_blank');
                        }}>
                          Code >
                        </a>
                      </p>
                    </div>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </main>
        <footer className="footer">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        <div className="column is-2-tablet is-6-mobile is-first">
          <h5 className="footer-title"><a href="Home">Userfeeds</a></h5>
          <ul className="footer-links">
            <li>
              <a href="Protocol">Protocol</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Careers">Careers</a>
            </li>
          </ul>
        </div>
        <div className="column is-2-tablet is-6-mobile">
          <h5 className="footer-title">Use cases</h5>
          <ul className="footer-links">
            <li>
              <a href="Collectibles">Collectibles</a>
            </li>
            <li>
              <a href="Airdrop">Airdrop</a>
            </li>
            <li>
              <a href="Annotations">Annotations</a>
            </li>
            <li>
              <a href="Newsfeeds">Newsfeeds</a>
            </li>
            <li>
              <a href="Messaging">Messaging</a>
            </li>

          </ul>
        </div>
        <div className="column is-2-tablet is-6-mobile">
          <h5 className="footer-title">Developers</h5>
          <ul className="footer-links">
            <li>
              <a href="https://userfeeds-platform.readthedocs-hosted.com/en/latest/">Documentation</a>
            </li>
            <li>
              <a href="Examples">Examples</a>
            </li>
            <li>
              <a href="http://stats.pingdom.com/fj4x6r76hd8z">API Status</a>
            </li>
          </ul>
        </div>
        <div className="column is-2-tablet is-6-mobile">
          <h5 className="footer-title">Products</h5>
          <ul className="footer-links">
            <li>
              <a href="http://linkexchange.io" className="is-target-blank">
                Link Exchange <i className="rarr" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://userfeeds.github.io/cryptopurr/">
                Purr<i className="rarr" aria-hidden="true"></i>
              </a>
              <a href="https://userfeeds.github.io/cryptobeep/">
                Beep<i className="rarr" aria-hidden="true"></i>
              </a>
              <a href="https://userfeeds.github.io/cryptomoji/">
                Moji<i className="rarr" aria-hidden="true"></i>
              </a>
              <a href="https://userfeeds.github.io/robohash-book/">
                Hash<i className="rarr" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="column is-4-tablet is-12-mobile is-links">
          <div className="footer-social">
            <a href="https://t.me/userfeeds">
              <img src="assets/logo-footer-telegram.svg" width="50" height="50" alt="Telegram"/>
              <strong>Telegram</strong>
            </a>
            <a href="https://gitter.im/Userfeeds/">
              <img src="assets/logo-footer-gitter.svg" width="50" height="50" alt="Gitter"/>
              <strong>Gitter</strong>
            </a>
            <a href="https://medium.com/userfeeds">
              <img src="assets/logo-footer-medium.svg" width="50" height="50" alt="Medium"/>
              <strong>Medium</strong>
            </a>
            <a href="https://twitter.com/userfeeds">
              <img src="assets/logo-footer-twitter.svg" width="50" height="50" alt="Twitter"/>
              <strong>Twitter</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column is-4 is-newsletter">
          <h5 className="footer-title">Sign up for updates</h5>
          <form action="https://userfeeds.us17.list-manage.com/subscribe/post?u=9cf96f96e2410ddcc7ccd1577&amp;id=0317d71772" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
            <div className="footer-form field has-addons">
              <div className="control">
                <input className="input is-large" placeholder="Your email address" value="" type="email" id="mce-EMAIL" name="EMAIL"/>
              </div>
              <div className="control">
                <button className="button is-large is-info" type="submit"  value="Subscribe me" name="subscribe">
                  Subscribe me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
      </div>
    );
  }
}

export default App;
