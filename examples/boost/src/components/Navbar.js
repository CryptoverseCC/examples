import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-menu">
            <div className="navbar-start">
              <a href="https://userfeeds.io/examples" className="navbar-item">&larr; See all examples</a>
            </div>
            <div className="navbar-end">
              <a href="https://github.com/Userfeeds/examples/tree/master/examples/boost" target="_blank" rel="noopener noreferrer" className="navbar-item">
                See it on Github
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;