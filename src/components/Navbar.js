import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="https://userfeeds.io" className="navbar-item">Userfeeds</a>
            <span className="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="https://userfeeds.io/collectibles" className="navbar-item">Use Cases</a>
              <a href="https://userfeeds.io/protocol" className="navbar-item">Protocol</a>
              <a href="https://t.me/userfeeds" className="navbar-item is-linkexchange">
                Join our Telegram <i className="rarr" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;