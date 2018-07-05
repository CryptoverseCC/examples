import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="title">{this.props.title}</h1>
          {this.props.subtitle &&
            <p className="subtitle">{this.props.subtitle}</p>
          }
        </div>
      </header>
    );
  }
}

export default Header;